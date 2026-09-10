export type CapabilityId = 
  | 'products'
  | 'architecture'
  | 'ai'
  | 'cloud'
  | 'automation'
  | 'lab';

export interface ReactorPreset {
  dotColor: string;
  accentColor: string;
  speed: number;
  density: number;
  dotSize: number;
  spinTurns: number;
  spread: number;
}

export interface ProfessionalCapability {
  id: CapabilityId;
  name: string;
  shortCode: string; // Ex: "CAP.01 // PROD"
  actionStatement: string; // Ex: "Eu construo produtos digitais e experiências fluidas."
  headline: string;
  description: string;
  dnaTechs: string[]; // As tecnologias que alimentam essa capacidade
  iconName: string;
  color: string;
  accentColor: string;
  reactorPreset: ReactorPreset;
  impactHighlight: string;
}
