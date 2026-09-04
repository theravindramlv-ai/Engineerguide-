// src/data/diagnostic/engine.ts
import type {
  DiagnosticQuestion,
  DiagnosticResult,
  DontLearnYetItem,
  KnowledgeGap,
  MasteryBand,
  PersonalizedNextMove,
  SkillMasteryEstimate,
  TargetCareerId,
  UserBackgroundContext
} from './types';
import { CAREER_OPTIONS, getCareerById, getSkillById, SKILLS_CATALOG } from './skills';
import { DIAGNOSTIC_QUESTIONS, getQuestionsForCareer } from './questions';

export interface UserResponse {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpentMs?: number;
}

export function getMasteryBand(score: number): MasteryBand {
  if (score >= 81) return 'Strong';
  if (score >= 61) return 'Proficient';
  if (score >= 41) return 'Developing';
  if (score >= 21) return 'Beginner';
  return 'Unfamiliar';
}

/**
 * Select the next adaptive question based on previous responses.
 */
export function getNextAdaptiveQuestion(
  careerId: TargetCareerId,
  answeredQuestions: UserResponse[],
  allPool: DiagnosticQuestion[] = DIAGNOSTIC_QUESTIONS
): DiagnosticQuestion | null {
  const answeredIds = new Set(answeredQuestions.map(r => r.questionId));
  const career = getCareerById(careerId);
  const relevantPool = getQuestionsForCareer(careerId);

  // If user just answered a question and got it wrong, check if that question had a prerequisite concept
  if (answeredQuestions.length > 0) {
    const lastAnswer = answeredQuestions[answeredQuestions.length - 1];
    const lastQuestion = allPool.find(q => q.id === lastAnswer.questionId);

    if (lastQuestion && !lastAnswer.isCorrect && lastQuestion.prerequisiteSkillId) {
      // Find a beginner question for the prerequisite skill to test root gap
      const prereqQuestion = allPool.find(
        q =>
          q.skillId === lastQuestion.prerequisiteSkillId &&
          !answeredIds.has(q.id) &&
          q.difficulty === 'beginner'
      );
      if (prereqQuestion) {
        return prereqQuestion;
      }
    }
  }

  // Next prioritize unassessed core skills for this career
  for (const skillId of career.coreSkillIds) {
    const candidate = relevantPool.find(q => q.skillId === skillId && !answeredIds.has(q.id));
    if (candidate) return candidate;
  }

  // Then any remaining unassessed question in relevantPool
  const remaining = relevantPool.find(q => !answeredIds.has(q.id));
  if (remaining) return remaining;

  // Fallback to any remaining in allPool
  const globalRemaining = allPool.find(q => !answeredIds.has(q.id));
  return globalRemaining || null;
}

/**
 * Evaluate user responses and construct complete Skill Profile result.
 */
export function evaluateDiagnostic(
  context: UserBackgroundContext,
  responses: UserResponse[]
): DiagnosticResult {
  const career = getCareerById(context.targetCareer);
  const skillStats: Record<
    string,
    { correctCount: number; totalCount: number; maxDifficultyPassed: number }
  > = {};

  // Initialize stats for career core skills and tested skills
  for (const skillId of career.coreSkillIds) {
    skillStats[skillId] = { correctCount: 0, totalCount: 0, maxDifficultyPassed: 0 };
  }

  // Tally responses
  for (const resp of responses) {
    const question = DIAGNOSTIC_QUESTIONS.find(q => q.id === resp.questionId);
    if (!question) continue;

    const skillId = question.skillId;
    if (!skillStats[skillId]) {
      skillStats[skillId] = { correctCount: 0, totalCount: 0, maxDifficultyPassed: 0 };
    }

    skillStats[skillId].totalCount += 1;
    if (resp.isCorrect) {
      skillStats[skillId].correctCount += 1;
      const diffScore = question.difficulty === 'advanced' ? 3 : question.difficulty === 'intermediate' ? 2 : 1;
      if (diffScore > skillStats[skillId].maxDifficultyPassed) {
        skillStats[skillId].maxDifficultyPassed = diffScore;
      }
    }
  }

  // Compute mastery and confidence per skill
  const skillsMastery: Record<string, SkillMasteryEstimate> = {};
  const strengths: SkillMasteryEstimate[] = [];
  const developing: SkillMasteryEstimate[] = [];
  const gapsList: { skillId: string; isRootGap: boolean }[] = [];

  let totalReadinessAccumulator = 0;
  let totalReadinessWeight = 0;

  for (const [skillId, stats] of Object.entries(skillStats)) {
    const skillDef = getSkillById(skillId);
    const skillName = skillDef ? skillDef.name : skillId;
    const category = skillDef ? skillDef.category : 'Engineering';

    let mastery = 15; // default unfamiliar baseline
    let confidenceScore = 30; // preliminary

    if (stats.totalCount > 0) {
      const accuracy = stats.correctCount / stats.totalCount;
      confidenceScore = Math.min(95, 45 + stats.totalCount * 25);

      if (accuracy === 1.0) {
        mastery = stats.maxDifficultyPassed >= 2 ? 88 : 72;
      } else if (accuracy >= 0.5) {
        mastery = 48 + Math.round(stats.maxDifficultyPassed * 8);
      } else {
        mastery = 28;
      }
    } else {
      // Untested core skill defaults to beginner/unfamiliar
      mastery = 20;
      confidenceScore = 35;
    }

    const band = getMasteryBand(mastery);
    const confidenceLabel: 'High' | 'Medium' | 'Preliminary' =
      confidenceScore >= 75 ? 'High' : confidenceScore >= 50 ? 'Medium' : 'Preliminary';

    const estimate: SkillMasteryEstimate = {
      skillId,
      skillName,
      category,
      masteryScore: mastery,
      confidenceScore,
      confidenceLabel,
      masteryBand: band
    };

    skillsMastery[skillId] = estimate;

    if (band === 'Strong' || band === 'Proficient') {
      strengths.push(estimate);
    } else if (band === 'Developing') {
      developing.push(estimate);
    } else {
      // Check if this skill is a prerequisite to another failed skill (root gap)
      let isRoot = false;
      for (const [otherSkillId, otherStats] of Object.entries(skillStats)) {
        if (otherSkillId !== skillId && otherStats.totalCount > 0 && otherStats.correctCount === 0) {
          const otherDef = getSkillById(otherSkillId);
          if (otherDef?.prerequisiteSkillIds.includes(skillId)) {
            isRoot = true;
            break;
          }
        }
      }
      gapsList.push({ skillId, isRootGap: isRoot });
    }

    // Career core skills contribute heavily to readiness
    if (career.coreSkillIds.includes(skillId)) {
      totalReadinessAccumulator += mastery * 1.5;
      totalReadinessWeight += 1.5;
    } else {
      totalReadinessAccumulator += mastery * 1.0;
      totalReadinessWeight += 1.0;
    }
  }

  const overallReadiness = totalReadinessWeight > 0
    ? Math.round(totalReadinessAccumulator / totalReadinessWeight)
    : 35;

  const totalQuestionsAnswered = responses.length;
  const overallConfidence: 'High' | 'Medium' | 'Preliminary' =
    totalQuestionsAnswered >= 8 ? 'High' : totalQuestionsAnswered >= 4 ? 'Medium' : 'Preliminary';

  // Construct structured Knowledge Gap Analysis
  const biggestGaps: KnowledgeGap[] = gapsList.map(g => {
    const def = getSkillById(g.skillId) || {
      id: g.skillId,
      name: g.skillId,
      category: 'General',
      whyItMatters: 'Foundational skill for engineering competence.',
      prerequisiteSkillIds: [],
      recommendedNextStep: 'Review core specifications and build a hands-on project.',
      roadmapSlug: career.primaryRoadmapSlug || 'fullstack-systems',
      roadmapTitle: 'Software Engineering Roadmap'
    };

    const prereqStatus = def.prerequisiteSkillIds.map(pId => {
      const pDef = getSkillById(pId);
      const est = skillsMastery[pId];
      const isMastered = est ? est.masteryScore >= 60 : false;
      return {
        skillId: pId,
        name: pDef ? pDef.name : pId,
        isMastered
      };
    });

    const currentLevel = skillsMastery[g.skillId]?.masteryBand || 'Beginner';

    return {
      skillId: g.skillId,
      skillName: def.name,
      currentLevel,
      targetLevel: 'Proficient',
      whyItMatters: def.whyItMatters,
      prerequisites: prereqStatus,
      recommendedNextStep: def.recommendedNextStep,
      resourceSlug: def.resourceSlug,
      resourceTitle: def.resourceTitle,
      projectSlug: def.projectSlug,
      projectTitle: def.projectTitle,
      roadmapSlug: def.roadmapSlug,
      roadmapTitle: def.roadmapTitle,
      nodeId: def.nodeId
    };
  });

  // Construct "Don't Learn This Yet" recommendations
  const dontLearnYet: DontLearnYetItem[] = [];
  for (const advSkillId of career.advancedSkillIds) {
    const advDef = getSkillById(advSkillId);
    if (!advDef) continue;

    // Check if prerequisite core skills are mastered
    const hasUnmetPrereq = advDef.prerequisiteSkillIds.some(pId => {
      const est = skillsMastery[pId];
      return !est || est.masteryScore < 60;
    });

    if (hasUnmetPrereq || biggestGaps.length > 0) {
      const prereqNames = advDef.prerequisiteSkillIds
        .map(id => getSkillById(id)?.name || id)
        .join(' & ');

      dontLearnYet.push({
        skillName: advDef.name,
        category: advDef.category,
        reason: 'These topics may become useful later, but they are not the highest-impact skills for your current goal.',
        prerequisiteNeeded: prereqNames || 'Core foundational skills'
      });
    }
  }

  // Build "Your Next Move" focused weekly action plan
  const primaryGap = biggestGaps[0] || (developing[0] ? {
    skillId: developing[0].skillId,
    skillName: developing[0].skillName,
    recommendedNextStep: getSkillById(developing[0].skillId)?.recommendedNextStep || 'Solidify intermediate concepts.',
    resourceSlug: getSkillById(developing[0].skillId)?.resourceSlug,
    projectSlug: getSkillById(developing[0].skillId)?.projectSlug,
    projectTitle: getSkillById(developing[0].skillId)?.projectTitle,
    roadmapSlug: career.primaryRoadmapSlug || 'fullstack-systems'
  } : {
    skillId: 'core-systems',
    skillName: 'Production Systems',
    recommendedNextStep: 'Build a production-grade project.',
    roadmapSlug: career.primaryRoadmapSlug || 'fullstack-systems'
  });

  const nextMoveSteps = [
    `Complete core fundamentals for ${primaryGap.skillName}`,
    primaryGap.recommendedNextStep,
    primaryGap.projectTitle ? `Implement portfolio milestone: ${primaryGap.projectTitle}` : 'Build a targeted verification prototype',
    'Review code against production specs and test error handling'
  ];

  const primaryRoadmapUrl = `/roadmaps/${primaryGap.roadmapSlug || career.primaryRoadmapSlug || 'fullstack-systems'}`;

  const nextMove: PersonalizedNextMove = {
    timeframe: 'This Week',
    estimatedHours: '8–10 hours',
    rationale: `You already demonstrated baseline competence in your strengths. ${primaryGap.skillName} is currently your highest-impact knowledge gap to unlock ${career.label} readiness.`,
    weeklySteps: nextMoveSteps,
    focusProjectTitle: primaryGap.projectTitle,
    focusProjectUrl: primaryGap.projectSlug ? `/projects#${primaryGap.projectSlug}` : undefined,
    primaryRoadmapUrl
  };

  return {
    completedAt: new Date().toISOString(),
    targetCareer: context.targetCareer,
    targetCareerLabel: career.label,
    background: context,
    overallReadiness,
    overallConfidence,
    skills: skillsMastery,
    strengths,
    developing,
    biggestGaps,
    dontLearnYet,
    nextMove,
    recommendedRoadmapSlug: career.primaryRoadmapSlug || 'fullstack-systems'
  };
}
