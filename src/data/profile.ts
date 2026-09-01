import { ProfileData } from '../types/profile.types';

export const profile: ProfileData = {
  codename: 'OPERADOR GABRIEL',
  name: 'Gabriel Henrique Alves Rocha',
  title: 'Engenheiro de Software & Arquiteto de Sistemas de IA',
  titles: [
    'Arquiteto de Sistemas de IA',
    'Engenheiro Full Stack',
    'Especialista em Automação & Robótica',
    'Desenvolvedor de Agentes Autônomos',
    'Estudioso de Segurança em Desenvolvimento'
  ],
  level: 28,
  xp: 88,
  clearance: 'NÍVEL 5 // ALPHA',
  operationalStatus: 'ATIVO // OPERACIONAL',
  location: 'São Paulo, Brasil [UTC-3]',
  coordinates: { lat: '-23.5505', lon: '-46.6333' },
  formation: 'Bacharelado em Engenharia de Software',
  focus: 'Sistemas Autônomos, IA Generativa, Arquitetura Distribuída & Segurança em Software',
  languages: ['Português (Nativo)', 'Inglês (Fluente / Profissional)'],
  bio: [
    { type: 'comment', text: '// DOSSIÊ DO SISTEMA: IDENTITY CORE v3.0' },
    { type: 'keyword', text: 'class ' },
    { type: 'normal', text: 'LeadEngineer extends SystemArchitect {' },
    { type: 'property', text: '  readonly diretrizPrincipal = ' },
    { type: 'string', text: '"Solucionar problemas de alta complexidade com engenharia elegante";' },
    { type: 'property', text: '  readonly paradigmaOperacional = ' },
    { type: 'string', text: '"Agentes autônomos, pipelines neurais e arquiteturas resilientes";' },
    { type: 'property', text: '  readonly focoSeguranca = ' },
    { type: 'string', text: '"Código defensivo, OWASP e resiliência cibernética no ciclo de desenvolvimento";' },
    { type: 'property', text: '  readonly statusMissao = ' },
    { type: 'string', text: '"Disponível para desafios e projetos de alto impacto";' },
    { type: 'normal', text: '}' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// "A tecnologia não é um fim — é o substrato da expansão humana."' }
  ],
  dna: [
    {
      icon: '🧠',
      title: 'IA & Sistemas Inteligentes',
      desc: 'Fine-tuning de modelos, arquiteturas RAG, pipelines de visão computacional e sistemas multi-agentes autônomos.'
    },
    {
      icon: '⚡',
      title: 'Arquitetura Full-Stack & APIs',
      desc: 'Microserviços de alto rendimento, interfaces reativas modernas, Clean Architecture e bancos de dados distribuídos.'
    },
    {
      icon: '🦾',
      title: 'Robótica & Automação de Hardware',
      desc: 'Firmware embarcado (Arduino, ESP32, ROS), telemetria IoT via MQTT e automação robótica de processos.'
    },
    {
      icon: '🛡️',
      title: 'Cloud, Resiliência & DevSecOps',
      desc: 'Orquestração de contêineres, pipelines CI/CD automatizadas, infraestrutura em nuvem e práticas de desenvolvimento seguro.'
    }
  ],
  stats: {
    yearsExperience: 5,
    projectsDelivered: 42,
    technologies: '30+',
    certifications: 12
  }
};
