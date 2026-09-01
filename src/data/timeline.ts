import { MissionLogItem } from '../types/timeline.types';

export const timeline: MissionLogItem[] = [
  {
    id: 'OP-TITAN-2024',
    code: 'MSN-2024-001',
    status: 'active',
    classification: 'CONFIDENTIAL',
    role: 'Tech Lead em IA & Arquiteto de Sistemas Distribuídos',
    company: 'TechCorp Innovation Labs',
    timeframe: 'Jan 2024 — ATUAL',
    duration: '2+ Anos',
    briefing: 'Liderança técnica em engenharia de sistemas na implantação de redes multi-agentes autônomos com LLMs, microsserviços de alto rendimento e motores de inferência distribuídos com disponibilidade de 99.99%.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Docker', 'AWS', 'TensorFlow', 'PostgreSQL'],
    intel: [
      { val: '15+', lbl: 'Deploys em Produção' },
      { val: '40%', lbl: 'Redução de Latência' },
      { val: '3', lbl: 'Squads Coordenadas' }
    ]
  },
  {
    id: 'OP-SYNAPSE-2022',
    code: 'MSN-2022-002',
    status: 'completed',
    classification: 'PUBLIC',
    role: 'Engenheiro Full Stack Sênior & Machine Learning',
    company: 'DataFlow Systems Architecture',
    timeframe: 'Mar 2022 — Dez 2023',
    duration: '1 Ano e 10 Meses',
    briefing: 'Arquitetura de pipelines de streaming analytics e painéis de visualização neural processando mais de 2 milhões de eventos diários. Redução de 65% no tempo de processamento ETL.',
    stack: ['TypeScript', 'React', 'Node.js', 'PyTorch', 'Docker', 'Redis', 'PostgreSQL'],
    intel: [
      { val: '2M+', lbl: 'Eventos / Dia' },
      { val: '99.5%', lbl: 'Disponibilidade' },
      { val: '12', lbl: 'Módulos Centrais' }
    ]
  },
  {
    id: 'OP-CYBERKINETIC-2021',
    code: 'MSN-2021-003',
    status: 'completed',
    classification: 'PUBLIC',
    role: 'Engenheiro de Automação & Hardware Embarcado',
    company: 'AutomateTech Robotics',
    timeframe: 'Jun 2021 — Fev 2022',
    duration: '9 Meses',
    briefing: 'Desenvolvimento de unidades robóticas de RPA e nós de sensores IoT embarcados com telemetria MQTT. Implantação de mecanismos de failover automatizado em linhas de montagem.',
    stack: ['Python', 'C++', 'Arduino', 'Raspberry Pi', 'MQTT', 'ROS'],
    intel: [
      { val: '8', lbl: 'Nós Robóticos RPA' },
      { val: '60%', lbl: 'Corte de Custos Operacionais' },
      { val: '24/7', lbl: 'Sincronização de Telemetria' }
    ]
  },
  {
    id: 'OP-GENESIS-2020',
    code: 'MSN-2020-004',
    status: 'completed',
    classification: 'PUBLIC',
    role: 'Especialista em Desenvolvimento de Software',
    company: 'StartupLab Incubator',
    timeframe: 'Jan 2020 — Mai 2021',
    duration: '1 Ano e 5 Meses',
    briefing: 'Engenharia e entrega ágil de MVPs prontos para produção em startups de tecnologia. Estruturação de arquiteturas full-stack fundamentais e criação de rotinas automatizadas de CI/CD.',
    stack: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
    intel: [
      { val: '6', lbl: 'MVPs Entregues' },
      { val: '3', lbl: 'Projetos com Aporte' },
      { val: '100%', lbl: 'Sucesso nos Sprints' }
    ]
  }
];
