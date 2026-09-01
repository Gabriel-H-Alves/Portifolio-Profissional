import { SkillCategoryInfo, SkillNode, NeuralLink } from '../types/skills.types';

export const skillCategories: SkillCategoryInfo[] = [
  { id: 'all', label: 'Todos os Clusters', icon: '⚡' },
  { id: 'ai', label: 'IA & Redes Neurais', icon: '🧠' },
  { id: 'fullstack', label: 'Full Stack & Web', icon: '🌐' },
  { id: 'backend', label: 'Backend & APIs', icon: '⚙️' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: '☁️' },
  { id: 'hardware', label: 'Robótica & Hardware', icon: '🦾' },
  { id: 'data', label: 'Bancos de Dados & Streams', icon: '📊' },
  { id: 'security', label: 'Segurança em Desenvolvimento', icon: '🛡️' }
];

export const skills: SkillNode[] = [
  // IA & Machine Learning
  { id: 'python', name: 'Python', icon: '🐍', tier: 'master', xp: 96, years: 5, category: 'ai', x: 200, y: 150 },
  { id: 'tf', name: 'TensorFlow', icon: '🧠', tier: 'expert', xp: 88, years: 3, category: 'ai', x: 120, y: 110 },
  { id: 'pytorch', name: 'PyTorch', icon: '🔥', tier: 'expert', xp: 84, years: 3, category: 'ai', x: 280, y: 100 },
  { id: 'opencv', name: 'OpenCV / Visão', icon: '👁️', tier: 'expert', xp: 86, years: 3, category: 'ai', x: 90, y: 190 },
  { id: 'llm', name: 'LLMs & Agentes (LangChain)', icon: '🤖', tier: 'expert', xp: 90, years: 2, category: 'ai', x: 310, y: 180 },
  { id: 'scikit', name: 'Scikit-Learn', icon: '📈', tier: 'expert', xp: 87, years: 4, category: 'ai', x: 200, y: 80 },

  // Full Stack & Web
  { id: 'ts', name: 'TypeScript', icon: '🔷', tier: 'expert', xp: 94, years: 4, category: 'fullstack', x: 450, y: 150 },
  { id: 'react', name: 'React & Next.js', icon: '⚛️', tier: 'expert', xp: 92, years: 4, category: 'fullstack', x: 420, y: 80 },
  { id: 'js', name: 'JavaScript Moderno', icon: '⚡', tier: 'master', xp: 95, years: 5, category: 'fullstack', x: 520, y: 110 },
  { id: 'css', name: 'Tailwind & Design Systems', icon: '🎨', tier: 'master', xp: 94, years: 5, category: 'fullstack', x: 500, y: 220 },

  // Backend
  { id: 'node', name: 'Node.js / Express', icon: '🟢', tier: 'expert', xp: 88, years: 4, category: 'backend', x: 380, y: 280 },
  { id: 'fastapi', name: 'FastAPI', icon: '🚀', tier: 'expert', xp: 90, years: 3, category: 'backend', x: 260, y: 280 },
  { id: 'cpp', name: 'C / C++', icon: '⚙️', tier: 'advanced', xp: 76, years: 3, category: 'backend', x: 140, y: 280 },

  // Cloud & DevOps
  { id: 'docker', name: 'Contêineres Docker', icon: '🐳', tier: 'expert', xp: 86, years: 3, category: 'cloud', x: 480, y: 360 },
  { id: 'aws', name: 'Arquitetura AWS', icon: '☁️', tier: 'advanced', xp: 80, years: 3, category: 'cloud', x: 380, y: 390 },
  { id: 'cicd', name: 'Pipelines CI/CD (Actions)', icon: '🔄', tier: 'expert', xp: 85, years: 3, category: 'cloud', x: 260, y: 390 },
  { id: 'linux', name: 'Linux Kernel & Shell', icon: '🐧', tier: 'master', xp: 92, years: 5, category: 'cloud', x: 560, y: 320 },

  // Robótica & Hardware
  { id: 'arduino', name: 'Arduino / Microcontroladores', icon: '📟', tier: 'master', xp: 90, years: 4, category: 'hardware', x: 100, y: 360 },
  { id: 'rpi', name: 'Raspberry Pi / SBCs', icon: '🍓', tier: 'expert', xp: 85, years: 3, category: 'hardware', x: 180, y: 370 },
  { id: 'ros', name: 'Robot Operating System (ROS)', icon: '🦾', tier: 'proficient', xp: 70, years: 2, category: 'hardware', x: 110, y: 440 },
  { id: 'mqtt', name: 'MQTT / Protocolos IoT', icon: '📡', tier: 'expert', xp: 86, years: 3, category: 'hardware', x: 210, y: 450 },

  // Bancos de Dados & Streams
  { id: 'postgres', name: 'PostgreSQL / SQL', icon: '🐘', tier: 'expert', xp: 88, years: 4, category: 'data', x: 350, y: 460 },
  { id: 'redis', name: 'Redis Cache & Pub/Sub', icon: '🔴', tier: 'advanced', xp: 80, years: 3, category: 'data', x: 450, y: 450 },
  { id: 'mongo', name: 'MongoDB', icon: '🍃', tier: 'advanced', xp: 78, years: 3, category: 'data', x: 530, y: 420 },

  // Segurança em Desenvolvimento (Cyber Lab)
  { id: 'owasp', name: 'OWASP Top 10 & Defesa', icon: '🛡️', tier: 'expert', xp: 85, years: 3, category: 'security', x: 300, y: 530 },
  { id: 'secdev', name: 'Secure Coding & SAST', icon: '🔒', tier: 'advanced', xp: 82, years: 3, category: 'security', x: 420, y: 530 }
];

export const neuralLinks: NeuralLink[] = [
  { source: 'python', target: 'tf' },
  { source: 'python', target: 'pytorch' },
  { source: 'python', target: 'opencv' },
  { source: 'python', target: 'llm' },
  { source: 'python', target: 'scikit' },
  { source: 'python', target: 'fastapi' },
  { source: 'fastapi', target: 'postgres' },
  { source: 'fastapi', target: 'docker' },
  { source: 'fastapi', target: 'owasp' },
  { source: 'ts', target: 'react' },
  { source: 'ts', target: 'node' },
  { source: 'js', target: 'ts' },
  { source: 'react', target: 'css' },
  { source: 'node', target: 'redis' },
  { source: 'node', target: 'postgres' },
  { source: 'node', target: 'secdev' },
  { source: 'docker', target: 'aws' },
  { source: 'docker', target: 'cicd' },
  { source: 'linux', target: 'docker' },
  { source: 'cpp', target: 'arduino' },
  { source: 'cpp', target: 'ros' },
  { source: 'arduino', target: 'rpi' },
  { source: 'rpi', target: 'mqtt' },
  { source: 'rpi', target: 'opencv' },
  { source: 'mqtt', target: 'fastapi' },
  { source: 'owasp', target: 'secdev' }
];
