import type { Roadmap } from './types';
import { aiMlRoadmap } from './ai-ml-engineering';
import { embeddedRoboticsRoadmap } from './embedded-robotics';
import { fullstackSystemsRoadmap } from './fullstack-systems';
import { devopsCloudRoadmap } from './devops-cloud';

export const allRoadmaps: Roadmap[] = [
  aiMlRoadmap,
  embeddedRoboticsRoadmap,
  fullstackSystemsRoadmap,
  devopsCloudRoadmap
];

export function getAllRoadmaps(): Roadmap[] {
  return allRoadmaps;
}

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
  return allRoadmaps.find(r => r.slug === slug);
}

export function getRoadmapsByBranch(branchId: string): Roadmap[] {
  return allRoadmaps.filter(r => r.branchId === branchId);
}

export * from './types';

// Re-export branch overview data
export { allBranches, getAllBranches, getBranchBySlug, getBranchesByCategory } from '../branches';
