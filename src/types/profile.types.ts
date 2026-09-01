export interface BioLine {
  type: 'comment' | 'keyword' | 'normal' | 'property' | 'string' | 'empty';
  text: string;
}

export interface EngineeringPillar {
  icon: string;
  title: string;
  desc: string;
}

export interface ProfileStats {
  yearsExperience: number;
  projectsDelivered: number;
  technologies: string;
  certifications: number;
}

export interface ProfileData {
  codename: string;
  name: string;
  title: string;
  titles: string[];
  level: number;
  xp: number;
  clearance: string;
  operationalStatus: string;
  location: string;
  coordinates: {
    lat: string;
    lon: string;
  };
  formation: string;
  focus: string;
  languages: string[];
  bio: BioLine[];
  dna: EngineeringPillar[];
  stats: ProfileStats;
}
