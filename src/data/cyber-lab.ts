import { CyberStudyTrack } from '../types/cyber.types';

export const cyberStudyTracks: CyberStudyTrack[] = [
  {
    id: 'owasp',
    title: 'OWASP Top 10 & Mitigações',
    code: 'SEC.TRK // OWASP_VULN_01',
    icon: '🛡️',
    badge: 'TRILHA DE ESPECIALIZAÇÃO',
    description: 'Estudo aprofundado sobre as principais vulnerabilidades críticas em aplicações web contemporâneas e implementação de controles defensivos rigorosos.',
    focusArea: 'Defesa e Blindagem de Aplicações Web',
    progressPercent: 90,
    topics: [
      {
        id: 'broken-access',
        name: 'Controle de Acesso Quebrado (Broken Access Control)',
        summary: 'Padrões de autorização granular baseada em papéis (RBAC/ABAC) e prevenção de IDOR.',
        status: 'concluido',
        tags: ['RBAC', 'ABAC', 'IDOR']
      },
      {
        id: 'crypto-failures',
        name: 'Falhas Criptográficas (Cryptographic Failures)',
        summary: 'Uso de algoritmos modernos (AES-GCM, Argon2id), rotação segura de chaves e blindagem de dados em repouso e trânsito.',
        status: 'concluido',
        tags: ['Argon2', 'AES-256', 'TLS 1.3']
      },
      {
        id: 'injection',
        name: 'Injeção (SQL, NoSQL, Command Injection)',
        summary: 'Consultas parametrizadas com ORMs/ODMs, sanitização e validação estrita de esquemas em tempo de execução.',
        status: 'concluido',
        tags: ['Zod', 'Parameterized Queries', 'ORM']
      },
      {
        id: 'ssrf',
        name: 'Server-Side Request Forgery (SSRF)',
        summary: 'Validação de URIs de saída, restrição de acesso a metadados de nuvem e segmentação de rede.',
        status: 'em_estudo',
        tags: ['URL Whitelisting', 'Egress Filtering']
      }
    ],
    keyResources: ['OWASP ASVS v4.0', 'OWASP Top 10:2021', 'PortSwigger Web Security Academy']
  },
  {
    id: 'secure_coding',
    title: 'Secure Coding & Análise Estática',
    code: 'SEC.TRK // DEV_PRACTICES_02',
    icon: '💻',
    badge: 'ENGENHARIA DEFENSIVA',
    description: 'Princípios e padrões de escrita de código defensivo em TypeScript, Python e Go, integrando ferramentas de SAST/DAST no ciclo de vida de desenvolvimento (SDLC).',
    focusArea: 'Boas Práticas de Código Defensivo',
    progressPercent: 88,
    topics: [
      {
        id: 'input-validation',
        name: 'Validação e Sanitização Estrita de Entrada',
        summary: 'Construção de parsers tipados e pipelines com Zod e Pydantic para rejeição proativa de payloads maliciosos.',
        status: 'concluido',
        tags: ['Zod', 'Pydantic', 'Data Validation']
      },
      {
        id: 'least-privilege',
        name: 'Princípio do Menor Privilégio no Código',
        summary: 'Execução de processos desacoplados sem privilégios de root e gerenciamento contextual de permissões.',
        status: 'concluido',
        tags: ['Isolation', 'Least Privilege']
      },
      {
        id: 'sast-integration',
        name: 'Integração de SAST/DAST no CI/CD',
        summary: 'Configuração de scanners automatizados de vulnerabilidades de dependências (Snyk, Trivy, CodeQL).',
        status: 'em_estudo',
        tags: ['CodeQL', 'Trivy', 'SonarQube']
      },
      {
        id: 'memory-safety',
        name: 'Segurança de Memória & Concorrência',
        summary: 'Prevenção de condições de corrida (race conditions) em microsserviços e concorrência distribuída.',
        status: 'em_estudo',
        tags: ['Concurrency', 'Mutex', 'Distributed Locks']
      }
    ],
    keyResources: ['SEI CERT Coding Standards', 'Google Secure Coding Guidelines', 'Microsoft Security Development Lifecycle']
  },
  {
    id: 'web_security',
    title: 'Segurança de Protocolos Web & APIs',
    code: 'SEC.TRK // WEB_PROTOCOLS_03',
    icon: '🌐',
    badge: 'ARQUITETURA DE REDE & WEB',
    description: 'Configurações avançadas de cabeçalhos de segurança, autenticação robusta (OAuth2/OIDC), proteção de sessões e integridade de APIs REST e GraphQL.',
    focusArea: 'Protocolos HTTP, Cabeçalhos & Autenticação',
    progressPercent: 85,
    topics: [
      {
        id: 'csp-headers',
        name: 'Content Security Policy (CSP) & Headers HTTP',
        summary: 'Configuração estrita de CSP com nonces, HSTS, X-Frame-Options e Permissions-Policy para barrar XSS e Clickjacking.',
        status: 'concluido',
        tags: ['CSP', 'HSTS', 'Headers']
      },
      {
        id: 'auth-flows',
        name: 'Autenticação Robusta (OAuth 2.0 / OIDC / PKCE)',
        summary: 'Implementação de fluxos de autorização modernos, refresh tokens com rotação e armazenamento seguro via Cookies HttpOnly.',
        status: 'concluido',
        tags: ['OAuth 2.0', 'OIDC', 'PKCE', 'HttpOnly']
      },
      {
        id: 'api-rate-limit',
        name: 'Proteção de Taxa (Rate Limiting) & Throttling',
        summary: 'Mecanismos de proteção contra abusos de requisições e ataques de força bruta com Redis Token Bucket.',
        status: 'concluido',
        tags: ['Redis', 'Rate Limiting', 'DDoS Mitigation']
      },
      {
        id: 'cors-hardening',
        name: 'Hardening de CORS & WebSockets',
        summary: 'Políticas restritas de Cross-Origin Resource Sharing e autenticação contínua em conexões WebSocket ativas.',
        status: 'em_estudo',
        tags: ['CORS', 'WebSockets', 'Origin Validation']
      }
    ],
    keyResources: ['RFC 6749 (OAuth 2.0)', 'MDN Web Security Documentation', 'OWASP API Security Top 10']
  },
  {
    id: 'cloud_security',
    title: 'Segurança em Nuvem & Contêineres',
    code: 'SEC.TRK // CLOUD_CONTAINERS_04',
    icon: '☁️',
    badge: 'DEVSECOPS & INFRAESTRUTURA',
    description: 'Práticas essenciais para proteger ambientes em nuvem, orquestração de contêineres Docker/Kubernetes e gestão segura de segredos.',
    focusArea: 'Blindagem de Infraestrutura Cloud & Docker',
    progressPercent: 78,
    topics: [
      {
        id: 'container-hardening',
        name: 'Hardening de Imagens Docker',
        summary: 'Construção de imagens minimalistas (Distroless / Alpine), multi-stage builds e execução com usuários sem privilégios.',
        status: 'concluido',
        tags: ['Docker', 'Distroless', 'Multi-Stage']
      },
      {
        id: 'secrets-management',
        name: 'Gestão Centralizada de Segredos',
        summary: 'Isolamento de variáveis sensíveis e integração com AWS Secrets Manager, HashiCorp Vault e variáveis seguras de ambiente.',
        status: 'em_estudo',
        tags: ['AWS Secrets', 'Vault', 'Zero Hardcoding']
      },
      {
        id: 'iam-policies',
        name: 'Políticas de IAM com Menor Privilégio',
        summary: 'Estruturação de papéis e políticas de permissão restritivas na AWS, limitando acesso entre microsserviços.',
        status: 'em_estudo',
        tags: ['AWS IAM', 'Role Hardening']
      },
      {
        id: 'k8s-network',
        name: 'Políticas de Rede no Kubernetes (NetworkPolicies)',
        summary: 'Isolamento de tráfego leste-oeste entre pods e namespaces no cluster.',
        status: 'planejado',
        tags: ['Kubernetes', 'NetworkPolicies', 'Pod Security']
      }
    ],
    keyResources: ['CIS Benchmarks (Docker / AWS / Kubernetes)', 'AWS Well-Architected Security Pillar', 'NIST SP 800-190']
  },
  {
    id: 'threat_intel',
    title: 'Inteligência de Ameaças & Modelagem',
    code: 'SEC.TRK // THREAT_INTEL_05',
    icon: '🔍',
    badge: 'ANÁLISE DE VETORES & RISCO',
    description: 'Estudo conceitual de vetores de ataque, monitoramento contínuo de CVEs, modelagem de ameaças (STRIDE) e táticas do framework MITRE ATT&CK.',
    focusArea: 'Análise de Riscos & Frameworks de Defesa',
    progressPercent: 72,
    topics: [
      {
        id: 'threat-modeling',
        name: 'Modelagem de Ameaças (STRIDE & DREAD)',
        summary: 'Mapeamento precoce de potenciais vetores de ataque durante a fase de arquitetura de software.',
        status: 'concluido',
        tags: ['STRIDE', 'Architecture Review']
      },
      {
        id: 'mitre-attack',
        name: 'Estudo do Framework MITRE ATT&CK',
        summary: 'Compreensão da taxonomia de táticas, técnicas e procedimentos (TTPs) utilizadas por atores maliciosos.',
        status: 'em_estudo',
        tags: ['MITRE ATT&CK', 'TTPs']
      },
      {
        id: 'cve-monitoring',
        name: 'Monitoramento Contínuo de CVEs e Alertas',
        summary: 'Acompanhamento sistemático de feeds de vulnerabilidades do NVD e bases de segurança de ecossistemas open-source.',
        status: 'em_estudo',
        tags: ['NVD', 'CVE', 'Advisories']
      },
      {
        id: 'incident-postmortem',
        name: 'Análise Post-Mortem & Engenharia de Resiliência',
        summary: 'Metodologias de aprendizado contínuo após incidentes de segurança e implementação de defesas preventivas.',
        status: 'planejado',
        tags: ['Post-Mortem', 'Resilience Engineering']
      }
    ],
    keyResources: ['MITRE ATT&CK Knowledge Base', 'NIST National Vulnerability Database (NVD)', 'OWASP Threat Dragon']
  }
];
