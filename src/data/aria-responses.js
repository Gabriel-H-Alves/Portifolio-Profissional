// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — NEXUS AI Knowledge Base
// ═══════════════════════════════════════════════════════

export const ariaGreeting = `Greetings, Operator. I am <span class="highlight">NEXUS AI</span> — the cognitive copilot of Gabriel Henrique's Career Command Center. I can provide real-time intelligence on his engineering background, neural skill matrix, classified project vaults, or executive briefs. What directive would you like to execute?`;

export const ariaSuggestions = [
  'Qual é a principal stack?',
  'Quais projetos utilizam IA?',
  'Experiências com automação?',
  'Elevator Pitch executivo',
  'Certificações verificadas',
  'Canais de contato direto'
];

export const ariaResponses = [
  {
    keywords: ['stack', 'tecnologia', 'tech', 'linguagem', 'skill', 'domina', 'sabe'],
    response: `Gabriel possui uma stack polivalente e focada em alta performance:
    <br><br>
    • <span class="highlight">Core AI & Backend:</span> Python, TensorFlow, PyTorch, LangChain, FastAPI, C++.<br>
    • <span class="highlight">Frontend & Full Stack:</span> TypeScript, React, Next.js, Node.js, Design Systems.<br>
    • <span class="highlight">Hardware & Automação:</span> Arduino, ESP32, ROS, MQTT, RPA.<br>
    • <span class="highlight">Cloud & DevOps:</span> AWS, Docker, CI/CD Actions, Linux, PostgreSQL, Redis.<br><br>
    Deseja inspecionar o grafo neural no módulo <strong>TECH MATRIX</strong>?`
  },
  {
    keywords: ['ia', 'inteligencia', 'ai', 'machine learning', 'ml', 'deep learning', 'llm', 'rag', 'visao'],
    response: `Na vertical de <strong>Inteligência Artificial</strong>, Gabriel atua com:
    <br><br>
    1. <span class="highlight">Computer Vision:</span> CNNs customizadas e aceleradas via CUDA/TensorRT (ex: <em>Neural Vision System</em> operando a 60+ FPS).<br>
    2. <span class="highlight">LLM & Multi-Agent Systems:</span> RAGs avançados, tool-calling e automação de decisões complexas com LangChain e pgvector.<br>
    3. <span class="highlight">Certificação:</span> Google TensorFlow Developer & Stanford ML Specialization.`
  },
  {
    keywords: ['automacao', 'robotica', 'hardware', 'iot', 'arduino', 'rpi', 'rpa', 'ros'],
    response: `Em <strong>Automação & Robótica</strong>, os destaques são:
    <br><br>
    • <span class="highlight">Smart Automation Hub:</span> Orquestração de 50+ robôs RPA e microcontroladores IoT via MQTT.<br>
    • <span class="highlight">RoboGuard Sentinel:</span> Drone terrestre autônomo com navegação SLAM e mapeamento LiDAR via ROS.<br>
    • <span class="highlight">Firmware:</span> Programação C/C++ para Arduino e nós de sensoriamento industrial.`
  },
  {
    keywords: ['projeto', 'projetos', 'vault', 'portfolio', 'trabalho', 'cases'],
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
    keywords: ['experiencia', 'carreira', 'tempo', 'trabalhou', 'empresas', 'timeline', 'missao'],
    response: `Gabriel acumula <strong>5+ anos</strong> de experiência em engenharia de sistemas e IA:
    <br><br>
    • <span class="highlight">2024 — Presente:</span> Lead AI & Distributed Systems Architect na <em>TechCorp Innovation</em>.<br>
    • <span class="highlight">2022 — 2023:</span> Senior Full Stack & ML Engineer na <em>DataFlow Systems</em>.<br>
    • <span class="highlight">2021 — 2022:</span> Automation & Embedded Hardware Engineer na <em>AutomateTech</em>.<br>
    • <span class="highlight">2020 — 2021:</span> Software Development Specialist na <em>StartupLab</em>.`
  },
  {
    keywords: ['pitch', 'elevator', 'resumo', 'quem e', 'apresentacao', 'sobre'],
    response: `<strong>Executive Elevator Brief:</strong><br><br>
    Gabriel Henrique é um <span class="highlight">Engenheiro e Arquiteto de Sistemas com foco em IA e Automação</span>. Especialista em traduzir problemas de alta complexidade em arquiteturas elegantes e escaláveis — desde redes neurais em produção e sistemas autônomos multi-agente até hardware embarcado e microsserviços de baixa latência. Já entregou 42+ projetos e lidera squads técnicas com mentalidade orientada a impacto mensurável.`
  },
  {
    keywords: ['certificacao', 'certificado', 'cert', 'cursos', 'formacao', 'diploma'],
    response: `O <strong>KNOWLEDGE HUB</strong> contém certificações verificadas por entidades globais:
    <br><br>
    🏆 <strong>AWS Certified Solutions Architect</strong><br>
    🏆 <strong>Google TensorFlow Developer</strong><br>
    🏆 <strong>Stanford Machine Learning Specialization</strong><br>
    🏆 <strong>Docker Certified Associate & CKA (Kubernetes)</strong><br>
    🏆 <strong>Meta Full-Stack Professional</strong>`
  },
  {
    keywords: ['contato', 'falar', 'email', 'linkedin', 'github', 'contratar', 'hire'],
    response: `Você pode estabelecer conexão com Gabriel através dos seguintes canais:
    <br><br>
    • <span class="highlight">LinkedIn:</span> linkedin.com/in/gabrielhenrique<br>
    • <span class="highlight">GitHub:</span> github.com<br>
    • <span class="highlight">Status:</span> Aberto a propostas de liderança técnica, projetos de IA e posições de alto impacto.`
  }
];

export const ariaFallback = `Comando recebido. Não localizei dados específicos com esses parâmetros, mas posso processar consultas sobre: <span class="highlight">Stack Tecnológica</span>, <span class="highlight">Projetos de IA</span>, <span class="highlight">Automação & Robótica</span>, <span class="highlight">Trajetória Profissional</span> ou <span class="highlight">Elevator Pitch</span>. Qual seção deseja inspecionar?`;
