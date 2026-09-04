export type BranchCategory = 'traditional' | 'technology' | 'emerging';

export interface BranchResource {
  title: string;
  url: string;
  type: 'course' | 'book' | 'docs' | 'video' | 'platform';
  isFree: true;
}

export interface BranchStage {
  number: number;
  label: string; // e.g. "Beginner", "Foundation", "Intermediate", "Advanced", "Expert"
  title: string;
  emoji: string;
  durationMonths: string; // e.g. "1–2 months"
  topics: string[];       // 3–5 concise bullet points
  learnerMoment: string;  // short honest sentence about what learner feels here
}

export interface CareerPath {
  title: string;
  emoji: string;
  salaryBand: string; // e.g. "₹6–20 LPA"
}

export interface BranchOverview {
  slug: string;
  emoji: string;
  name: string;
  tagline: string;            // One-liner: what this branch is about
  description: string;        // 2–3 sentences for a 12th grader
  category: BranchCategory;
  totalMonths: string;        // e.g. "3–5 years"
  hasFullRoadmap: boolean;    // true = route to /roadmaps/[slug], false = /roadmaps/overview/[slug]
  fullRoadmapSlug?: string;   // only when hasFullRoadmap = true
  color: string;              // Tailwind accent color class base e.g. "blue"
  bgColor: string;            // CSS hex or var for card accent
  stages: BranchStage[];
  careers: CareerPath[];
  topResources: BranchResource[];
  capstoneideas: string[];    // 2 capstone project ideas written simply
  domains: string[];          // keyword tags shown on card e.g. ["Algorithms", "AI", "Software"]
}
