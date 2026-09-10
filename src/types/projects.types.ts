export interface ProjectLinks {
  demo?: string;
  code?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  spec: string;
  desc: string;
  fullDesc: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  status: 'deployed' | 'prototype' | 'active' | 'development';
  category: 'all' | 'ai' | 'automation' | 'web' | 'cloud' | 'java' | 'python';
  icon: string;
  links: ProjectLinks;
  // GitHub specific metadata (optional)
  stars?: number;
  forks?: number;
  updatedAt?: string;
  isGitHub?: boolean;
  cloneUrl?: string;
  sizeKb?: number;
  defaultBranch?: string;
}

export interface GitHubRepoRaw {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
  pushed_at: string;
  size: number;
  default_branch: string;
  archived: boolean;
  fork: boolean;
}
