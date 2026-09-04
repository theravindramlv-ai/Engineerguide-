// src/data/diagnostic/types.ts

export type TargetCareerId =
  | 'software-engineer'
  | 'fullstack-developer'
  | 'frontend-developer'
  | 'backend-developer'
  | 'aiml-engineer'
  | 'data-scientist'
  | 'data-engineer'
  | 'cybersecurity-engineer'
  | 'devops-cloud-engineer'
  | 'embedded-engineer'
  | 'electronics-engineer'
  | 'robotics-engineer'
  | 'exploring'
  | 'other';

export interface CareerOption {
  id: TargetCareerId;
  label: string;
  icon: string;
  description: string;
  primaryRoadmapSlug?: string;
  coreSkillIds: string[];
  advancedSkillIds: string[];
}

export type ExperienceLevel =
  | 'beginner'
  | 'student'
  | 'self-taught'
  | 'professional'
  | 'switcher';

export type ExperienceDuration =
  | 'none'
  | 'under-3-months'
  | '3-12-months'
  | '1-2-years'
  | '2-plus-years';

export interface UserBackgroundContext {
  targetCareer: TargetCareerId;
  experienceLevel: ExperienceLevel;
  experienceDuration: ExperienceDuration;
}

export type QuestionType =
  | 'code-prediction'
  | 'debugging'
  | 'concept'
  | 'engineering-reasoning'
  | 'architectural-decision'
  | 'practical-scenario';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface DiagnosticQuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface DiagnosticQuestion {
  id: string;
  skillId: string;
  prerequisiteSkillId?: string;
  title: string;
  prompt: string;
  type: QuestionType;
  codeSnippet?: {
    language: string;
    code: string;
  };
  options: DiagnosticQuestionOption[];
  difficulty: DifficultyLevel;
  whyThisQuestionMatters: string;
}

export type MasteryBand =
  | 'Unfamiliar'
  | 'Beginner'
  | 'Developing'
  | 'Proficient'
  | 'Strong';

export interface SkillMasteryEstimate {
  skillId: string;
  skillName: string;
  category: string;
  masteryScore: number; // 0-100
  confidenceScore: number; // 0-100
  confidenceLabel: 'High' | 'Medium' | 'Preliminary';
  masteryBand: MasteryBand;
  isRootGap?: boolean;
}

export interface KnowledgeGap {
  skillId: string;
  skillName: string;
  currentLevel: MasteryBand;
  targetLevel: MasteryBand;
  whyItMatters: string;
  prerequisites: {
    skillId: string;
    name: string;
    isMastered: boolean;
  }[];
  recommendedNextStep: string;
  resourceSlug?: string;
  resourceTitle?: string;
  projectSlug?: string;
  projectTitle?: string;
  roadmapSlug: string;
  roadmapTitle: string;
  nodeId?: string;
}

export interface DontLearnYetItem {
  skillName: string;
  category: string;
  reason: string;
  prerequisiteNeeded: string;
}

export interface PersonalizedNextMove {
  timeframe: string; // e.g. 'This Week'
  estimatedHours: string; // e.g. '8–10 hours'
  rationale: string;
  weeklySteps: string[];
  focusProjectTitle?: string;
  focusProjectUrl?: string;
  primaryRoadmapUrl: string;
}

export interface DiagnosticResult {
  completedAt: string;
  targetCareer: TargetCareerId;
  targetCareerLabel: string;
  background: UserBackgroundContext;
  overallReadiness: number; // 0-100 percentage
  overallConfidence: 'High' | 'Medium' | 'Preliminary';
  skills: Record<string, SkillMasteryEstimate>;
  strengths: SkillMasteryEstimate[];
  developing: SkillMasteryEstimate[];
  biggestGaps: KnowledgeGap[];
  dontLearnYet: DontLearnYetItem[];
  nextMove: PersonalizedNextMove;
  recommendedRoadmapSlug: string;
}
