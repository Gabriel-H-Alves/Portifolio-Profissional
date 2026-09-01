export type SkillCategory = 'all' | 'ai' | 'fullstack' | 'backend' | 'cloud' | 'hardware' | 'data' | 'security';

export interface SkillCategoryInfo {
  id: SkillCategory;
  label: string;
  icon: string;
}

export type SkillTier = 'master' | 'expert' | 'advanced' | 'proficient';

export interface SkillNode {
  [key: string]: unknown;
  id: string;
  name: string;
  icon: string;
  tier: SkillTier;
  xp: number;
  years: number;
  category: SkillCategory;
  x: number;
  y: number;
}

export interface NeuralLink {
  source: string;
  target: string;
}
