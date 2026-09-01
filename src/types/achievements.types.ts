export type CertTier = 'platinum' | 'gold' | 'silver';

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  icon: string;
  tier: CertTier;
  badge: string;
  link: string;
}

export interface VisitorAchievement {
  id: string;
  name: string;
  desc: string;
  icon: string;
  unlocked: boolean;
}
