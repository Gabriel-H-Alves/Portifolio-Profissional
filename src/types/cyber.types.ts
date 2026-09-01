export type CyberTopicCategory = 
  | 'owasp' 
  | 'secure_coding' 
  | 'web_security' 
  | 'cloud_security' 
  | 'threat_intel';

export interface CyberTopicItem {
  id: string;
  name: string;
  summary: string;
  status: 'concluido' | 'em_estudo' | 'planejado';
  tags: string[];
}

export interface CyberStudyTrack {
  id: CyberTopicCategory;
  title: string;
  code: string;
  icon: string;
  badge: string;
  description: string;
  focusArea: string;
  progressPercent: number;
  topics: CyberTopicItem[];
  keyResources: string[];
}
