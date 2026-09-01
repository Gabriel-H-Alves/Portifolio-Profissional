export interface MissionIntel {
  val: string;
  lbl: string;
}

export interface MissionLogItem {
  id: string;
  code: string;
  status: 'active' | 'completed';
  classification: 'CONFIDENTIAL' | 'PUBLIC';
  role: string;
  company: string;
  timeframe: string;
  duration: string;
  briefing: string;
  stack: string[];
  intel: MissionIntel[];
}
