import { CertificationItem, VisitorAchievement } from '../types/achievements.types';

export const certifications: CertificationItem[] = [
  {
    id: 'CERT-AWS-01',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: '☁️',
    tier: 'platinum',
    badge: 'VERIFICADO // 2024-2027',
    link: '#'
  },
  {
    id: 'CERT-GOOG-02',
    name: 'Google TensorFlow Developer Certificate',
    issuer: 'Google Developers / DeepLearning.AI',
    date: '2024',
    icon: '🧠',
    tier: 'platinum',
    badge: 'VERIFICADO // ESPECIALISTA',
    link: '#'
  },
  {
    id: 'CERT-STAN-03',
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University / Coursera',
    date: '2023',
    icon: '🎓',
    tier: 'platinum',
    badge: 'VERIFICADO // HONRA AO MÉRITO',
    link: '#'
  },
  {
    id: 'CERT-DOC-04',
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2023',
    icon: '🐳',
    tier: 'gold',
    badge: 'VERIFICADO // PROFISSIONAL',
    link: '#'
  },
  {
    id: 'CERT-CNCF-05',
    name: 'Kubernetes Administrator (CKA)',
    issuer: 'Linux Foundation / CNCF',
    date: '2023',
    icon: '⎈',
    tier: 'gold',
    badge: 'VERIFICADO // SYSADMIN',
    link: '#'
  },
  {
    id: 'CERT-META-06',
    name: 'Meta Full-Stack Professional Certificate',
    issuer: 'Meta Platforms',
    date: '2022',
    icon: '💻',
    tier: 'gold',
    badge: 'VERIFICADO // AVANÇADO',
    link: '#'
  },
  {
    id: 'CERT-SCRUM-07',
    name: 'Professional Scrum Master (PSM I)',
    issuer: 'Scrum.org',
    date: '2023',
    icon: '📋',
    tier: 'silver',
    badge: 'VERIFICADO // AGILE',
    link: '#'
  },
  {
    id: 'CERT-IBM-08',
    name: 'Python for Data Science & AI',
    issuer: 'IBM Skills Network',
    date: '2022',
    icon: '🐍',
    tier: 'silver',
    badge: 'VERIFICADO // ESPECIALISTA',
    link: '#'
  }
];

export const visitorAchievements: VisitorAchievement[] = [
  { id: 'first_contact', name: 'Primeiro Contato', desc: 'Sequência de boot autorizada e acesso liberado ao NEXUS HQ', icon: '🔓', unlocked: false },
  { id: 'explorer', name: 'Operador Mestre', desc: 'Navegou e inspecionou todos os módulos de comando do sistema', icon: '🗺️', unlocked: false },
  { id: 'deep_diver', name: 'Infiltrador do Vault', desc: 'Abriu e analisou 3+ dossiês técnicos detalhados de projetos', icon: '🔍', unlocked: false },
  { id: 'curious_mind', name: 'Sintetizador Neural', desc: 'Interagiu com o copiloto cognitivo NEXUS AI com 5+ perguntas', icon: '🧠', unlocked: false },
  { id: 'cyber_scholar', name: 'Estudioso Cyber', desc: 'Explorou a trilha de segurança e estudos no Cyber Lab', icon: '🛡️', unlocked: false },
  { id: 'time_traveler', name: 'Inspetor Cronológico', desc: 'Analisou todos os registros táticos e linha do tempo de carreira', icon: '⏰', unlocked: false },
  { id: 'skill_scanner', name: 'Navegador Sináptico', desc: 'Interagiu com o Grafo Neural de habilidades e clusters', icon: '⚙️', unlocked: false },
  { id: 'terminal_master', name: 'Hacker do Terminal', desc: 'Descobriu atalhos ou comandos via Command Palette (Ctrl+K)', icon: '⌨️', unlocked: false },
  { id: 'konami_master', name: 'Cyber Overdrive', desc: 'Executou a lendária sequência do Código Konami', icon: '🎮', unlocked: false }
];
