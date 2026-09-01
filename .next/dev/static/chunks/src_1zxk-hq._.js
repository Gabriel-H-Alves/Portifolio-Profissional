(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/achievements.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Knowledge Hub Data (Verified Credentials)
// ═══════════════════════════════════════════════════════
__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "visitorAchievements",
    ()=>visitorAchievements
]);
const certifications = [
    {
        id: 'CERT-AWS-01',
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2024',
        icon: '☁️',
        tier: 'platinum',
        badge: 'VERIFIED // 2024-2027',
        link: '#'
    },
    {
        id: 'CERT-GOOG-02',
        name: 'Google TensorFlow Developer',
        issuer: 'Google Developers / DeepLearning.AI',
        date: '2024',
        icon: '🧠',
        tier: 'platinum',
        badge: 'VERIFIED // SPECIALIST',
        link: '#'
    },
    {
        id: 'CERT-STAN-03',
        name: 'Machine Learning Specialization',
        issuer: 'Stanford University / Coursera',
        date: '2023',
        icon: '🎓',
        tier: 'platinum',
        badge: 'VERIFIED // HONORS',
        link: '#'
    },
    {
        id: 'CERT-DOC-04',
        name: 'Docker Certified Associate',
        issuer: 'Docker Inc.',
        date: '2023',
        icon: '🐳',
        tier: 'gold',
        badge: 'VERIFIED // PRO',
        link: '#'
    },
    {
        id: 'CERT-CNCF-05',
        name: 'Kubernetes Administrator (CKA)',
        issuer: 'Linux Foundation / CNCF',
        date: '2023',
        icon: '⎈',
        tier: 'gold',
        badge: 'VERIFIED // SYSADMIN',
        link: '#'
    },
    {
        id: 'CERT-META-06',
        name: 'Meta Full-Stack Professional',
        issuer: 'Meta Platforms',
        date: '2022',
        icon: '💻',
        tier: 'gold',
        badge: 'VERIFIED // ADVANCED',
        link: '#'
    },
    {
        id: 'CERT-SCRUM-07',
        name: 'Professional Scrum Master (PSM I)',
        issuer: 'Scrum.org',
        date: '2023',
        icon: '📋',
        tier: 'silver',
        badge: 'VERIFIED // AGILE',
        link: '#'
    },
    {
        id: 'CERT-IBM-08',
        name: 'Python for Data Science & AI',
        issuer: 'IBM Skills Network',
        date: '2022',
        icon: '🐍',
        tier: 'silver',
        badge: 'VERIFIED // EXPERT',
        link: '#'
    }
];
const visitorAchievements = [
    {
        id: 'first_contact',
        name: 'First Contact',
        desc: 'Boot sequence authorized and accessed NEXUS HQ',
        icon: '🔓',
        unlocked: false
    },
    {
        id: 'explorer',
        name: 'Master Operator',
        desc: 'Navigated and analyzed all 6 command modules',
        icon: '🗺️',
        unlocked: false
    },
    {
        id: 'deep_diver',
        name: 'Vault Infiltrator',
        desc: 'Unlocked and inspected 3+ deep project dossiers',
        icon: '🔍',
        unlocked: false
    },
    {
        id: 'curious_mind',
        name: 'Neural Synthesizer',
        desc: 'Engaged NEXUS AI assistant with 5+ inquiries',
        icon: '🧠',
        unlocked: false
    },
    {
        id: 'time_traveler',
        name: 'Chrono Inspector',
        desc: 'Scanned through all chronological tactical logs',
        icon: '⏰',
        unlocked: false
    },
    {
        id: 'skill_scanner',
        name: 'Synaptic Navigator',
        desc: 'Interacted with the Neural Graph and all skill clusters',
        icon: '⚙️',
        unlocked: false
    },
    {
        id: 'code_breaker',
        name: 'Terminal Hacker',
        desc: 'Discovered hidden Easter Egg via Command Palette',
        icon: '🥚',
        unlocked: false
    },
    {
        id: 'konami_master',
        name: 'Cyber Overdrive',
        desc: 'Executed the legendary Konami Code sequence',
        icon: '🎮',
        unlocked: false
    },
    {
        id: 'full_access',
        name: 'Grand Commander',
        desc: 'Attained 100% authorization clearance across all modules',
        icon: '🏆',
        unlocked: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/aria-responses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — NEXUS AI Knowledge Base
// ═══════════════════════════════════════════════════════
__turbopack_context__.s([
    "ariaFallback",
    ()=>ariaFallback,
    "ariaGreeting",
    ()=>ariaGreeting,
    "ariaResponses",
    ()=>ariaResponses,
    "ariaSuggestions",
    ()=>ariaSuggestions
]);
const ariaGreeting = `Greetings, Operator. I am <span class="highlight">NEXUS AI</span> — the cognitive copilot of Gabriel Henrique's Career Command Center. I can provide real-time intelligence on his engineering background, neural skill matrix, classified project vaults, or executive briefs. What directive would you like to execute?`;
const ariaSuggestions = [
    'Qual é a principal stack?',
    'Quais projetos utilizam IA?',
    'Experiências com automação?',
    'Elevator Pitch executivo',
    'Certificações verificadas',
    'Canais de contato direto'
];
const ariaResponses = [
    {
        keywords: [
            'stack',
            'tecnologia',
            'tech',
            'linguagem',
            'skill',
            'domina',
            'sabe'
        ],
        response: `Gabriel possui uma stack polivalente e focada em alta performance:
    <br><br>
    • <span class="highlight">Core AI & Backend:</span> Python, TensorFlow, PyTorch, LangChain, FastAPI, C++.<br>
    • <span class="highlight">Frontend & Full Stack:</span> TypeScript, React, Next.js, Node.js, Design Systems.<br>
    • <span class="highlight">Hardware & Automação:</span> Arduino, ESP32, ROS, MQTT, RPA.<br>
    • <span class="highlight">Cloud & DevOps:</span> AWS, Docker, CI/CD Actions, Linux, PostgreSQL, Redis.<br><br>
    Deseja inspecionar o grafo neural no módulo <strong>TECH MATRIX</strong>?`
    },
    {
        keywords: [
            'ia',
            'inteligencia',
            'ai',
            'machine learning',
            'ml',
            'deep learning',
            'llm',
            'rag',
            'visao'
        ],
        response: `Na vertical de <strong>Inteligência Artificial</strong>, Gabriel atua com:
    <br><br>
    1. <span class="highlight">Computer Vision:</span> CNNs customizadas e aceleradas via CUDA/TensorRT (ex: <em>Neural Vision System</em> operando a 60+ FPS).<br>
    2. <span class="highlight">LLM & Multi-Agent Systems:</span> RAGs avançados, tool-calling e automação de decisões complexas com LangChain e pgvector.<br>
    3. <span class="highlight">Certificação:</span> Google TensorFlow Developer & Stanford ML Specialization.`
    },
    {
        keywords: [
            'automacao',
            'robotica',
            'hardware',
            'iot',
            'arduino',
            'rpi',
            'rpa',
            'ros'
        ],
        response: `Em <strong>Automação & Robótica</strong>, os destaques são:
    <br><br>
    • <span class="highlight">Smart Automation Hub:</span> Orquestração de 50+ robôs RPA e microcontroladores IoT via MQTT.<br>
    • <span class="highlight">RoboGuard Sentinel:</span> Drone terrestre autônomo com navegação SLAM e mapeamento LiDAR via ROS.<br>
    • <span class="highlight">Firmware:</span> Programação C/C++ para Arduino e nós de sensoriamento industrial.`
    },
    {
        keywords: [
            'projeto',
            'projetos',
            'vault',
            'portfolio',
            'trabalho',
            'cases'
        ],
        response: `O <strong>PROJECT VAULT</strong> armazena 6 projetos-chave de alto impacto:
    <br><br>
    • <strong>Neural Vision System:</strong> Inspeção de defeitos em tempo real.<br>
    • <strong>Autonomous Agent Orchestrator:</strong> Redes de agentes autônomos inteligentes.<br>
    • <strong>Smart Automation Hub:</strong> Telemetria e controle industrial IoT.<br>
    • <strong>DataFlow Analytics:</strong> BI em larga escala com 2M+ eventos/dia.<br>
    • <strong>RoboGuard Sentinel:</strong> Robótica autônoma SLAM.<br>
    • <strong>NEXUS OS:</strong> Este sistema operacional interativo.<br><br>
    Você pode abrir qualquer dossiê para ver o problema, solução e métricas!`
    },
    {
        keywords: [
            'experiencia',
            'carreira',
            'tempo',
            'trabalhou',
            'empresas',
            'timeline',
            'missao'
        ],
        response: `Gabriel acumula <strong>5+ anos</strong> de experiência em engenharia de sistemas e IA:
    <br><br>
    • <span class="highlight">2024 — Presente:</span> Lead AI & Distributed Systems Architect na <em>TechCorp Innovation</em>.<br>
    • <span class="highlight">2022 — 2023:</span> Senior Full Stack & ML Engineer na <em>DataFlow Systems</em>.<br>
    • <span class="highlight">2021 — 2022:</span> Automation & Embedded Hardware Engineer na <em>AutomateTech</em>.<br>
    • <span class="highlight">2020 — 2021:</span> Software Development Specialist na <em>StartupLab</em>.`
    },
    {
        keywords: [
            'pitch',
            'elevator',
            'resumo',
            'quem e',
            'apresentacao',
            'sobre'
        ],
        response: `<strong>Executive Elevator Brief:</strong><br><br>
    Gabriel Henrique é um <span class="highlight">Engenheiro e Arquiteto de Sistemas com foco em IA e Automação</span>. Especialista em traduzir problemas de alta complexidade em arquiteturas elegantes e escaláveis — desde redes neurais em produção e sistemas autônomos multi-agente até hardware embarcado e microsserviços de baixa latência. Já entregou 42+ projetos e lidera squads técnicas com mentalidade orientada a impacto mensurável.`
    },
    {
        keywords: [
            'certificacao',
            'certificado',
            'cert',
            'cursos',
            'formacao',
            'diploma'
        ],
        response: `O <strong>KNOWLEDGE HUB</strong> contém certificações verificadas por entidades globais:
    <br><br>
    🏆 <strong>AWS Certified Solutions Architect</strong><br>
    🏆 <strong>Google TensorFlow Developer</strong><br>
    🏆 <strong>Stanford Machine Learning Specialization</strong><br>
    🏆 <strong>Docker Certified Associate & CKA (Kubernetes)</strong><br>
    🏆 <strong>Meta Full-Stack Professional</strong>`
    },
    {
        keywords: [
            'contato',
            'falar',
            'email',
            'linkedin',
            'github',
            'contratar',
            'hire'
        ],
        response: `Você pode estabelecer conexão com Gabriel através dos seguintes canais:
    <br><br>
    • <span class="highlight">LinkedIn:</span> linkedin.com/in/gabrielhenrique<br>
    • <span class="highlight">GitHub:</span> github.com<br>
    • <span class="highlight">Status:</span> Aberto a propostas de liderança técnica, projetos de IA e posições de alto impacto.`
    }
];
const ariaFallback = `Comando recebido. Não localizei dados específicos com esses parâmetros, mas posso processar consultas sobre: <span class="highlight">Stack Tecnológica</span>, <span class="highlight">Projetos de IA</span>, <span class="highlight">Automação & Robótica</span>, <span class="highlight">Trajetória Profissional</span> ou <span class="highlight">Elevator Pitch</span>. Qual seção deseja inspecionar?`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/profile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Identity Core Data
// ═══════════════════════════════════════════════════════
__turbopack_context__.s([
    "profile",
    ()=>profile
]);
const profile = {
    codename: 'OPERATOR GABRIEL',
    name: 'Gabriel Henrique',
    title: 'AI & Software Systems Engineer',
    titles: [
        'AI Systems Architect',
        'Full Stack Engineer',
        'Robotics & Automation Specialist',
        'Autonomous Agent Developer',
        'Distributed Systems Architect'
    ],
    level: 28,
    xp: 88,
    clearance: 'LEVEL 5 // ALPHA',
    operationalStatus: 'ACTIVE // ONLINE',
    location: 'São Paulo, BR [UTC-3]',
    coordinates: {
        lat: '-23.5505',
        lon: '-46.6333'
    },
    formation: 'B.S. Software Engineering',
    focus: 'Large Language Models, Computer Vision & Robotics',
    languages: [
        'Português (Nativo)',
        'English (Fluent / Professional)'
    ],
    bio: [
        {
            type: 'comment',
            text: '// SYSTEM DOSSIER: IDENTITY CORE v3.0'
        },
        {
            type: 'keyword',
            text: 'class '
        },
        {
            type: 'normal',
            text: 'LeadEngineer extends SystemArchitect {'
        },
        {
            type: 'property',
            text: '  readonly coreDirective = '
        },
        {
            type: 'string',
            text: '"Solve high-complexity problems through elegant engineering";'
        },
        {
            type: 'property',
            text: '  readonly operationalParadigm = '
        },
        {
            type: 'string',
            text: '"Autonomous agents, neural pipelines & resilient architectures";'
        },
        {
            type: 'property',
            text: '  readonly missionStatus = '
        },
        {
            type: 'string',
            text: '"Available for high-impact innovation missions";'
        },
        {
            type: 'normal',
            text: '}'
        },
        {
            type: 'empty',
            text: ''
        },
        {
            type: 'comment',
            text: '// "Technology is not an end — it is the substrate of human expansion."'
        }
    ],
    dna: [
        {
            icon: '🧠',
            title: 'AI & Deep Learning',
            desc: 'Model fine-tuning, RAG architectures, computer vision pipelines and multi-agent systems.'
        },
        {
            icon: '⚡',
            title: 'Full-Stack Architecture',
            desc: 'High-throughput microservices, reactive frontends, clean architecture, and distributed databases.'
        },
        {
            icon: '🦾',
            title: 'Robotics & Hardware Automation',
            desc: 'Embedded firmware (Arduino, ESP32, ROS), IoT telemetry with MQTT, and industrial RPA.'
        },
        {
            icon: '🛡️',
            title: 'Cloud, DevOps & Resilience',
            desc: 'Container orchestration, CI/CD automated pipelines, cloud infrastructure, and low-latency APIs.'
        }
    ],
    stats: {
        yearsExperience: 5,
        projectsDelivered: 42,
        technologies: '30+',
        certifications: 12
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Project Vault Data
// ═══════════════════════════════════════════════════════
__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 'VLT-001',
        name: 'Neural Vision System',
        spec: 'SYS.ENG // COMP_VISION_01',
        desc: 'High-throughput computer vision engine performing real-time multi-object detection and segmentation at 60+ FPS using custom TensorRT-optimized CNNs.',
        fullDesc: 'End-to-end computer vision infrastructure engineered with custom deep learning backbones. Features dynamic bounding box prediction, spatial trajectory analysis, and sub-10ms inference latency on CUDA hardware.',
        problem: 'Manual inspection bottlenecks in high-speed manufacturing lines resulting in missed quality defects.',
        solution: 'Designed and deployed an edge-accelerated CNN pipeline with real-time RTSP stream consumption and automated telemetry alerts.',
        result: 'Reduced defect escape rates by 84% and achieved over $400K annual cost reduction.',
        tech: [
            'Python',
            'TensorFlow',
            'OpenCV',
            'CUDA',
            'FastAPI',
            'Docker'
        ],
        status: 'deployed',
        category: 'ai',
        icon: '👁️',
        links: {
            demo: '#',
            code: 'https://github.com'
        }
    },
    {
        id: 'VLT-002',
        name: 'Autonomous Agent Orchestrator',
        spec: 'AI.OPS // MULTI_AGENT_02',
        desc: 'Autonomous multi-agent orchestration framework leveraging LLMs, vector memory (RAG), and dynamic tool execution for complex workflow automation.',
        fullDesc: 'Enterprise-grade agentic system capable of decomposing multi-step strategic objectives into verifiable atomic tasks, self-correcting runtime errors, and collaborating across specialized agent personas.',
        problem: 'Repetitive human triage and complex decision-tree workflows creating operational drag.',
        solution: 'Engineered a graph-based state machine powered by LangChain and pgvector for hierarchical agent decision execution.',
        result: 'Automated 75% of tier-1 and tier-2 operational workflows with 98.2% semantic accuracy.',
        tech: [
            'Python',
            'LangChain',
            'FastAPI',
            'pgvector',
            'PostgreSQL',
            'Redis'
        ],
        status: 'deployed',
        category: 'ai',
        icon: '🤖',
        links: {
            demo: '#',
            code: 'https://github.com'
        }
    },
    {
        id: 'VLT-003',
        name: 'Smart Automation & IoT Hub',
        spec: 'HW.IOT // EMBEDDED_ROBOTICS_03',
        desc: 'Unified industrial command platform orchestrating distributed RPA software robots and embedded IoT sensor microcontrollers with telemetry HUD.',
        fullDesc: 'Centralized edge-to-cloud telemetry and orchestration bridge connecting ESP32/Arduino sensor grids with software bot runners using pub/sub architecture.',
        problem: 'Fragmented hardware devices and lack of real-time telemetry across multi-site industrial plants.',
        solution: 'Built an event-driven broker using MQTT protocols with zero-lag WebSocket dashboard synchronization.',
        result: 'Seamless telemetry ingestion from 50+ concurrent hardware nodes with 99.9% packet delivery.',
        tech: [
            'Python',
            'React',
            'MQTT',
            'Arduino',
            'ESP32',
            'Docker'
        ],
        status: 'deployed',
        category: 'automation',
        icon: '🦾',
        links: {
            demo: '#',
            code: 'https://github.com'
        }
    },
    {
        id: 'VLT-004',
        name: 'DataFlow Analytics Matrix',
        spec: 'DATA.ENG // STREAM_PIPELINE_04',
        desc: 'Real-time high-scale data visualization platform with ETL processing engines handling 2M+ records daily with sub-second OLAP query response times.',
        fullDesc: 'Modern data warehousing and streaming analytics dashboard featuring modular D3.js visualization widgets, anomaly detection spikes, and automated report generation.',
        problem: 'Siloed relational databases unable to deliver real-time operational insights to executive leadership.',
        solution: 'Designed an asynchronous streaming ETL pipeline backed by Redis caching layers and optimized PostgreSQL indexes.',
        result: 'Instant dashboard telemetry rendering with query latency under 350ms across millions of historical records.',
        tech: [
            'TypeScript',
            'React',
            'D3.js',
            'Node.js',
            'PostgreSQL',
            'Redis'
        ],
        status: 'deployed',
        category: 'web',
        icon: '📊',
        links: {
            demo: '#',
            code: 'https://github.com'
        }
    },
    {
        id: 'VLT-005',
        name: 'RoboGuard Sentinel Drone',
        spec: 'ROB.SLAM // AUTONOMOUS_NAV_05',
        desc: 'Autonomous patrol robot prototype utilizing SLAM (Simultaneous Localization and Mapping), LiDAR obstacle avoidance, and thermal anomaly scanning.',
        fullDesc: 'Autonomous mobile robot (AMR) integrating ROS navigation stacks, 2D LiDAR sensors, and computer vision object tracking for 24/7 facility safety patrolling.',
        problem: 'High risk exposure and blind spots in continuous hazardous industrial patrol zones.',
        solution: 'Configured ROS navigation waypoint nodes with fail-safe collision avoidance and real-time thermal alert streaming.',
        result: 'Completed 500+ hours of autonomous obstacle navigation with zero collision incidents.',
        tech: [
            'ROS',
            'C++',
            'Python',
            'Raspberry Pi',
            'OpenCV',
            'LiDAR'
        ],
        status: 'prototype',
        category: 'automation',
        icon: '🛡️',
        links: {
            demo: '#',
            code: 'https://github.com'
        }
    },
    {
        id: 'VLT-006',
        name: 'NEXUS OS Command Center',
        spec: 'CORE.SYS // AI_CAREER_OS_06',
        desc: 'Personal AI Operating System showcasing career milestones, neural tech graphs, tactical logs, and built-in AI conversational assistant.',
        fullDesc: 'State-of-the-art interactive web experience demonstrating engineering mastery through custom design systems, GSAP timeline animations, and zero heavy dependencies.',
        problem: 'Conventional portfolios fail to convey modern engineering rigor, vision, and depth.',
        solution: 'Crafted a sci-fi command center aesthetic with real interactive systems and game-like immersion.',
        result: 'Unforgettable impression establishing undisputed technical authority and innovation.',
        tech: [
            'JavaScript',
            'CSS3 Design System',
            'GSAP',
            'HTML5 Canvas',
            'Vite'
        ],
        status: 'active',
        category: 'web',
        icon: '🔮',
        links: {
            demo: '#',
            code: 'https://github.com'
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/skills.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Tech Matrix Data (Neural Graph & Nodes)
// ═══════════════════════════════════════════════════════
__turbopack_context__.s([
    "neuralLinks",
    ()=>neuralLinks,
    "skillCategories",
    ()=>skillCategories,
    "skills",
    ()=>skills
]);
const skillCategories = [
    {
        id: 'all',
        label: 'All Clusters',
        icon: '⚡'
    },
    {
        id: 'ai',
        label: 'AI & Neural Systems',
        icon: '🧠'
    },
    {
        id: 'fullstack',
        label: 'Full Stack & Web',
        icon: '🌐'
    },
    {
        id: 'backend',
        label: 'Backend & APIs',
        icon: '⚙️'
    },
    {
        id: 'cloud',
        label: 'Cloud & DevOps',
        icon: '☁️'
    },
    {
        id: 'hardware',
        label: 'Robotics & Hardware',
        icon: '🦾'
    },
    {
        id: 'data',
        label: 'Databases & Streams',
        icon: '📊'
    }
];
const skills = [
    // AI & ML
    {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        tier: 'master',
        xp: 96,
        years: 5,
        category: 'ai',
        x: 200,
        y: 150
    },
    {
        id: 'tf',
        name: 'TensorFlow',
        icon: '🧠',
        tier: 'expert',
        xp: 88,
        years: 3,
        category: 'ai',
        x: 120,
        y: 110
    },
    {
        id: 'pytorch',
        name: 'PyTorch',
        icon: '🔥',
        tier: 'expert',
        xp: 84,
        years: 3,
        category: 'ai',
        x: 280,
        y: 100
    },
    {
        id: 'opencv',
        name: 'OpenCV / Vision',
        icon: '👁️',
        tier: 'expert',
        xp: 86,
        years: 3,
        category: 'ai',
        x: 90,
        y: 190
    },
    {
        id: 'llm',
        name: 'LLMs & Agents (LangChain)',
        icon: '🤖',
        tier: 'expert',
        xp: 90,
        years: 2,
        category: 'ai',
        x: 310,
        y: 180
    },
    {
        id: 'scikit',
        name: 'Scikit-Learn',
        icon: '📈',
        tier: 'expert',
        xp: 87,
        years: 4,
        category: 'ai',
        x: 200,
        y: 80
    },
    // Full Stack & Web
    {
        id: 'ts',
        name: 'TypeScript',
        icon: '🔷',
        tier: 'expert',
        xp: 92,
        years: 4,
        category: 'fullstack',
        x: 450,
        y: 150
    },
    {
        id: 'react',
        name: 'React & Next.js',
        icon: '⚛️',
        tier: 'expert',
        xp: 90,
        years: 4,
        category: 'fullstack',
        x: 420,
        y: 80
    },
    {
        id: 'js',
        name: 'Modern JavaScript',
        icon: '⚡',
        tier: 'master',
        xp: 95,
        years: 5,
        category: 'fullstack',
        x: 520,
        y: 110
    },
    {
        id: 'css',
        name: 'Design Systems & CSS3',
        icon: '🎨',
        tier: 'master',
        xp: 94,
        years: 5,
        category: 'fullstack',
        x: 500,
        y: 220
    },
    // Backend
    {
        id: 'node',
        name: 'Node.js / Express',
        icon: '🟢',
        tier: 'expert',
        xp: 88,
        years: 4,
        category: 'backend',
        x: 380,
        y: 280
    },
    {
        id: 'fastapi',
        name: 'FastAPI',
        icon: '🚀',
        tier: 'expert',
        xp: 90,
        years: 3,
        category: 'backend',
        x: 260,
        y: 280
    },
    {
        id: 'cpp',
        name: 'C / C++',
        icon: '⚙️',
        tier: 'advanced',
        xp: 76,
        years: 3,
        category: 'backend',
        x: 140,
        y: 280
    },
    // Cloud & DevOps
    {
        id: 'docker',
        name: 'Docker Containers',
        icon: '🐳',
        tier: 'expert',
        xp: 86,
        years: 3,
        category: 'cloud',
        x: 480,
        y: 360
    },
    {
        id: 'aws',
        name: 'AWS Cloud Architecture',
        icon: '☁️',
        tier: 'advanced',
        xp: 80,
        years: 3,
        category: 'cloud',
        x: 380,
        y: 390
    },
    {
        id: 'cicd',
        name: 'CI/CD Pipelines (Actions)',
        icon: '🔄',
        tier: 'expert',
        xp: 85,
        years: 3,
        category: 'cloud',
        x: 260,
        y: 390
    },
    {
        id: 'linux',
        name: 'Linux Kernel & Bash',
        icon: '🐧',
        tier: 'master',
        xp: 92,
        years: 5,
        category: 'cloud',
        x: 560,
        y: 320
    },
    // Robotics & Hardware
    {
        id: 'arduino',
        name: 'Arduino / Microcontrollers',
        icon: '📟',
        tier: 'master',
        xp: 90,
        years: 4,
        category: 'hardware',
        x: 100,
        y: 360
    },
    {
        id: 'rpi',
        name: 'Raspberry Pi / Single-Board',
        icon: '🍓',
        tier: 'expert',
        xp: 85,
        years: 3,
        category: 'hardware',
        x: 180,
        y: 370
    },
    {
        id: 'ros',
        name: 'Robot Operating System (ROS)',
        icon: '🦾',
        tier: 'proficient',
        xp: 70,
        years: 2,
        category: 'hardware',
        x: 110,
        y: 440
    },
    {
        id: 'mqtt',
        name: 'MQTT / IoT Protocols',
        icon: '📡',
        tier: 'expert',
        xp: 86,
        years: 3,
        category: 'hardware',
        x: 210,
        y: 450
    },
    // Databases & Streams
    {
        id: 'postgres',
        name: 'PostgreSQL / SQL',
        icon: '🐘',
        tier: 'expert',
        xp: 88,
        years: 4,
        category: 'data',
        x: 350,
        y: 460
    },
    {
        id: 'redis',
        name: 'Redis Cache',
        icon: '🔴',
        tier: 'advanced',
        xp: 80,
        years: 3,
        category: 'data',
        x: 450,
        y: 450
    },
    {
        id: 'mongo',
        name: 'MongoDB',
        icon: '🍃',
        tier: 'advanced',
        xp: 78,
        years: 3,
        category: 'data',
        x: 530,
        y: 420
    }
];
const neuralLinks = [
    {
        source: 'python',
        target: 'tf'
    },
    {
        source: 'python',
        target: 'pytorch'
    },
    {
        source: 'python',
        target: 'opencv'
    },
    {
        source: 'python',
        target: 'llm'
    },
    {
        source: 'python',
        target: 'scikit'
    },
    {
        source: 'python',
        target: 'fastapi'
    },
    {
        source: 'fastapi',
        target: 'postgres'
    },
    {
        source: 'fastapi',
        target: 'docker'
    },
    {
        source: 'ts',
        target: 'react'
    },
    {
        source: 'ts',
        target: 'node'
    },
    {
        source: 'js',
        target: 'ts'
    },
    {
        source: 'react',
        target: 'css'
    },
    {
        source: 'node',
        target: 'redis'
    },
    {
        source: 'node',
        target: 'postgres'
    },
    {
        source: 'docker',
        target: 'aws'
    },
    {
        source: 'docker',
        target: 'cicd'
    },
    {
        source: 'linux',
        target: 'docker'
    },
    {
        source: 'cpp',
        target: 'arduino'
    },
    {
        source: 'cpp',
        target: 'ros'
    },
    {
        source: 'arduino',
        target: 'rpi'
    },
    {
        source: 'rpi',
        target: 'mqtt'
    },
    {
        source: 'rpi',
        target: 'opencv'
    },
    {
        source: 'mqtt',
        target: 'fastapi'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/timeline.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Mission Log Data (Tactical Briefings)
// ═══════════════════════════════════════════════════════
__turbopack_context__.s([
    "timeline",
    ()=>timeline
]);
const timeline = [
    {
        id: 'OP-TITAN-2024',
        code: 'MSN-2024-001',
        status: 'active',
        classification: 'CONFIDENTIAL',
        role: 'Lead AI & Distributed Systems Architect',
        company: 'TechCorp Innovation Labs',
        timeframe: 'Jan 2024 — PRESENT',
        duration: '2+ Years',
        briefing: 'Leading specialized engineering divisions in deploying autonomous LLM multi-agent networks, high-throughput microservices, and distributed inference engines with 99.99% availability.',
        stack: [
            'Python',
            'FastAPI',
            'LangChain',
            'Docker',
            'AWS',
            'TensorFlow',
            'PostgreSQL'
        ],
        intel: [
            {
                val: '15+',
                lbl: 'Active Deployments'
            },
            {
                val: '40%',
                lbl: 'Latency Reduction'
            },
            {
                val: '3',
                lbl: 'Squads Coordinated'
            }
        ]
    },
    {
        id: 'OP-SYNAPSE-2022',
        code: 'MSN-2022-002',
        status: 'completed',
        classification: 'PUBLIC',
        role: 'Senior Full Stack & ML Engineer',
        company: 'DataFlow Systems Architecture',
        timeframe: 'Mar 2022 — Dec 2023',
        duration: '1 Year 10 Months',
        briefing: 'Architected real-time streaming analytics pipelines and neural visualization HUDs processing 2M+ daily events. Reduced ETL processing cycle times by 65%.',
        stack: [
            'TypeScript',
            'React',
            'Node.js',
            'PyTorch',
            'Docker',
            'Redis',
            'PostgreSQL'
        ],
        intel: [
            {
                val: '2M+',
                lbl: 'Events / Day'
            },
            {
                val: '99.5%',
                lbl: 'System Uptime'
            },
            {
                val: '12',
                lbl: 'Core Modules'
            }
        ]
    },
    {
        id: 'OP-CYBERKINETIC-2021',
        code: 'MSN-2021-003',
        status: 'completed',
        classification: 'PUBLIC',
        role: 'Automation & Embedded Hardware Engineer',
        company: 'AutomateTech Robotics',
        timeframe: 'Jun 2021 — Feb 2022',
        duration: '9 Months',
        briefing: 'Engineered robotic process automation (RPA) units and embedded IoT sensor nodes with MQTT telemetry. Deployed automated failover mechanisms across industrial production lines.',
        stack: [
            'Python',
            'C++',
            'Arduino',
            'Raspberry Pi',
            'MQTT',
            'ROS'
        ],
        intel: [
            {
                val: '8',
                lbl: 'RPA Robotic Nodes'
            },
            {
                val: '60%',
                lbl: 'Operating Cost Cut'
            },
            {
                val: '24/7',
                lbl: 'Telemetry Sync'
            }
        ]
    },
    {
        id: 'OP-GENESIS-2020',
        code: 'MSN-2020-004',
        status: 'completed',
        classification: 'PUBLIC',
        role: 'Software Development Specialist',
        company: 'StartupLab Incubator',
        timeframe: 'Jan 2020 — May 2021',
        duration: '1 Year 5 Months',
        briefing: 'Rapid engineering and delivery of production-ready MVPs for tech startups. Scaled foundational full-stack architectures and established CI/CD deployment routines.',
        stack: [
            'JavaScript',
            'React',
            'Node.js',
            'MongoDB',
            'Git'
        ],
        intel: [
            {
                val: '6',
                lbl: 'MVPs Shipped'
            },
            {
                val: '3',
                lbl: 'Venture Backed'
            },
            {
                val: '100%',
                lbl: 'Sprint Success'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/main.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startNexusOS",
    ()=>startNexusOS
]);
// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Main Application Orchestrator
// ═══════════════════════════════════════════════════════
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
// Data
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/profile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/skills.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/timeline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$achievements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/achievements.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aria$2d$responses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/aria-responses.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// ─── Application State ───
const state = {
    currentSection: 'hq',
    visitedSections: new Set([
        'hq'
    ]),
    vaultProjectsViewed: 0,
    aiInquiries: 0,
    matrixInteractions: 0,
    achievements: JSON.parse(localStorage.getItem('nexus-v3-achievements') || '[]'),
    booted: sessionStorage.getItem('nexus-v3-booted') === 'true'
};
// ─── 1. Boot Sequence with GSAP Timeline ───
function initBoot() {
    const bootScreen = document.getElementById('boot-screen');
    const mainNav = document.getElementById('main-nav');
    if (state.booted) {
        bootScreen.style.display = 'none';
        mainNav.classList.add('visible');
        initApp();
        return;
    }
    const lines = [
        {
            text: 'Core Quantum Kernel 3.0',
            code: 'INITIALIZED'
        },
        {
            text: 'Neural Synaptic Matrix Subsystems',
            code: 'ONLINE'
        },
        {
            text: 'Tactical Mission Log Telemetry',
            code: 'LOADED'
        },
        {
            text: 'Project Vault Cryptographic Shards',
            code: 'UNLOCKED'
        },
        {
            text: 'NEXUS AI Cognitive Neural Copilot',
            code: 'ACTIVE'
        },
        {
            text: 'Command Clearance Level 5 [ALPHA]',
            code: 'GRANTED'
        }
    ];
    const bootLinesEl = document.getElementById('boot-lines');
    const progressEl = document.getElementById('boot-progress');
    const percentEl = document.getElementById('boot-percent');
    const enterBtn = document.getElementById('boot-enter');
    // GSAP Boot Intro Timeline
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
    tl.to('.boot-logo', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
    }).to('.boot-sub', {
        opacity: 1,
        duration: 0.4
    }, '-=0.2').to('#boot-progress-wrap', {
        opacity: 1,
        duration: 0.3
    }, '-=0.1');
    // Append system lines sequentially
    lines.forEach((line, idx)=>{
        setTimeout(()=>{
            const lineEl = document.createElement('div');
            lineEl.className = 'boot-line';
            lineEl.innerHTML = `
        <span class="boot-line-icon">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          > ${line.text}
        </span>
        <span class="dots">${'.'.repeat(24)}</span>
        <span class="status">${line.code}</span>
      `;
            bootLinesEl.appendChild(lineEl);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lineEl, {
                opacity: 1,
                x: 0,
                duration: 0.25,
                ease: 'power1.out'
            });
            const pct = Math.round((idx + 1) / lines.length * 100);
            progressEl.style.width = pct + '%';
            percentEl.textContent = pct + '%';
            if (idx === lines.length - 1) {
                setTimeout(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(enterBtn, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: 'back.out(1.7)'
                    });
                }, 200);
            }
        }, 400 + idx * 300);
    });
    function completeBoot() {
        if (state.booted) return;
        state.booted = true;
        sessionStorage.setItem('nexus-v3-booted', 'true');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(bootScreen, {
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: ()=>{
                bootScreen.style.display = 'none';
                mainNav.classList.add('visible');
                initApp();
            }
        });
    }
    enterBtn.addEventListener('click', completeBoot);
    document.addEventListener('keydown', function onBootKey(e) {
        if (!state.booted) {
            completeBoot();
            document.removeEventListener('keydown', onBootKey);
        }
    });
}
// ─── 2. Smooth Section Router with GSAP ───
function initNavigation() {
    document.querySelectorAll('[data-navigate]').forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const target = btn.dataset.navigate;
            navigateTo(target);
        });
    });
    // Mobile menu toggle
    const mobToggle = document.getElementById('nav-mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    mobToggle.addEventListener('click', ()=>{
        navLinks.classList.toggle('open');
    });
    // Direct AI assistant trigger button in HQ
    document.getElementById('hq-mod-ai-btn')?.addEventListener('click', ()=>{
        document.getElementById('ai-toggle').click();
    });
}
function navigateTo(sectionId) {
    if (sectionId === state.currentSection) return;
    const currentEl = document.getElementById(`section-${state.currentSection}`);
    const targetEl = document.getElementById(`section-${sectionId}`);
    if (!targetEl) return;
    // Animate out current
    if (currentEl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(currentEl, {
            opacity: 0,
            y: -15,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: ()=>{
                currentEl.classList.remove('active');
                currentEl.style.display = 'none';
                // Prepare and animate in target
                targetEl.style.display = sectionId === 'hq' ? 'flex' : 'block';
                targetEl.classList.add('active');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(targetEl, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: 'power2.out'
                });
                state.currentSection = sectionId;
                state.visitedSections.add(sectionId);
                // Update nav active states
                document.querySelectorAll('.nav-link').forEach((link)=>link.classList.remove('active'));
                document.querySelector(`.nav-link[data-navigate="${sectionId}"]`)?.classList.add('active');
                document.getElementById('nav-links').classList.remove('open');
                // Trigger module specific initializations
                if (sectionId === 'identity') initIdentityCore();
                if (sectionId === 'matrix') initTechMatrix();
                if (sectionId === 'missions') initMissionLog();
                if (sectionId === 'vault') initProjectVault();
                if (sectionId === 'knowledge') initKnowledgeHub();
                // Check Explorer Achievement
                const allSections = [
                    'hq',
                    'identity',
                    'matrix',
                    'missions',
                    'vault',
                    'knowledge'
                ];
                if (allSections.every((s)=>state.visitedSections.has(s))) {
                    unlockAchievement('explorer');
                }
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
}
// ─── 3. Dynamic Typewriter ───
function initTypewriter() {
    const titles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].titles;
    const target = document.getElementById('typewriter-text');
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    function loop() {
        const currentText = titles[titleIdx];
        if (isDeleting) {
            target.textContent = currentText.substring(0, charIdx - 1);
            charIdx--;
        } else {
            target.textContent = currentText.substring(0, charIdx + 1);
            charIdx++;
        }
        let delay = isDeleting ? 35 : 75;
        if (!isDeleting && charIdx === currentText.length) {
            delay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
            delay = 400;
        }
        setTimeout(loop, delay);
    }
    loop();
}
// ─── 4. Animated Counters ───
function initCounters() {
    document.querySelectorAll('[data-count]').forEach((el)=>{
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const obj = {
            val: 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(obj, {
            val: target,
            duration: 2,
            ease: 'power3.out',
            onUpdate: ()=>{
                el.textContent = Math.round(obj.val) + suffix;
            }
        });
    });
}
// ─── 5. HQ Particle Field (Canvas) ───
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = {
        x: null,
        y: null
    };
    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    function create() {
        particles = [];
        const count = Math.min(90, Math.floor(canvas.width * canvas.height / 11000));
        for(let i = 0; i < count; i++){
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                size: Math.random() * 2 + 0.8,
                alpha: Math.random() * 0.6 + 0.2
            });
        }
    }
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < particles.length; i++){
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
            ctx.fill();
            // Connect nearby nodes
            for(let j = i + 1; j < particles.length; j++){
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${0.09 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(render);
    }
    resize();
    create();
    render();
    window.addEventListener('resize', ()=>{
        resize();
        create();
    });
}
// ─── 6. Live HUD Clock & Feed ───
function initHud() {
    function tick() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        const el = document.getElementById('hud-time');
        if (el) el.textContent = `${h}:${m}:${s} UTC-3`;
    }
    tick();
    setInterval(tick, 1000);
    const feed = document.getElementById('status-feed');
    const items = [
        {
            t: '17:00',
            text: 'quantum-kernel: v3.0 stable runtime active'
        },
        {
            t: '16:45',
            text: 'neural-sync: 24 tech nodes linked successfully'
        },
        {
            t: '15:20',
            text: 'vault-auth: credentials verified by AWS / Google'
        },
        {
            t: '14:10',
            text: 'ai-copilot: prompt embeddings indexed in memory'
        }
    ];
    items.forEach((item)=>{
        const row = document.createElement('div');
        row.className = 'feed-row';
        row.innerHTML = `<span class="feed-t">${item.t}</span><span class="feed-d"></span><span>${item.text}</span>`;
        feed.appendChild(row);
    });
}
// ─── 7. Identity Core (ID-CORE) Module ───
let identityInited = false;
function initIdentityCore() {
    if (identityInited) return;
    identityInited = true;
    // XP Fill
    setTimeout(()=>{
        const xpFill = document.getElementById('identity-xp-fill');
        if (xpFill) xpFill.style.width = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].xp + '%';
    }, 200);
    // Indicators
    const indicatorsEl = document.getElementById('identity-indicators');
    const items = [
        {
            label: 'CLEARANCE',
            val: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].clearance,
            icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        },
        {
            label: 'STATUS',
            val: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].operationalStatus,
            icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>'
        },
        {
            label: 'LOCATION',
            val: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location,
            icon: '<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
        },
        {
            label: 'FORMATION',
            val: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].formation,
            icon: '<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'
        }
    ];
    items.forEach((it)=>{
        const div = document.createElement('div');
        div.className = 'id-indicator';
        div.innerHTML = `${it.icon} <span>${it.label}</span> <span class="id-indicator-val">${it.val}</span>`;
        indicatorsEl.appendChild(div);
    });
    // Terminal Bio
    const bioEl = document.getElementById('bio-terminal');
    let html = '<span class="prompt">guest@nexus-core:~$ </span><br>';
    let lineIdx = 0;
    function typeBio() {
        if (lineIdx >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bio.length) {
            html += '<span class="typing-cursor"></span>';
            bioEl.innerHTML = html;
            return;
        }
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bio[lineIdx];
        let cls = '';
        if (item.type === 'comment') cls = 'cmt';
        else if (item.type === 'keyword') cls = 'kw';
        else if (item.type === 'string') cls = 'str';
        else if (item.type === 'property') cls = 'kw';
        if (item.type === 'empty') {
            html += '<br>';
        } else {
            html += `<span class="${cls}">${item.text}</span>`;
            if ([
                'comment',
                'normal',
                'string'
            ].includes(item.type)) {
                html += '<br>';
            }
        }
        bioEl.innerHTML = html;
        lineIdx++;
        setTimeout(typeBio, 80);
    }
    typeBio();
    // Engineering Pillars
    const pillarsEl = document.getElementById('identity-pillars');
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].dna.forEach((p)=>{
        const card = document.createElement('div');
        card.className = 'id-spec';
        card.innerHTML = `
      <div class="id-spec-icon">${p.icon}</div>
      <div class="id-spec-name">${p.title}</div>
      <div class="id-spec-desc">${p.desc}</div>
    `;
        pillarsEl.appendChild(card);
    });
}
// ─── 8. Tech Matrix (T-MTX) & Neural Graph ───
let matrixInited = false;
function initTechMatrix() {
    if (matrixInited) return;
    matrixInited = true;
    // View toggle
    document.querySelectorAll('.matrix-toggle-btn').forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            document.querySelectorAll('.matrix-toggle-btn').forEach((b)=>b.classList.remove('active'));
            btn.classList.add('active');
            const view = btn.dataset.view;
            document.getElementById('matrix-neural-view').style.display = view === 'neural' ? 'block' : 'none';
            document.getElementById('matrix-grid-view').style.display = view === 'grid' ? 'block' : 'none';
        });
    });
    // Render Grid Clusters
    renderMatrixTabs();
    renderMatrixGrid('all');
    // Render Interactive Neural Graph
    initNeuralGraphCanvas();
}
function renderMatrixTabs() {
    const tabsEl = document.getElementById('matrix-category-tabs');
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillCategories"].forEach((cat)=>{
        const btn = document.createElement('button');
        btn.className = `matrix-tab ${cat.id === 'all' ? 'active' : ''}`;
        btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;
        btn.addEventListener('click', ()=>{
            document.querySelectorAll('.matrix-tab').forEach((t)=>t.classList.remove('active'));
            btn.classList.add('active');
            renderMatrixGrid(cat.id);
            state.matrixInteractions++;
            if (state.matrixInteractions >= 4) {
                unlockAchievement('skill_scanner');
            }
        });
        tabsEl.appendChild(btn);
    });
}
function renderMatrixGrid(catId) {
    const gridEl = document.getElementById('matrix-nodes-grid');
    const filtered = catId === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].filter((s)=>s.category === catId);
    gridEl.innerHTML = '';
    filtered.forEach((skill)=>{
        const card = document.createElement('div');
        card.className = 'matrix-node-card';
        card.innerHTML = `
      <div class="matrix-node-icon">${skill.icon}</div>
      <div class="matrix-node-name">${skill.name}</div>
      <span class="matrix-node-tier ${skill.tier}">${skill.tier.toUpperCase()}</span>
      <div class="matrix-node-xp-track">
        <div class="matrix-node-xp-fill" style="width:${skill.xp}%"></div>
      </div>
      <div class="matrix-node-meta">
        <span>${skill.years} YRS EXP</span>
        <span>${skill.xp}% XP</span>
      </div>
    `;
        gridEl.appendChild(card);
    });
}
function initNeuralGraphCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let hoveredNode = null;
    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    // Position nodes proportionately
    function getNodePos(node) {
        const scaleX = canvas.width / 680;
        const scaleY = canvas.height / 500;
        return {
            x: node.x * scaleX,
            y: node.y * scaleY
        };
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw Synaptic Links
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neuralLinks"].forEach((link)=>{
            const source = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].find((s)=>s.id === link.source);
            const target = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].find((s)=>s.id === link.target);
            if (source && target) {
                const p1 = getNodePos(source);
                const p2 = getNodePos(target);
                const isHighlighted = hoveredNode && (hoveredNode.id === source.id || hoveredNode.id === target.id);
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = isHighlighted ? 'rgba(0, 255, 136, 0.8)' : 'rgba(0, 255, 136, 0.12)';
                ctx.lineWidth = isHighlighted ? 2 : 1;
                ctx.stroke();
            }
        });
        // Draw Nodes
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].forEach((skill)=>{
            const pos = getNodePos(skill);
            const isHovered = hoveredNode && hoveredNode.id === skill.id;
            // Glow halo
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, isHovered ? 24 : 14, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? 'rgba(0, 255, 136, 0.25)' : 'rgba(0, 255, 136, 0.05)';
            ctx.fill();
            // Core Node
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, isHovered ? 8 : 5, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? '#00FF88' : 'rgba(0, 255, 136, 0.7)';
            ctx.fill();
            // Text Label
            ctx.font = isHovered ? 'bold 12px Rajdhani' : '10px Rajdhani';
            ctx.fillStyle = isHovered ? '#E4E4F0' : 'rgba(228, 228, 240, 0.6)';
            ctx.textAlign = 'center';
            ctx.fillText(skill.name, pos.x, pos.y + (isHovered ? 28 : 20));
        });
        requestAnimationFrame(draw);
    }
    draw();
    canvas.addEventListener('mousemove', (e)=>{
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        hoveredNode = null;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].forEach((skill)=>{
            const pos = getNodePos(skill);
            const dist = Math.sqrt((mouseX - pos.x) ** 2 + (mouseY - pos.y) ** 2);
            if (dist < 22) {
                hoveredNode = skill;
            }
        });
    });
}
// ─── 9. Mission Log (M-LOG) Module ───
let missionsInited = false;
function initMissionLog() {
    if (missionsInited) return;
    missionsInited = true;
    const trackEl = document.getElementById('mission-timeline-track');
    // Classification Filters
    document.querySelectorAll('.mission-filter-btn').forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            document.querySelectorAll('.mission-filter-btn').forEach((b)=>b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            renderMissions(filter);
        });
    });
    renderMissions('all');
    unlockAchievement('time_traveler');
}
function renderMissions(filter) {
    const trackEl = document.getElementById('mission-timeline-track');
    trackEl.innerHTML = '';
    const filtered = filter === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"].filter((m)=>m.status === filter);
    filtered.forEach((mission, idx)=>{
        const entry = document.createElement('div');
        entry.className = 'mission-entry';
        entry.innerHTML = `
      <div class="mission-beacon ${mission.status === 'active' ? 'active' : ''}">
        <div class="mission-beacon-inner"></div>
      </div>
      
      <div class="mission-card">
        <div class="mission-card-header">
          <div class="mission-id">
            <span>${mission.code}</span>
            <span style="opacity:0.4;">//</span>
            <span>${mission.id}</span>
          </div>
          <span class="mission-badge ${mission.status}">${mission.status.toUpperCase()}</span>
        </div>

        <div class="mission-card-body">
          <div class="mission-role">${mission.role}</div>
          <div class="mission-org">TARGET ORGANIZATION: ${mission.company}</div>
          <div class="mission-timeframe">
            <span>TIMEFRAME: ${mission.timeframe}</span>
            <span>DURATION: ${mission.duration}</span>
          </div>

          <div class="mission-briefing">${mission.briefing}</div>

          <div class="mission-stack">
            ${mission.stack.map((s)=>`<span class="badge badge-amber">${s}</span>`).join('')}
          </div>

          <div class="mission-intel-grid">
            ${mission.intel.map((it)=>`
              <div class="mission-intel-item">
                <div class="mission-intel-val">${it.val}</div>
                <div class="mission-intel-lbl">${it.lbl}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
        trackEl.appendChild(entry);
        setTimeout(()=>{
            entry.classList.add('visible');
        }, 150 + idx * 180);
    });
}
// ─── 10. Project Vault (P-VLT) Module ───
let vaultInited = false;
function initProjectVault() {
    if (vaultInited) return;
    vaultInited = true;
    const filters = [
        {
            id: 'all',
            label: 'All Vaults'
        },
        {
            id: 'ai',
            label: '🧠 AI & Vision'
        },
        {
            id: 'automation',
            label: '🦾 Robotics & IoT'
        },
        {
            id: 'web',
            label: '🌐 Core Platforms'
        }
    ];
    const filtersEl = document.getElementById('vault-filters');
    filters.forEach((f)=>{
        const btn = document.createElement('button');
        btn.className = `vault-filter-btn ${f.id === 'all' ? 'active' : ''}`;
        btn.textContent = f.label;
        btn.addEventListener('click', ()=>{
            document.querySelectorAll('.vault-filter-btn').forEach((b)=>b.classList.remove('active'));
            btn.classList.add('active');
            renderVaultGrid(f.id);
        });
        filtersEl.appendChild(btn);
    });
    renderVaultGrid('all');
    // Modal Close Listeners
    document.getElementById('vault-modal-close').addEventListener('click', closeVaultModal);
    document.getElementById('vault-modal-overlay').addEventListener('click', (e)=>{
        if (e.target.id === 'vault-modal-overlay') closeVaultModal();
    });
}
function renderVaultGrid(catId) {
    const gridEl = document.getElementById('vault-grid');
    const filtered = catId === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.category === catId);
    gridEl.innerHTML = '';
    filtered.forEach((p)=>{
        const card = document.createElement('div');
        card.className = 'vault-card';
        card.innerHTML = `
      <div class="vault-card-bar">
        <span class="vault-card-spec">${p.spec}</span>
        <span class="vault-card-badge ${p.status}">${p.status.toUpperCase()}</span>
      </div>

      <div class="vault-card-preview">
        <div class="vault-card-icon-big">${p.icon}</div>
      </div>

      <div class="vault-card-body">
        <div class="vault-card-title">${p.name}</div>
        <div class="vault-card-desc">${p.desc}</div>

        <div class="vault-card-tags">
          ${p.tech.map((t)=>`<span class="badge badge-violet">${t}</span>`).join('')}
        </div>

        <div class="vault-card-footer">
          <button class="btn btn-outline btn-inspect" data-vault="${p.id}">INSPECT DOSSIER</button>
          <button class="btn btn-ghost" onclick="window.open('${p.links.code}', '_blank')">SOURCE</button>
        </div>
      </div>
    `;
        gridEl.appendChild(card);
        card.querySelector('.btn-inspect').addEventListener('click', ()=>{
            openVaultModal(p);
        });
    });
}
function openVaultModal(p) {
    const overlay = document.getElementById('vault-modal-overlay');
    const content = document.getElementById('vault-modal-content');
    content.innerHTML = `
    <div class="vault-modal-header">
      <div class="badge badge-violet" style="margin-bottom:8px;">${p.spec}</div>
      <div class="vault-modal-title">${p.name}</div>
      <div class="vault-modal-subtitle">${p.tech.join(' • ')}</div>
    </div>

    <div class="vault-modal-section">
      <h4>// ARCHITECTURAL OVERVIEW</h4>
      <p>${p.fullDesc}</p>
    </div>

    <div class="vault-modal-section">
      <h4>// OPERATIONAL CHALLENGE</h4>
      <p>${p.problem}</p>
    </div>

    <div class="vault-modal-section">
      <h4>// APPLIED ENGINEERING SOLUTION</h4>
      <p>${p.solution}</p>
    </div>

    <div class="vault-modal-section">
      <h4>// QUANTIFIABLE BUSINESS OUTCOME</h4>
      <p>${p.result}</p>
    </div>

    <div class="vault-modal-actions">
      <button class="btn btn-primary" onclick="window.open('${p.links.demo}', '_blank')">LIVE DEMONSTRATION</button>
      <button class="btn btn-outline" onclick="window.open('${p.links.code}', '_blank')">REPOSITORY CODE</button>
    </div>
  `;
    overlay.classList.add('open');
    state.vaultProjectsViewed++;
    if (state.vaultProjectsViewed >= 3) {
        unlockAchievement('deep_diver');
    }
}
function closeVaultModal() {
    document.getElementById('vault-modal-overlay').classList.remove('open');
}
// ─── 11. Knowledge Hub (K-HUB) Module ───
let hubInited = false;
function initKnowledgeHub() {
    if (hubInited) {
        updateVisitorAchievements();
        return;
    }
    hubInited = true;
    // Render Certifications
    const certsGrid = document.getElementById('hub-certs-grid');
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$achievements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].forEach((cert)=>{
        const card = document.createElement('div');
        card.className = 'hub-cert-card';
        card.innerHTML = `
      <div class="hub-cert-top">
        <div class="hub-cert-icon-wrap">${cert.icon}</div>
        <div class="hub-cert-verified">
          <span class="hub-cert-verified-dot"></span>
          <span>${cert.badge}</span>
        </div>
      </div>

      <div class="hub-cert-name">${cert.name}</div>
      <div class="hub-cert-issuer">${cert.issuer}</div>

      <div class="hub-cert-meta">
        <span>ISSUED: ${cert.date}</span>
        <span class="badge badge-gold">${cert.tier.toUpperCase()}</span>
      </div>
    `;
        certsGrid.appendChild(card);
    });
    updateVisitorAchievements();
}
function updateVisitorAchievements() {
    const achGrid = document.getElementById('hub-achievements-grid');
    achGrid.innerHTML = '';
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$achievements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visitorAchievements"].forEach((ach)=>{
        const isUnlocked = state.achievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = `hub-ach-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
      <div class="hub-ach-icon">${isUnlocked ? ach.icon : '🔒'}</div>
      <div class="hub-ach-title">${ach.name}</div>
      <div class="hub-ach-desc">${ach.desc}</div>
      <span class="badge ${isUnlocked ? 'badge-gold' : ''}" style="margin-top:4px;">
        ${isUnlocked ? 'AUTHORIZED' : 'RESTRICTED'}
      </span>
    `;
        achGrid.appendChild(card);
    });
}
function unlockAchievement(achId) {
    if (state.achievements.includes(achId)) return;
    state.achievements.push(achId);
    localStorage.setItem('nexus-v3-achievements', JSON.stringify(state.achievements));
    const ach = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$achievements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visitorAchievements"].find((a)=>a.id === achId);
    if (ach) {
        showToast(ach.icon, 'SECURITY CLEARANCE UNLOCKED', ach.name);
    }
    // Update nav counter
    const countEl = document.getElementById('ach-count');
    if (countEl) countEl.textContent = state.achievements.length;
    if (state.achievements.length >= 8) {
        setTimeout(()=>unlockAchievement('full_access'), 1000);
    }
}
function showToast(icon, title, desc) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast anim-fade-up';
    toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${desc}</div>
    </div>
  `;
    container.appendChild(toast);
    setTimeout(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(toast, {
            opacity: 0,
            x: 100,
            duration: 0.4,
            onComplete: ()=>toast.remove()
        });
    }, 4000);
}
// ─── 12. NEXUS AI Cognitive Assistant (N-AI) ───
function initAIAssistant() {
    const toggle = document.getElementById('ai-toggle');
    const windowEl = document.getElementById('ai-chat-window');
    const input = document.getElementById('ai-input');
    const sendBtn = document.getElementById('ai-send');
    const messagesEl = document.getElementById('ai-messages');
    const promptsEl = document.getElementById('ai-prompts');
    let isOpen = false;
    toggle.addEventListener('click', ()=>{
        isOpen = !isOpen;
        windowEl.classList.toggle('open', isOpen);
        toggle.classList.toggle('active', isOpen);
        if (isOpen && messagesEl.children.length === 0) {
            postAIMessage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aria$2d$responses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ariaGreeting"]);
            renderSuggestions();
        }
    });
    function executeQuery(text) {
        if (!text.trim()) return;
        postUserMessage(text);
        input.value = '';
        state.aiInquiries++;
        if (state.aiInquiries >= 5) {
            unlockAchievement('curious_mind');
        }
        // Typing wave animation
        const waveEl = document.createElement('div');
        waveEl.className = 'ai-msg system';
        waveEl.innerHTML = `
      <div class="ai-msg-bubble">
        <div class="ai-typing-wave">
          <div class="ai-typing-dot"></div>
          <div class="ai-typing-dot"></div>
          <div class="ai-typing-dot"></div>
        </div>
      </div>
    `;
        messagesEl.appendChild(waveEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        setTimeout(()=>{
            waveEl.remove();
            const response = processAIQuery(text);
            postAIMessage(response);
        }, 850 + Math.random() * 400);
    }
    sendBtn.addEventListener('click', ()=>executeQuery(input.value));
    input.addEventListener('keydown', (e)=>{
        if (e.key === 'Enter') executeQuery(input.value);
    });
    function postAIMessage(html) {
        const msg = document.createElement('div');
        msg.className = 'ai-msg system';
        msg.innerHTML = `<div class="ai-msg-bubble">${html}</div>`;
        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }
    function postUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'ai-msg user';
        msg.innerHTML = `<div class="ai-msg-bubble">${text}</div>`;
        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }
    function processAIQuery(raw) {
        const q = raw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        for (const item of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aria$2d$responses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ariaResponses"]){
            if (item.keywords.some((k)=>q.includes(k))) {
                return item.response;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aria$2d$responses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ariaFallback"];
    }
    function renderSuggestions() {
        promptsEl.innerHTML = '';
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aria$2d$responses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ariaSuggestions"].forEach((s)=>{
            const chip = document.createElement('button');
            chip.className = 'ai-prompt-chip';
            chip.textContent = s;
            chip.addEventListener('click', ()=>{
                executeQuery(s);
            });
            promptsEl.appendChild(chip);
        });
    }
}
// ─── 13. Command Palette (Ctrl+K) ───
function initCommandPalette() {
    const overlay = document.getElementById('palette-overlay');
    const input = document.getElementById('palette-input');
    const results = document.getElementById('palette-results');
    const commands = [
        {
            icon: '👤',
            label: 'Access Identity Core (ID-CORE)',
            action: ()=>navigateTo('identity')
        },
        {
            icon: '⚙️',
            label: 'Open Tech Matrix & Synapse Graph (T-MTX)',
            action: ()=>navigateTo('matrix')
        },
        {
            icon: '📡',
            label: 'Inspect Tactical Mission Log (M-LOG)',
            action: ()=>navigateTo('missions')
        },
        {
            icon: '🚀',
            label: 'Unlock Project Vault Dossiers (P-VLT)',
            action: ()=>navigateTo('vault')
        },
        {
            icon: '🏆',
            label: 'Verify Knowledge Hub Credentials (K-HUB)',
            action: ()=>navigateTo('knowledge')
        },
        {
            icon: '🏠',
            label: 'Return to Central Command (HQ)',
            action: ()=>navigateTo('hq')
        },
        {
            icon: '🤖',
            label: 'Engage NEXUS AI Assistant',
            action: ()=>document.getElementById('ai-toggle').click()
        },
        {
            icon: '📄',
            label: 'Download Executive Briefing [CV]',
            action: ()=>alert('Executive Briefing CV download initiated.')
        },
        {
            icon: '🥚',
            label: 'Execute Easter Egg Protocol',
            action: ()=>{
                unlockAchievement('code_breaker');
                showToast('🥚', 'CIPHER SOLVED', 'Secret clearance granted via Command Terminal!');
            }
        }
    ];
    let selectedIdx = 0;
    function openPalette() {
        overlay.classList.add('open');
        input.value = '';
        input.focus();
        renderCmds(commands);
    }
    function closePalette() {
        overlay.classList.remove('open');
    }
    function renderCmds(list) {
        results.innerHTML = '<div class="palette-group-tag">COMMAND DIRECTIVES</div>';
        selectedIdx = 0;
        list.forEach((cmd, idx)=>{
            const row = document.createElement('div');
            row.className = `palette-row-item ${idx === 0 ? 'active-choice' : ''}`;
            row.innerHTML = `
        <span class="palette-row-icon">${cmd.icon}</span>
        <span class="palette-row-label">${cmd.label}</span>
      `;
            row.addEventListener('click', ()=>{
                cmd.action();
                closePalette();
            });
            results.appendChild(row);
        });
    }
    document.addEventListener('keydown', (e)=>{
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            overlay.classList.contains('open') ? closePalette() : openPalette();
        }
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            closePalette();
        }
    });
    document.getElementById('nav-palette-btn').addEventListener('click', openPalette);
    overlay.addEventListener('click', (e)=>{
        if (e.target === overlay) closePalette();
    });
    input.addEventListener('input', ()=>{
        const q = input.value.toLowerCase();
        const filtered = commands.filter((c)=>c.label.toLowerCase().includes(q));
        renderCmds(filtered);
    });
    input.addEventListener('keydown', (e)=>{
        const rows = results.querySelectorAll('.palette-row-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIdx = Math.min(selectedIdx + 1, rows.length - 1);
            rows.forEach((r, i)=>r.classList.toggle('active-choice', i === selectedIdx));
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIdx = Math.max(selectedIdx - 1, 0);
            rows.forEach((r, i)=>r.classList.toggle('active-choice', i === selectedIdx));
        }
        if (e.key === 'Enter') {
            rows[selectedIdx]?.click();
        }
    });
}
// ─── 14. Easter Eggs (Konami Code) ───
function initEasterEggs() {
    const konami = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ];
    let cursor = 0;
    document.addEventListener('keydown', (e)=>{
        if (e.key === konami[cursor]) {
            cursor++;
            if (cursor === konami.length) {
                cursor = 0;
                unlockAchievement('konami_master');
                showToast('🎮', 'CYBER OVERDRIVE UNLOCKED', '↑↑↓↓←→←→BA Sequence Recognized!');
                runMatrixRainEffect();
            }
        } else {
            cursor = 0;
        }
    });
}
function runMatrixRainEffect() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;background:rgba(4,4,10,0.85);';
    document.body.appendChild(container);
    for(let i = 0; i < 45; i++){
        const stream = document.createElement('div');
        stream.style.cssText = `
      position:absolute;
      top:-100%;
      left:${Math.random() * 100}%;
      font-family:var(--font-mono);
      font-size:13px;
      color:var(--tm-green);
      white-space:nowrap;
      animation: matrixRain ${2 + Math.random() * 2.5}s linear ${Math.random() * 1.5}s;
      opacity:${0.4 + Math.random() * 0.6};
    `;
        let chars = '';
        for(let j = 0; j < 25; j++){
            chars += String.fromCharCode(0x30A0 + Math.random() * 96) + '<br>';
        }
        stream.innerHTML = chars;
        container.appendChild(stream);
    }
    setTimeout(()=>container.remove(), 5500);
}
// ─── 15. System Initialization ───
function initApp() {
    initNavigation();
    initTypewriter();
    initCounters();
    initParticles();
    initHud();
    initAIAssistant();
    initCommandPalette();
    initEasterEggs();
    // First authorization unlock
    unlockAchievement('first_contact');
    // Update badge counter
    const countEl = document.getElementById('ach-count');
    if (countEl) countEl.textContent = state.achievements.length;
}
function startNexusOS() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    initBoot();
}
if ("TURBOPACK compile-time truthy", 1) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        startNexusOS();
    } else {
        document.addEventListener('DOMContentLoaded', startNexusOS);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1zxk-hq._.js.map