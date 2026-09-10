import { MissionLogItem } from '../types/timeline.types';

export interface DynamicTimelineRaw {
  id: string;
  code: string;
  type: 'education' | 'experience' | 'course';
  role: string;
  institution: string;
  startDate: string; // YYYY-MM
  endDate: string;   // YYYY-MM
  briefing: string;
  stack: string[];
  totalSemesters?: number;
  intelStatic?: { val: string; lbl: string }[];
}

export const rawTimelineData: DynamicTimelineRaw[] = [
  {
    id: 'EDU-ADS-2025',
    code: 'GRAD-ADS',
    type: 'education',
    role: 'Graduação em Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade de Tecnologia',
    startDate: '2025-02',
    endDate: '2026-12',
    totalSemesters: 4,
    briefing: 'Formação superior focada no ciclo completo de desenvolvimento de software: desde a concepção visual e prototipagem no Figma, desenvolvimento frontend responsivo e componentizado, arquitetura backend com Node.js e Java, até a modelagem relacional avançada e consultas em MySQL.',
    stack: [
      'Figma',
      'HTML5',
      'CSS3',
      'Lógica de Programação',
      'JavaScript',
      'Node.js',
      'React.js',
      'Java',
      'Modelagem de Banco de Dados',
      'MySQL'
    ],
  },
  {
    id: 'EDU-GTI-2025',
    code: 'GRAD-GTI',
    type: 'education',
    role: 'Graduação em Gestão da Tecnologia da Informação',
    institution: 'Faculdade de Tecnologia',
    startDate: '2025-02',
    endDate: '2027-12',
    totalSemesters: 6,
    briefing: 'Graduação estratégica voltada para governança corporativa de TI, alinhamento estratégico entre negócios e tecnologia, gestão ágil de projetos (Scrum, Kanban), infraestrutura em nuvem, segurança da informação e gestão de equipes de alta performance.',
    stack: [
      'Governança de TI',
      'Gestão Ágil (Scrum & Kanban)',
      'Infraestrutura & Cloud',
      'Segurança da Informação',
      'ITIL',
      'Gestão Estratégica de TI'
    ],
  },
  {
    id: 'EXP-PROA-2026',
    code: 'DEV-PROA',
    type: 'course',
    role: 'Formação em Desenvolvimento Web Full Stack & Soft Skills',
    institution: 'Instituto PROA',
    startDate: '2026-01',
    endDate: '2026-07',
    briefing: 'Programa intensivo de formação profissional em tecnologia com mais de 400 horas práticas, desenvolvendo projetos reais em squads multidisciplinares com React, JavaScript, HTML5/CSS3, versionamento com Git/GitHub e foco em comunicação assertiva e trabalho em equipe.',
    stack: [
      'React.js',
      'JavaScript',
      'HTML5 & CSS3',
      'Git & GitHub',
      'Trabalho em Equipe (Squads)',
      'Metodologias Ágeis',
      'Comunicação Assertiva'
    ],
    intelStatic: [
      { val: '400h+', lbl: 'Carga Horária Prática' },
      { val: '100%', lbl: 'Conclusão & Certificado' },
      { val: 'Squads', lbl: 'Projetos em Equipe' }
    ]
  }
];

/**
 * Calcula dinamicamente o status, percentual de progresso, semestre e tempo restante
 */
export function getComputedTimeline(): MissionLogItem[] {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-12
  const currentTotalMonths = currentYear * 12 + currentMonth;

  return rawTimelineData.map((item) => {
    const [startYear, startMonth] = item.startDate.split('-').map(Number);
    const [endYear, endMonth] = item.endDate.split('-').map(Number);

    const startTotalMonths = startYear * 12 + startMonth;
    const endTotalMonths = endYear * 12 + endMonth;
    const totalDurationMonths = Math.max(1, endTotalMonths - startTotalMonths + 1);

    const elapsedMonths = Math.max(0, currentTotalMonths - startTotalMonths + 1);
    const isCompleted = currentTotalMonths >= endTotalMonths;
    const status: 'active' | 'completed' = isCompleted ? 'completed' : 'active';

    const progressPct = isCompleted 
      ? 100 
      : Math.min(99, Math.max(1, Math.round((elapsedMonths / totalDurationMonths) * 100)));

    const monthNames = [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    const timeframeStr = `${monthNames[startMonth - 1]} ${startYear} — ${monthNames[endMonth - 1]} ${endYear}`;

    let durationStr = '';
    if (isCompleted) {
      durationStr = 'Concluído';
    } else {
      const remainingMonths = Math.max(1, endTotalMonths - currentTotalMonths);
      if (remainingMonths === 1) {
        durationStr = 'Último mês';
      } else if (remainingMonths < 12) {
        durationStr = `${remainingMonths} meses restantes`;
      } else {
        const remYears = Math.floor(remainingMonths / 12);
        const remM = remainingMonths % 12;
        durationStr = remM > 0 ? `${remYears}a ${remM}m restantes` : `${remYears} ano(s) restantes`;
      }
    }

    let intel = item.intelStatic;
    if (!intel) {
      if (item.totalSemesters) {
        const semCalculated = Math.min(item.totalSemesters, Math.max(1, Math.ceil(elapsedMonths / 6)));
        intel = [
          { val: `${progressPct}%`, lbl: 'Progresso do Curso' },
          { val: isCompleted ? 'Formado' : `${semCalculated}º / ${item.totalSemesters}º`, lbl: 'Semestre Atual' },
          { val: `${monthNames[endMonth - 1]} ${endYear}`, lbl: 'Previsão de Conclusão' }
        ];
      } else {
        intel = [
          { val: `${progressPct}%`, lbl: 'Conclusão' },
          { val: timeframeStr, lbl: 'Período' },
          { val: status === 'completed' ? 'Finalizado' : 'Em Curso', lbl: 'Status' }
        ];
      }
    }

    return {
      id: item.id,
      code: item.code,
      status: status,
      type: item.type,
      role: item.role,
      company: item.institution,
      startDate: item.startDate,
      endDate: item.endDate,
      timeframe: timeframeStr,
      duration: durationStr,
      briefing: item.briefing,
      stack: item.stack,
      intel: intel,
      progressPct: progressPct
    };
  });
}

export const timeline: MissionLogItem[] = getComputedTimeline();
