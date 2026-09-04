export type ResourceType = 'official-doc' | 'university' | 'book' | 'interactive' | 'github' | 'lecture';

export interface Resource {
  title: string;
  url: string;
  type: ResourceType;
  authorityTier: 'Tier 1 Official Spec' | 'MIT / Stanford / Harvard' | 'Canonical Open Book' | 'Industry Benchmark GitHub';
  description: string;
  isFree: boolean;
  estimatedReadHours?: number;
}

export interface CapstoneProject {
  id: string;
  title: string;
  brief: string;
  deliverables: string[];
  estimatedHours: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  githubTemplateUrl?: string;
}

export interface LearnerExperience {
  stageNumber: number;
  phaseName: string;
  emotionalState: 'The Initial Euphoria' | 'The Wall of Abstraction' | 'Tutorial Hell & Confusion' | 'The Aha! Breakthrough' | 'Engineering Fluency' | 'Autonomous Architect';
  feelingSummary: string;
  internalMonologue: string[];
  whatIsActuallyHappening: string;
  commonPitfalls: string[];
  survivalAdvice: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  shortDescription: string;
  detailedExplanation: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  prerequisites: string[];
  resources: Resource[];
  tags: string[];
  isEssential: boolean;
}

export interface RoadmapPhase {
  phaseNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  learnerExperience: LearnerExperience;
  nodes: RoadmapNode[];
  capstoneProject?: CapstoneProject;
}

export type EngineeringBranchId = 'ai-ml' | 'embedded-robotics' | 'fullstack-systems' | 'devops-cloud';

export interface Roadmap {
  id: string;
  slug: string;
  title: string;
  branchId: EngineeringBranchId;
  branchName: string;
  subtitle: string;
  description: string;
  accentColor: string;
  estimatedWeeks: number;
  totalHours: number;
  difficultyLevel: 'Beginner to Professional' | 'Rigorous Technical' | 'Systems Intensive';
  prerequisitesOverview: string[];
  phases: RoadmapPhase[];
}
