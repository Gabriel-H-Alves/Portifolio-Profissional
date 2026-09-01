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
  category: 'all' | 'ai' | 'automation' | 'web' | 'cloud';
  icon: string;
  links: ProjectLinks;
}
