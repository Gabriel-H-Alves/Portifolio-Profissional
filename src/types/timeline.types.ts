export interface MissionIntel {
  val: string;
  lbl: string;
}

export interface MissionLogItem {
  id: string;
  code: string;
  status: 'active' | 'completed';
  type: 'education' | 'experience' | 'course';
  role: string;
  company: string;
  startDate: string; // YYYY-MM
  endDate: string;   // YYYY-MM
  timeframe: string;
  duration: string;
  briefing: string;
  stack: string[];
  intel: MissionIntel[];
  progressPct?: number;
}
