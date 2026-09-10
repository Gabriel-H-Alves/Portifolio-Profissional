// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Main Application Orchestrator
// ═══════════════════════════════════════════════════════

import { gsap } from 'gsap';

// Styles
import './styles/index.css';
import './styles/animations.css';
import './styles/boot.css';
import './styles/hub.css';
import './styles/profile.css';
import './styles/skills.css';
import './styles/timeline.css';
import './styles/projects.css';
import './styles/achievements.css';
import './styles/aria.css';
import './styles/palette.css';

// Data
import { profile } from './data/profile.js';
import { skillCategories, skills, neuralLinks } from './data/skills.js';
import { timeline } from './data/timeline.js';
import { projects } from './data/projects.js';
import { certifications, visitorAchievements } from './data/achievements.js';
import { ariaGreeting, ariaSuggestions, ariaResponses, ariaFallback } from './data/aria-responses.js';

// Sound Design
import { 
  playRootAccessSound, 
  playRealityEngineShutdownSound, 
  startMatrixDroneSound, 
  stopMatrixDroneSound, 
  playCinematicVoice, 
  playGlitchSound, 
  playRealityRebuildingSound 
} from './utils/sound-design.js';

// ─── Application State ───
const state = {
  currentSection: 'hq',
  visitedSections: new Set(['hq']),
  vaultProjectsViewed: 0,
  aiInquiries: 0,
  matrixInteractions: 0,
  achievements: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('nexus-v3-achievements') || '[]') : [],
  booted: typeof window !== 'undefined' ? sessionStorage.getItem('nexus-v3-booted') === 'true' : false
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
    { text: 'Core Quantum Kernel 3.0', code: 'INITIALIZED' },
    { text: 'Neural Synaptic Matrix Subsystems', code: 'ONLINE' },
    { text: 'Tactical Mission Log Telemetry', code: 'LOADED' },
    { text: 'Project Vault Cryptographic Shards', code: 'UNLOCKED' },
    { text: 'NEXUS AI Cognitive Neural Copilot', code: 'ACTIVE' },
    { text: 'Command Clearance Level 5 [ALPHA]', code: 'GRANTED' }
  ];

  const bootLinesEl = document.getElementById('boot-lines');
  const progressEl = document.getElementById('boot-progress');
  const percentEl = document.getElementById('boot-percent');
  const enterBtn = document.getElementById('boot-enter');

  // GSAP Boot Intro Timeline
  const tl = gsap.timeline();

  tl.to('.boot-logo', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
    .to('.boot-sub', { opacity: 1, duration: 0.4 }, '-=0.2')
    .to('#boot-progress-wrap', { opacity: 1, duration: 0.3 }, '-=0.1');

  // Append system lines sequentially
  lines.forEach((line, idx) => {
    setTimeout(() => {
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

      gsap.to(lineEl, { opacity: 1, x: 0, duration: 0.25, ease: 'power1.out' });

      const pct = Math.round(((idx + 1) / lines.length) * 100);
      progressEl.style.width = pct + '%';
      percentEl.textContent = pct + '%';

      if (idx === lines.length - 1) {
        setTimeout(() => {
          gsap.to(enterBtn, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' });
        }, 200);
      }
    }, 400 + idx * 300);
  });

  function completeBoot() {
    if (state.booted) return;
    state.booted = true;
    sessionStorage.setItem('nexus-v3-booted', 'true');

    gsap.to(bootScreen, {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
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
  document.querySelectorAll('[data-navigate]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.dataset.navigate;
      navigateTo(target);
    });
  });

  // Mobile menu toggle
  const mobToggle = document.getElementById('nav-mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  mobToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Direct AI assistant trigger button in HQ
  document.getElementById('hq-mod-ai-btn')?.addEventListener('click', () => {
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
    gsap.to(currentEl, {
      opacity: 0,
      y: -15,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        currentEl.classList.remove('active');
        currentEl.style.display = 'none';

        // Prepare and animate in target
        targetEl.style.display = (sectionId === 'hq') ? 'flex' : 'block';
        targetEl.classList.add('active');

        gsap.fromTo(targetEl, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
        );

        state.currentSection = sectionId;
        state.visitedSections.add(sectionId);

        // Update nav active states
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav-link[data-navigate="${sectionId}"]`)?.classList.add('active');
        document.getElementById('nav-links').classList.remove('open');

        // Trigger module specific initializations
        if (sectionId === 'identity') initIdentityCore();
        if (sectionId === 'matrix') initTechMatrix();
        if (sectionId === 'missions') initMissionLog();
        if (sectionId === 'vault') initProjectVault();
        if (sectionId === 'knowledge') initKnowledgeHub();

        // Contextual AI Companion Reactions (Subtle & Natural for NEX)
        if (window.nexusCompanion) {
          if (sectionId === 'vault') {
            window.nexusCompanion.say('Encontrei alguns projetos interessantes por aqui.', 4000);
          } else if (sectionId === 'matrix') {
            window.nexusCompanion.say('Esta seção cresce constantemente.', 4000);
          } else if (sectionId === 'knowledge') {
            window.nexusCompanion.say('Gabriel está estudando bastante IA e Cybersegurança ultimamente.', 4200);
          }
        }

        // Check Explorer Achievement
        const allSections = ['hq', 'identity', 'matrix', 'missions', 'vault', 'knowledge'];
        if (allSections.every(s => state.visitedSections.has(s))) {
          unlockAchievement('explorer');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}

// ─── 3. Dynamic Typewriter ───
function initTypewriter() {
  const titles = profile.titles;
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
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power3.out',
      onUpdate: () => {
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
  let mouse = { x: null, y: null };

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  function create() {
    particles = [];
    const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 11000));
    for (let i = 0; i < count; i++) {
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

    for (let i = 0; i < particles.length; i++) {
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
      for (let j = i + 1; j < particles.length; j++) {
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

  window.addEventListener('resize', () => {
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
    { t: '17:00', text: 'quantum-kernel: v3.0 stable runtime active' },
    { t: '16:45', text: 'neural-sync: 24 tech nodes linked successfully' },
    { t: '15:20', text: 'vault-auth: credentials verified by AWS / Google' },
    { t: '14:10', text: 'ai-copilot: prompt embeddings indexed in memory' }
  ];

  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'feed-row';
    row.innerHTML = `<span class="feed-t">${item.t}</span><span class="feed-d"></span><span>${item.text}</span>`;
    feed.appendChild(row);
  });
}

// ─── 7. Identity Core (ID-CORE) Module & Interactive Terminal ───
let identityInited = false;
let terminalHistory = [];
let terminalHistoryIdx = -1;

function initIdentityCore() {
  if (identityInited) return;
  identityInited = true;

  // XP Fill
  setTimeout(() => {
    const xpFill = document.getElementById('identity-xp-fill');
    if (xpFill) xpFill.style.width = profile.xp + '%';
  }, 200);

  // Indicators
  const indicatorsEl = document.getElementById('identity-indicators');
  const items = [
    { label: 'CLEARANCE', val: profile.clearance, icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    { label: 'STATUS', val: profile.operationalStatus, icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>' },
    { label: 'LOCATION', val: profile.location, icon: '<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
    { label: 'FORMATION', val: profile.formation, icon: '<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' }
  ];

  indicatorsEl.innerHTML = '';
  items.forEach(it => {
    const div = document.createElement('div');
    div.className = 'id-indicator';
    div.innerHTML = `${it.icon} <span>${it.label}</span> <span class="id-indicator-val">${it.val}</span>`;
    indicatorsEl.appendChild(div);
  });

  // Engineering Pillars
  const pillarsEl = document.getElementById('identity-pillars');
  pillarsEl.innerHTML = '';
  profile.dna.forEach(p => {
    const card = document.createElement('div');
    card.className = 'id-spec';
    card.innerHTML = `
      <div class="id-spec-icon">${p.icon}</div>
      <div class="id-spec-name">${p.title}</div>
      <div class="id-spec-desc">${p.desc}</div>
    `;
    pillarsEl.appendChild(card);
  });

  // Initialize Interactive Terminal Shell
  initInteractiveTerminal();
}

function initInteractiveTerminal() {
  const bioEl = document.getElementById('bio-terminal');
  if (!bioEl) return;

  bioEl.innerHTML = `
    <div id="terminal-output">
      <div class="terminal-banner">
        <span class="kw">// NEXUS OS INTERACTIVE SHELL v3.0</span><br>
        <span class="cmt">// Digite <span class="str">'help'</span> para listar os comandos ou explore comandos secretos.</span>
      </div>
    </div>
    <div class="terminal-input-wrap" id="terminal-active-line">
      <span class="prompt">guest@nexus-core:~$ </span>
      <input class="terminal-input" id="terminal-cmd-input" type="text" placeholder="digite um comando..." autocomplete="off" spellcheck="false" />
    </div>
  `;

  // Type initial bio into output buffer
  const outputEl = document.getElementById('terminal-output');
  let initialBioHtml = '<div class="terminal-output-block">';
  profile.bio.forEach(item => {
    let cls = '';
    if (item.type === 'comment') cls = 'cmt';
    else if (item.type === 'keyword') cls = 'kw';
    else if (item.type === 'string') cls = 'str';
    else if (item.type === 'property') cls = 'kw';

    if (item.type === 'empty') {
      initialBioHtml += '<br>';
    } else {
      initialBioHtml += `<span class="${cls}">${item.text}</span>`;
      if (['comment', 'normal', 'string'].includes(item.type)) {
        initialBioHtml += '<br>';
      }
    }
  });
  initialBioHtml += '</div>';

  const bioBlock = document.createElement('div');
  bioBlock.innerHTML = initialBioHtml;
  outputEl.appendChild(bioBlock);

  const inputEl = document.getElementById('terminal-cmd-input');
  if (!inputEl) return;

  // Auto focus input when clicking anywhere inside terminal
  bioEl.addEventListener('click', () => {
    inputEl.focus();
  });

  // Command History Navigation
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputEl.value;
      inputEl.value = '';
      if (rawCmd.trim()) {
        terminalHistory.push(rawCmd);
        terminalHistoryIdx = terminalHistory.length;
        executeTerminalCommand(rawCmd.trim());
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (terminalHistory.length > 0 && terminalHistoryIdx > 0) {
        terminalHistoryIdx--;
        inputEl.value = terminalHistory[terminalHistoryIdx] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (terminalHistoryIdx < terminalHistory.length - 1) {
        terminalHistoryIdx++;
        inputEl.value = terminalHistory[terminalHistoryIdx] || '';
      } else {
        terminalHistoryIdx = terminalHistory.length;
        inputEl.value = '';
      }
    }
  });
}

function printTerminalOutput(htmlContent) {
  const outputEl = document.getElementById('terminal-output');
  const bioEl = document.getElementById('bio-terminal');
  if (!outputEl || !bioEl) return;

  const block = document.createElement('div');
  block.className = 'terminal-output-block';
  block.innerHTML = htmlContent;
  outputEl.appendChild(block);

  gsap.fromTo(block, 
    { opacity: 0, y: 4 }, 
    { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
  );

  bioEl.scrollTop = bioEl.scrollHeight;
}

// ─── Identity & Client Environment Detection ───
let awaitingVisitorName = false;

function getVisitorName() {
  return typeof window !== 'undefined' ? (localStorage.getItem('nexus_visitor_name') || '') : '';
}

function setVisitorName(name) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('nexus_visitor_name', name);
  }
}

function getClientEnv() {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  let browser = 'Chrome (Blink)';
  if (ua.includes('Firefox')) browser = 'Mozilla Firefox';
  else if (ua.includes('SamsungBrowser')) browser = 'Samsung Internet';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
  else if (ua.includes('Edge') || ua.includes('Edg')) browser = 'Microsoft Edge';
  else if (ua.includes('Chrome')) browser = 'Google Chrome';
  else if (ua.includes('Safari')) browser = 'Apple Safari';

  let os = 'Windows NT 10.0';
  if (ua.includes('Win')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS Darwin';
  else if (ua.includes('Linux')) os = 'Linux Kernel';
  else if (ua.includes('Android')) os = 'Android OS';
  else if (ua.includes('like Mac')) os = 'iOS';

  const lang = typeof navigator !== 'undefined' ? (navigator.language || 'pt-BR') : 'pt-BR';
  const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '1920x1080';

  return { browser, os, lang, screenRes };
}

function executeTerminalCommand(cmdRaw) {
  const cmd = cmdRaw.toLowerCase().trim();
  const outputEl = document.getElementById('terminal-output');
  const bioEl = document.getElementById('bio-terminal');

  // Echo user command
  const echoBlock = document.createElement('div');
  echoBlock.className = 'terminal-output-block';
  echoBlock.innerHTML = `<span class="prompt">guest@nexus-core:~$ </span><span class="terminal-echo">${escapeHtml(cmdRaw)}</span>`;
  outputEl.appendChild(echoBlock);

  // Check if we are awaiting visitor name for whoami()
  if (awaitingVisitorName) {
    const rawName = cmdRaw.trim();
    if (rawName) {
      setVisitorName(rawName);
      awaitingVisitorName = false;
      printTerminalOutput(`
        <div class="terminal-banner">
          <div class="terminal-alert-success font-bold">IDENTIDADE REGISTRADA</div>
          <div>Bem-vindo, <span class="str font-bold">${escapeHtml(rawName)}</span>.</div>
        </div>
      `);
      unlockAchievement('first_contact');
      showToast('👤', 'IDENTIDADE REGISTRADA', `Bem-vindo ao NEXUS OS, ${rawName}!`);
      
      // NEX remembers and speaks to visitor
      if (window.nexusCompanion) {
        window.nexusCompanion.say(`Olá ${rawName}! É um prazer ter você aqui.`, 4500);
      }
      return;
    }
  }

  // 1. WHOAMI / WHOAMI() COMMAND
  if (cmd === 'whoami' || cmd === 'whoami()') {
    const currentName = getVisitorName();
    const env = getClientEnv();

    if (!currentName) {
      awaitingVisitorName = true;
      printTerminalOutput(`
        <div class="terminal-banner">
          <div class="terminal-alert-warn font-bold">IDENTIDADE NÃO REGISTRADA</div><br>
          <div>Analisando ambiente...</div>
          <div class="terminal-alert-success">✓ Navegador detectado: ${env.browser}</div>
          <div class="terminal-alert-success">✓ Sistema detectado: ${env.os}</div>
          <div class="terminal-alert-success">✓ Resolução detectada: ${env.screenRes}</div>
          <div class="terminal-alert-success">✓ Idioma detectado: ${env.lang}</div>
          <br>
          <div class="kw font-bold">Informe um identificador para personalizar a experiência:</div>
          <div class="cmt">// Digite seu nome ou codinome e pressione Enter</div>
        </div>
      `);
      return;
    } else {
      if (window.nexusCompanion) {
        window.nexusCompanion.say(`Bem-vindo de volta, ${currentName}.`, 4000);
      }
      printTerminalOutput(`
        <div class="terminal-banner">
          <span class="kw font-bold">══════════════════════════════════════════════════</span><br>
          <span class="str font-bold">IDENTIDADE ATIVA</span><br><br>
          <div><span class="kw">Nome:</span>      <span class="str font-bold">${escapeHtml(currentName)}</span></div>
          <div><span class="kw">Navegador:</span> <span class="str">${env.browser}</span></div>
          <div><span class="kw">Idioma:</span>    <span class="str">${env.lang}</span></div>
          <div><span class="kw">Sistema:</span>   <span class="str">${env.os}</span></div>
          <div><span class="kw">Resolução:</span> <span class="str">${env.screenRes}</span></div>
          <div><span class="kw">Status:</span>    <span class="terminal-alert-success font-bold">ONLINE</span></div>
          <span class="kw font-bold">══════════════════════════════════════════════════</span>
        </div>
      `);
      return;
    }
  }

  // WHOAMI RESET
  if (cmd === 'whoami reset' || cmd === 'whoami -r') {
    if (typeof window !== 'undefined') localStorage.removeItem('nexus_visitor_name');
    printTerminalOutput('<div class="terminal-alert-warn">Identificador de visitante redefinido. Digite "whoami()" para registrar novo perfil.</div>');
    return;
  }

  // 2. HELP COMMAND
  if (cmd === 'help') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">COMANDOS DISPONÍVEIS</span><br><br>
        <div><span class="terminal-help-cmd">help</span> <span class="terminal-help-desc">Lista todas as diretivas documentadas</span></div>
        <div><span class="terminal-help-cmd">whoami()</span> <span class="terminal-help-desc">Identificação de sessão e telemetria do operador</span></div>
        <div><span class="terminal-help-cmd">about</span> <span class="terminal-help-desc">Dossiê profissional e manifesto de Gabriel Henrique</span></div>
        <div><span class="terminal-help-cmd">skills</span> <span class="terminal-help-desc">Matriz de competências técnicas e stacks</span></div>
        <div><span class="terminal-help-cmd">projects</span> <span class="terminal-help-desc">Sistemas em produção e arquiteturas do Vault</span></div>
        <div><span class="terminal-help-cmd">github</span> <span class="terminal-help-desc">Repositórios, contribuições e métricas open-source</span></div>
        <div><span class="terminal-help-cmd">research</span> <span class="terminal-help-desc">Áreas de estudo em IA, Visão e Sistemas Autônomos</span></div>
        <div><span class="terminal-help-cmd">cyber</span> <span class="terminal-help-desc">Trilhas de especialização em Desenvolvimento Seguro</span></div>
        <div><span class="terminal-help-cmd">certifications</span> <span class="terminal-help-desc">Credenciais técnicas oficiais verificadas</span></div>
        <div><span class="terminal-help-cmd">stats</span> <span class="terminal-help-desc">Métricas operacionais e nível do operador</span></div>
        <div><span class="terminal-help-cmd">contact</span> <span class="terminal-help-desc">Canais diretos de comunicação e networking</span></div>
        <div><span class="terminal-help-cmd">clear</span> <span class="terminal-help-desc">Limpa o buffer visual do terminal</span></div>
        <br>
        <div class="cmt">// 🔒 4 Diretivas Secretas ocultas no core: explore comandos reais (Python, Sudo, Git, NPM)...</div>
      </div>
    `);
    return;
  }

  // 3. ABOUT COMMAND
  if (cmd === 'about') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">══════════════════════════════════════════════════════════════════</span><br>
        <span class="str">DOSSIÊ DO OPERADOR: GABRIEL HENRIQUE ALVES ROCHA</span><br>
        <span class="kw">Função:</span> ${profile.title}<br>
        <span class="kw">Nível:</span> LEVEL ${profile.level} // ${profile.clearance}<br>
        <span class="kw">Base:</span> ${profile.location}<br><br>
        <span class="kw">Diretriz:</span><br>
        <span class="str">"Solucionar problemas de alta complexidade com engenharia elegante e arquitetura escalável."</span><br><br>
        <span class="kw">Especializações Centrais:</span><br>
        • IA Generativa & Agentes Autônomos (LangChain, RAG, Fine-Tuning)<br>
        • Arquitetura Full-Stack & Microsserviços de Alta Performance<br>
        • Robótica Embarcada & Automação IoT (ROS, ESP32, MQTT)<br>
        • Engenharia Defensiva de Software & DevSecOps<br>
        <span class="kw">══════════════════════════════════════════════════════════════════</span>
      </div>
    `);
    return;
  }

  // 4. SKILLS COMMAND
  if (cmd === 'skills') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">TECH MATRIX // CLUSTERS DE PROFICIÊNCIA TÉCNICA</span><br><br>
        <div><span class="str">[IA & Deep Learning]</span>       Python • TensorFlow • PyTorch • OpenCV • LangChain • Scikit-Learn</div>
        <div><span class="str">[Full Stack & Web]</span>         TypeScript • React • Next.js • Modern JS • CSS3 Design Systems</div>
        <div><span class="str">[Backend & APIs]</span>           Node.js • FastAPI • Express • C / C++ • Distributed Services</div>
        <div><span class="str">[Cloud & DevOps]</span>           Docker • AWS Cloud • CI/CD Actions • Linux Kernel • Kubernetes</div>
        <div><span class="str">[Robótica & Hardware]</span>      Arduino • Raspberry Pi • ROS (Robot OS) • MQTT • Telemetria IoT</div>
        <div><span class="str">[Bancos de Dados]</span>          PostgreSQL • Redis Cache • MongoDB • Event Streams</div>
        <div><span class="str">[Segurança em Dev]</span>         OWASP Top 10 • Secure Coding • SAST/DAST • Threat Modeling</div>
      </div>
    `);
    return;
  }

  // 5. PROJECTS COMMAND
  if (cmd === 'projects') {
    let projList = '<div class="terminal-banner"><span class="kw">PROJECT VAULT // SISTEMAS DEPLOYADOS</span><br><br>';
    projects.forEach(p => {
      projList += `<div><span class="str">• [${p.id}] ${p.name}</span> <span class="cmt">// (${p.tech.slice(0, 3).join(', ')})</span><br><span class="terminal-help-desc">  ${p.desc}</span></div><br>`;
    });
    projList += `<span class="cmt">Dica: Acesse o módulo Project Vault para inspeção interativa completa.</span></div>`;
    printTerminalOutput(projList);
    return;
  }

  // 6. GITHUB COMMAND
  if (cmd === 'github') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">GITHUB INTEL & OPEN SOURCE REPOSITORIES</span><br><br>
        <div><span class="kw">Operador:</span> Gabriel-H-Alves</div>
        <div><span class="kw">Repositórios Públicos:</span> 40+</div>
        <div><span class="kw">Linguagens:</span> Python, TypeScript, C++, JavaScript</div>
        <div><span class="kw">Foco:</span> Agentes Autônomos, Visão Computacional, Automação & Web</div>
        <div><span class="str">URL:</span> <a href="https://github.com/Gabriel-H-Alves" target="_blank" class="str" style="text-decoration:underline;">https://github.com/Gabriel-H-Alves</a></div>
      </div>
    `);
    return;
  }

  // 7. RESEARCH COMMAND
  if (cmd === 'research') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">LINHAS DE PESQUISA & ESTUDOS CONTÍNUOS</span><br><br>
        <div>1. <span class="str">Sistemas Multi-Agentes Hierárquicos</span> — Decomposição autônoma de tarefas complexas via LangChain e state machines.</div>
        <div>2. <span class="str">Visão Computacional na Borda</span> — Modelos CNN ultraleves com inferência sub-10ms em CUDA/Jetson.</div>
        <div>3. <span class="str">RAG Avançado com Grafos</span> — Indexação vetorial híbrida e re-ranking contextual de documentos.</div>
        <div>4. <span class="str">Engenharia Defensiva de Software</span> — Blindagem de microsserviços e sanitização em tempo de execução.</div>
      </div>
    `);
    return;
  }

  // 8. CYBER COMMAND
  if (cmd === 'cyber') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">CYBER LAB // TRILHAS DE DESENVOLVIMENTO SEGURO</span><br><br>
        <div>• <span class="str">OWASP Top 10:</span> Mitigações de Broken Access Control, Cryptographic Failures, Injeções e SSRF.</div>
        <div>• <span class="str">Secure Coding:</span> Validação estrita de tipos (Zod/Pydantic), Princípio do Menor Privilégio e SAST.</div>
        <div>• <span class="str">Web Security:</span> Políticas CSP com nonces, HSTS, OAuth 2.0 / PKCE e Cookies HttpOnly.</div>
        <div>• <span class="str">Cloud Security:</span> Hardening de contêineres Docker (Distroless), IAM restritivo e Secrets Mgmt.</div>
        <div>• <span class="str">Threat Intelligence:</span> Modelagem STRIDE, taxonomia MITRE ATT&CK e monitoramento de CVEs.</div>
      </div>
    `);
    return;
  }

  // 9. CERTIFICATIONS COMMAND
  if (cmd === 'certifications') {
    let certsHtml = '<div class="terminal-banner"><span class="kw">CREDENCIAIS TÉCNICAS VERIFICADAS</span><br><br>';
    certifications.forEach(c => {
      certsHtml += `<div><span class="str">[${c.tier.toUpperCase()}]</span> <span class="kw">${c.name}</span> <span class="cmt">// ${c.issuer} (${c.date})</span></div>`;
    });
    certsHtml += '</div>';
    printTerminalOutput(certsHtml);
    return;
  }

  // 10. CONTACT COMMAND
  if (cmd === 'contact') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">CANAIS DIRETOS DE CONTATO & NETWORKING</span><br><br>
        <div><span class="kw">Email:</span>    <span class="str">gabrielhenrique.alvesrocha@gmail.com</span></div>
        <div><span class="kw">GitHub:</span>   <a href="https://github.com/Gabriel-H-Alves" target="_blank" class="str">https://github.com/Gabriel-H-Alves</a></div>
        <div><span class="kw">LinkedIn:</span> <a href="https://linkedin.com/in/gabriel-henrique-alves-rocha" target="_blank" class="str">https://linkedin.com/in/gabriel-henrique-alves-rocha</a></div>
        <div><span class="kw">Local:</span>    São Paulo, Brasil [Disponível para projetos globais]</div>
      </div>
    `);
    return;
  }

  // 11. STATS COMMAND
  if (cmd === 'stats') {
    printTerminalOutput(`
      <div class="terminal-banner">
        <span class="kw">══════════════════════════════════════════════════════</span><br>
        <span class="str font-bold">GABRIEL HENRIQUE ALVES ROCHA</span><br><br>
        <span class="kw">Especialização:</span><br>
        Desenvolvimento de Software & Arquitetura de IA<br><br>
        <span class="kw">Foco Atual:</span><br>
        Inteligência Artificial • Automação • Cybersegurança<br><br>
        <span class="kw">Nível:</span><br>
        NÍVEL ${profile.level} // SENIOR ARCHITECT<br><br>
        <span class="kw">Projetos:</span><br>
        ${profile.stats.projectsDelivered}+ Entregues em Produção<br><br>
        <span class="kw">Tecnologias:</span><br>
        ${profile.stats.technologies} Tecnologias Dominadas<br>
        <span class="kw">══════════════════════════════════════════════════════</span>
      </div>
    `);
    return;
  }

  // 12. CLEAR COMMAND
  if (cmd === 'clear') {
    outputEl.innerHTML = '';
    return;
  }

  // ─── CINEMATIC EASTER EGGS ───

  // SUPREME EASTER EGG: sudo rm -rf reality
  if (cmd === 'sudo rm -rf reality') {
    runRealityDisintegrationEasterEgg();
    return;
  }

  // AWAKEN: python awaken.py
  if (cmd === 'python awaken.py' || cmd === 'awaken.py') {
    runAwakenEasterEgg();
    return;
  }

  // FUTURE: git checkout future
  if (cmd === 'git checkout future' || cmd === 'checkout future') {
    runFutureTimelineEasterEgg();
    return;
  }

  // TRANSCENDENCE: npm run transcendence
  if (cmd === 'npm run transcendence' || cmd === 'transcendence') {
    runTranscendenceEasterEgg();
    return;
  }

  // SECRET: MATRIX MODE (neo / awaken / follow-the-rabbit)
  if (['neo', 'awaken', 'follow-the-rabbit'].includes(cmd)) {
    runMatrixEasterEgg();
    return;
  }

  // SECRET: CYBER MODE (cyber-mode)
  if (cmd === 'cyber-mode') {
    runCyberModeEasterEgg();
    return;
  }

  // SECRET: SIMULATE BREACH (simulate-breach)
  if (cmd === 'simulate-breach') {
    runSimulateBreachEasterEgg();
    return;
  }

  // SECRET: INITIALIZE AI (initialize-ai)
  if (cmd === 'initialize-ai') {
    runInitializeAiEasterEgg();
    return;
  }

  // Fallback for unknown commands
  printTerminalOutput(`
    <div class="terminal-output-block">
      <span class="terminal-alert-warn">Comando não reconhecido: '${escapeHtml(cmdRaw)}'</span><br>
      <span class="cmt">Digite <span class="str">'help'</span> para listar as diretivas de comando disponíveis.</span>
    </div>
  `);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── ADVANCED CINEMATIC EASTER EGGS ───

// 1. SUPREME CINEMATIC EASTER EGG: sudo rm -rf reality
function runRealityDisintegrationEasterEgg() {
  const visitorName = getVisitorName() || 'Visitor';
  const env = getClientEnv();

  // Step 0: NEX Companion Warning & Dramatic Pause
  if (window.nexusCompanion) {
    window.nexusCompanion.setState('alert');
    window.nexusCompanion.say('Eu não faria isso...', 3000);
  }

  setTimeout(() => {
    // Create Fullscreen Movie Stage
    const overlay = document.createElement('div');
    overlay.className = 'reality-cinematic-overlay';
    overlay.id = 'reality-cinematic-stage';
    overlay.innerHTML = `
      <canvas class="reality-matrix-canvas" id="reality-matrix-canvas"></canvas>
      <div class="reality-crt-scanline"></div>
      <div class="reality-content-stage" id="reality-content-stage">
        <div id="reality-logs"></div>
        <div id="reality-converge-area" style="display:none;"></div>
        <div id="reality-rebuild-area" style="display:none;">
          <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--tm-green); margin-bottom:6px;">
            <span>// REBUILDING REALITY...</span>
            <span id="reality-pct">0%</span>
          </div>
          <div class="reality-rebuild-bar-wrap">
            <div class="reality-rebuild-bar-fill" id="reality-fill"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Phase 1: Dissolve the standard UI smoothly
    gsap.to('#main-nav, #app-content, #ai-toggle, #toast-container', {
      opacity: 0,
      scale: 0.94,
      duration: 1.0,
      ease: 'power2.inOut'
    });

    // Start Matrix Dynamic Parallax Binary Cascade Canvas
    const canvas = document.getElementById('reality-matrix-canvas');
    const matrixEngine = createMatrixCascadeEngine(canvas);

  const logsEl = document.getElementById('reality-logs');
  const convergeEl = document.getElementById('reality-converge-area');
  const rebuildEl = document.getElementById('reality-rebuild-area');
  const pctEl = document.getElementById('reality-pct');
  const fillEl = document.getElementById('reality-fill');

  function appendStreamLine(html, delay = 0) {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = 'reality-stream-line';
      line.innerHTML = html;
      logsEl.appendChild(line);
      gsap.to(line, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    }, delay);
  }

  // 1. Root Access Granted + Beep Grave
  appendStreamLine(`<span style="color:#FF3366; font-weight:bold; font-size:1.25rem;">[ROOT] ROOT ACCESS GRANTED</span>`, 600);
  setTimeout(() => playRootAccessSound(), 600);

  // 2. Reality Engine Disabled + Efeito de Desligamento Digital
  appendStreamLine(`<span style="color:#FF3366; font-size:1.05rem;">[KERNEL] Reality Engine Disabled. System entropy initialized.</span>`, 1400);
  setTimeout(() => playRealityEngineShutdownSound(), 1400);

  // 3. Matrix Cascade inicia + Ambiente sonoro digital com eco e reverb
  setTimeout(() => startMatrixDroneSound(), 2000);

  // 4. Voz grave: "Hello Visitor" ou "Hello {nome}"
  appendStreamLine(`
    <div style="color:#00FF88; font-size:1.35rem; font-weight:bold; margin-top:14px;">
      Hello ${escapeHtml(visitorName)}.
    </div>
  `, 3400);
  setTimeout(() => playCinematicVoice(`Hello ${visitorName}.`), 3400);

  // 5. Voz grave: "We have been watching"
  appendStreamLine(`
    <div style="color:#FFFFFF; font-size:1.15rem; margin-top:10px; font-weight:500;">
      "We have been watching."
    </div>
  `, 5200);
  setTimeout(() => playCinematicVoice("We have been watching."), 5200);

  // 6. Voz grave: "The portfolio was browsing you"
  appendStreamLine(`
    <div style="color:#00E5FF; font-size:1.25rem; font-weight:700; text-shadow:0 0 25px rgba(0,229,255,0.8); margin-top:10px;">
      "The portfolio was browsing you."
    </div>
  `, 7000);
  setTimeout(() => playCinematicVoice("The portfolio was browsing you."), 7000);

  // 7. Iniciar convergência e reconstrução da realidade
  setTimeout(() => {
    playGlitchSound();
    matrixEngine.setConverging(true);
    gsap.to(logsEl, { opacity: 0.25, duration: 0.8 });

    convergeEl.style.display = 'block';
    convergeEl.innerHTML = `
      <div class="reality-converge-title">NEXUS // CONVERGING REALITY</div>
    `;
    gsap.fromTo(convergeEl, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.5)' });
  }, 8800);

  // 8. Barra: "Rebuilding Reality..."
  setTimeout(() => {
    rebuildEl.style.display = 'block';
    gsap.fromTo(rebuildEl, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });

    let progress = { val: 0 };
    gsap.to(progress, {
      val: 100,
      duration: 3.5,
      ease: 'power1.inOut',
      onUpdate: () => {
        const p = Math.floor(progress.val);
        if (pctEl) pctEl.textContent = `${p}%`;
        if (fillEl) fillEl.style.width = `${p}%`;
      },
      onComplete: () => {
        // Reconstrução completa com GSAP, som ascendente e fade-out do drone
        stopMatrixDroneSound();
        playRealityRebuildingSound();
        matrixEngine.stop();

        gsap.to(overlay, {
          opacity: 0,
          scale: 1.05,
          filter: 'blur(10px)',
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => overlay.remove()
        });

        gsap.to('#main-nav, #app-content, #ai-toggle, #toast-container', {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          onComplete: () => {
            navigateTo('hq');
            unlockAchievement('code_breaker');
            showToast('⚡', 'REALIDADE RESTAURADA', 'Experiência sonora cinematográfica concluída.');
          }
        });
      }
    });
  }, 10400);
  }, 2200);
}

function createMatrixCascadeEngine(canvas) {
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const resizeHandler = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resizeHandler);

  const layers = [
    { count: Math.floor(width / 34), fontSize: 11, speedMin: 3, speedMax: 5, alpha: 0.35 },
    { count: Math.floor(width / 24), fontSize: 15, speedMin: 6, speedMax: 10, alpha: 0.65 },
    { count: Math.floor(width / 18), fontSize: 22, speedMin: 12, speedMax: 18, alpha: 0.95 }
  ];

  const columns = [];
  layers.forEach((layer, layerIdx) => {
    for (let i = 0; i < layer.count; i++) {
      columns.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        speed: layer.speedMin + Math.random() * (layer.speedMax - layer.speedMin),
        fontSize: layer.fontSize,
        alpha: layer.alpha,
        layerIdx,
        chars: Array.from({ length: 24 }, () => (Math.random() > 0.5 ? '1' : '0'))
      });
    }
  });

  let converging = false;
  let animId;

  function render() {
    ctx.fillStyle = 'rgba(2, 2, 6, 0.22)';
    ctx.fillRect(0, 0, width, height);

    columns.forEach(col => {
      // Live dynamic character flipping between 0 and 1
      if (Math.random() < 0.35) {
        const flipIdx = Math.floor(Math.random() * col.chars.length);
        col.chars[flipIdx] = Math.random() > 0.5 ? '1' : '0';
      }

      if (converging) {
        col.x += (width / 2 - col.x) * 0.04;
        col.y += (height / 2 - col.y) * 0.04;
      } else {
        col.y += col.speed;
        if (col.y > height + 240) {
          col.y = -Math.random() * 200;
          col.x = Math.random() * width;
        }
      }

      ctx.font = `${col.fontSize}px 'JetBrains Mono', monospace`;

      for (let j = 0; j < col.chars.length; j++) {
        const charY = col.y - j * col.fontSize;
        if (charY < 0 || charY > height) continue;

        if (j === 0) {
          // Luminous Leading Head
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#00FF88';
          ctx.shadowBlur = 14;
        } else if (j < 4) {
          ctx.fillStyle = `rgba(0, 255, 136, ${col.alpha})`;
          ctx.shadowColor = '#00FF88';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(0, 229, 255, ${col.alpha * (1 - j / col.chars.length)})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(col.chars[j], col.x, charY);
      }
    });

    animId = requestAnimationFrame(render);
  }

  render();

  return {
    setConverging: (val) => { converging = val; },
    stop: () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeHandler);
    }
  };
}

// 2. AWAKEN: python awaken.py
function runAwakenEasterEgg() {
  const visitorName = getVisitorName() || 'Visitor';

  printTerminalOutput(`
    <div class="terminal-banner">
      <div class="terminal-alert-success font-bold" style="font-size:1.1rem;">🧠 Initializing Neural Core...</div>
      <div class="cmt">// Sincronizando módulos de arquitetura...</div>
    </div>
  `);

  setTimeout(() => {
    printTerminalOutput(`
      <div class="terminal-banner" style="border-left-color:var(--tm-green);">
        <div class="terminal-alert-success">✓ Desenvolvimento</div>
        <div class="terminal-alert-success">✓ Inteligência Artificial</div>
        <div class="terminal-alert-success">✓ Automação</div>
        <div class="terminal-alert-success">✓ Cybersegurança</div>
        <br>
        <div class="str font-bold" style="font-size:1.15rem;">Hello ${escapeHtml(visitorName)}.</div>
        <div class="kw font-bold" style="font-size:1.1rem;">The Neural Core is awake.</div>
      </div>
    `);
  }, 1600);

  // GSAP: Staggered illumination & breathing cards
  gsap.fromTo('.stat, .hq-mod, .id-spec, .matrix-node-card, .vault-card, .hub-cert-card',
    { boxShadow: '0 0 35px rgba(0,229,255,0.9)', borderColor: '#00E5FF' },
    { boxShadow: 'none', borderColor: '', duration: 1.6, stagger: 0.05, ease: 'power2.out' }
  );

  const breathTween = gsap.to('.vault-card, .id-spec, .matrix-node-card, .stat, .id-scanner', {
    scale: 1.025,
    boxShadow: '0 0 30px rgba(0,229,255,0.4)',
    yoyo: true,
    repeat: 8,
    duration: 0.7,
    ease: 'sine.inOut'
  });

  // AI Companion Reaction (NEURAL MODE)
  if (window.nexusCompanion) {
    window.nexusCompanion.setState('neural');
    window.nexusCompanion.say('Neural Core Online.', 4500);
  }

  showToast('🌟', 'NEURAL CORE AWAKE', 'Conexões sinápticas intensificadas!');

  setTimeout(() => {
    breathTween.kill();
    gsap.to('.vault-card, .id-spec, .matrix-node-card, .stat, .id-scanner', { scale: 1, boxShadow: 'none', duration: 0.8 });
    if (window.nexusCompanion) window.nexusCompanion.setState('idle');
    printTerminalOutput(`
      <div class="terminal-banner">
        <div class="terminal-alert-success">[SISTEMA] Núcleo neural estabilizado em modo nominal.</div>
      </div>
    `);
  }, 8500);
}

// 3. FUTURE: git checkout future
function runFutureTimelineEasterEgg() {
  printTerminalOutput(`
    <div class="terminal-banner" style="border-left-color:#B400FF;">
      <div class="str font-bold" style="font-size:1.15rem;">Switching Timeline...</div>
      <div class="cmt">// Sincronizando repositório temporal (Branch: future // Year: 2035)</div>
    </div>
  `);

  // AI Companion Reaction (FUTURE MODE)
  if (window.nexusCompanion) {
    window.nexusCompanion.setState('future');
    window.nexusCompanion.say('Interessante... esta linha do tempo tem potencial.', 5500);
  }

  document.body.classList.add('future-timeline-active');

  const badge = document.createElement('div');
  badge.className = 'future-hud-badge';
  badge.id = 'future-hud-badge';
  badge.innerHTML = '⚡ TIMELINE: YEAR 2035 // AGI & NEURAL DEFENSE';
  document.body.appendChild(badge);

  setTimeout(() => {
    printTerminalOutput(`
      <div class="terminal-banner" style="border-left-color:#B400FF; background:rgba(180,0,255,0.06);">
        <span class="kw font-bold">// TIMELINE ARCHIVE: ANO 2035 //</span><br><br>
        <div class="str font-bold" style="font-size:1.2rem; color:#FFF;">GABRIEL HENRIQUE ALVES ROCHA</div><br>
        <div><span class="kw">Especialização:</span> Especialista Chefe em Inteligência Artificial Quântica & AGI</div>
        <div><span class="kw">Pesquisa:</span> Redes Neurais Auto-Evolutivas & Defesa Cibernética Autônoma</div>
        <div><span class="kw">Arquitetura:</span> Sistemas Cognitivos Distribuídos & Robótica Humanoide</div><br>
        <span class="kw">Credenciais Futuras Verificadas:</span><br>
        <div><span class="str">[AGI-SEC]</span> Autonomous Neural Defense Certified (2035)</div>
        <div><span class="str">[QUANTUM]</span> Quantum Algorithmic Optimization (2033)</div>
        <div><span class="str">[NEURO-ENG]</span> Neural Interface Protocol Architect (2031)</div>
      </div>
    `);
  }, 1200);

  showToast('⏳', 'SALTO TEMPORAL (2035)', 'Visualizando projeção de carreira em AGI & Quantum Defense.');

  setTimeout(() => {
    document.body.classList.remove('future-timeline-active');
    const b = document.getElementById('future-hud-badge');
    if (b) b.remove();
    if (window.nexusCompanion) window.nexusCompanion.setState('idle');

    printTerminalOutput(`
      <div class="terminal-banner">
        <div class="terminal-alert-warn font-bold">Future branch unavailable.</div>
        <div>Returning to stable version.</div>
      </div>
    `);
  }, 8500);
}

// 4. TRANSCENDENCE: npm run transcendence
function runTranscendenceEasterEgg() {
  const visitorName = getVisitorName() || 'Visitor';

  printTerminalOutput(`
    <div class="terminal-banner" style="border-left-color:var(--hq-cyan);">
      <div class="str font-bold" style="font-size:1.15rem;">Executing Transcendence Protocol...</div>
      <div class="cmt">// Desmaterializando interface física e sintetizando malha cósmica...</div>
    </div>
  `);

  // Phase 1: Dissolve components
  gsap.to('#main-nav, #app-content, #ai-toggle, #toast-container', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut'
  });

  // Phase 2: Create full-screen Transcendence Canvas
  const overlay = document.createElement('div');
  overlay.className = 'transcendence-overlay';
  overlay.id = 'transcendence-overlay';
  overlay.innerHTML = `
    <canvas id="transcendence-canvas" style="position:absolute; inset:0; width:100%; height:100%;"></canvas>
    <div class="transcendence-quote-wrap" id="transcendence-quote-wrap" style="opacity:0; transform:scale(0.9);">
      <div class="transcendence-quote">"Technology is not the goal. It is the amplifier."</div>
      <div class="transcendence-author">— Gabriel Henrique Alves Rocha</div>
    </div>
  `;
  document.body.appendChild(overlay);

  const canvas = document.getElementById('transcendence-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const nodes = [
    { label: 'Gabriel', x: 0.5, y: 0.45, r: 8, color: '#00E5FF' },
    { label: 'Projetos', x: 0.35, y: 0.35, r: 6, color: '#00FF88' },
    { label: 'Tecnologias', x: 0.65, y: 0.35, r: 6, color: '#B400FF' },
    { label: 'IA', x: 0.38, y: 0.6, r: 6, color: '#00E5FF' },
    { label: 'Cybersegurança', x: 0.62, y: 0.6, r: 6, color: '#FF3366' },
    { label: 'Automação', x: 0.5, y: 0.68, r: 6, color: '#FFB800' }
  ];

  let animFrameId;
  let angle = 0;

  function drawTranscendence() {
    ctx.fillStyle = 'rgba(4, 4, 10, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    angle += 0.015;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Draw connecting synapses
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const x1 = n1.x * canvas.width + Math.sin(angle + i) * 15;
        const y1 = n1.y * canvas.height + Math.cos(angle + i) * 15;
        const x2 = n2.x * canvas.width + Math.sin(angle + j) * 15;
        const y2 = n2.y * canvas.height + Math.cos(angle + j) * 15;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // Draw pulsing nodes
    nodes.forEach((n, idx) => {
      const nx = n.x * canvas.width + Math.sin(angle + idx) * 15;
      const ny = n.y * canvas.height + Math.cos(angle + idx) * 15;

      ctx.beginPath();
      ctx.arc(nx, ny, n.r + Math.sin(angle * 2 + idx) * 3, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.shadowColor = n.color;
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.font = 'bold 12px Rajdhani';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText(n.label, nx, ny - 14);
    });

    animFrameId = requestAnimationFrame(drawTranscendence);
  }

  drawTranscendence();

  // Phase 4: Typographic reveal
  setTimeout(() => {
    gsap.to('#transcendence-quote-wrap', {
      opacity: 1,
      scale: 1,
      duration: 1.4,
      ease: 'power3.out'
    });
  }, 2200);

  // Phase 5: Reconstruct site
  setTimeout(() => {
    cancelAnimationFrame(animFrameId);
    gsap.to('#transcendence-overlay', {
      opacity: 0,
      duration: 1.2,
      onComplete: () => overlay.remove()
    });

    gsap.to('#main-nav, #app-content, #ai-toggle, #toast-container', {
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
      onComplete: () => {
        navigateTo('hq');
        unlockAchievement('full_access');
        showToast('✨', 'TRANSCENDÊNCIA ALCANÇADA', 'O amplificador do futuro foi ativado.');
      }
    });
  }, 7500);
}

function runInitializeAiEasterEgg() {
  printTerminalOutput(`
    <div class="terminal-banner">
      <div class="terminal-alert-success">🧠 Inicializando Núcleo Cognitivo...</div>
      <div>Carregando:</div>
      <div class="terminal-alert-success">  ✓ Inteligência Artificial</div>
      <div class="terminal-alert-success">  ✓ Automação</div>
      <div class="terminal-alert-success">  ✓ Desenvolvimento</div>
      <div class="terminal-alert-success">  ✓ Cybersegurança</div>
      <div>NEXUS AI CONECTADO // Todos os subsistemas sincronizados.</div>
    </div>
  `);

  // GSAP light wave across all modules
  gsap.fromTo('.stat, .hq-mod, .id-spec, .matrix-node-card, .hub-cert-card, .nav-link', 
    { boxShadow: '0 0 25px rgba(0,229,255,0.9)', borderColor: '#00E5FF' }, 
    { boxShadow: 'none', borderColor: '', duration: 1.4, stagger: 0.06, ease: 'power2.out' }
  );

  showToast('🤖', 'NÚCLEO IA ATIVADO', 'Subsistemas cognitivos sincronizados com sucesso!');
}

// ─── 8. Tech Matrix (T-MTX) & Neural Graph ───
let matrixInited = false;
function initTechMatrix() {
  if (matrixInited) return;
  matrixInited = true;

  // View toggle
  document.querySelectorAll('.matrix-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.matrix-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      const neuralEl = document.getElementById('matrix-neural-view');
      const gridEl = document.getElementById('matrix-grid-view');
      if (neuralEl) neuralEl.style.display = (view === 'neural') ? 'block' : 'none';
      if (gridEl) gridEl.style.display = (view === 'grid') ? 'block' : 'none';
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
  if (!tabsEl) return;
  skillCategories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `matrix-tab ${cat.id === 'all' ? 'active' : ''}`;
    btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.matrix-tab').forEach(t => t.classList.remove('active'));
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
  if (!gridEl) return;
  const filtered = (catId === 'all') ? skills : skills.filter(s => s.category === catId);
  gridEl.innerHTML = '';

  filtered.forEach(skill => {
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
    neuralLinks.forEach(link => {
      const source = skills.find(s => s.id === link.source);
      const target = skills.find(s => s.id === link.target);

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
    skills.forEach(skill => {
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

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    hoveredNode = null;
    skills.forEach(skill => {
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
  document.querySelectorAll('.mission-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mission-filter-btn').forEach(b => b.classList.remove('active'));
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

  const filtered = (filter === 'all') ? timeline : timeline.filter(m => m.status === filter);

  filtered.forEach((mission, idx) => {
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
            ${mission.stack.map(s => `<span class="badge badge-amber">${s}</span>`).join('')}
          </div>

          <div class="mission-intel-grid">
            ${mission.intel.map(it => `
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

    setTimeout(() => {
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
    { id: 'all', label: 'All Vaults' },
    { id: 'ai', label: '🧠 AI & Vision' },
    { id: 'automation', label: '🦾 Robotics & IoT' },
    { id: 'web', label: '🌐 Core Platforms' }
  ];

  const filtersEl = document.getElementById('vault-filters');
  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = `vault-filter-btn ${f.id === 'all' ? 'active' : ''}`;
    btn.textContent = f.label;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vault-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderVaultGrid(f.id);
    });
    filtersEl.appendChild(btn);
  });

  renderVaultGrid('all');

  // Modal Close Listeners
  document.getElementById('vault-modal-close').addEventListener('click', closeVaultModal);
  document.getElementById('vault-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'vault-modal-overlay') closeVaultModal();
  });
}

function renderVaultGrid(catId) {
  const gridEl = document.getElementById('vault-grid');
  const filtered = (catId === 'all') ? projects : projects.filter(p => p.category === catId);
  gridEl.innerHTML = '';

  filtered.forEach(p => {
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
          ${p.tech.map(t => `<span class="badge badge-violet">${t}</span>`).join('')}
        </div>

        <div class="vault-card-footer">
          <button class="btn btn-outline btn-inspect" data-vault="${p.id}">INSPECT DOSSIER</button>
          <button class="btn btn-ghost" onclick="window.open('${p.links.code}', '_blank')">SOURCE</button>
        </div>
      </div>
    `;
    gridEl.appendChild(card);

    card.querySelector('.btn-inspect').addEventListener('click', () => {
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
  certifications.forEach(cert => {
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

  visitorAchievements.forEach(ach => {
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

  const ach = visitorAchievements.find(a => a.id === achId);
  if (ach) {
    showToast(ach.icon, 'SECURITY CLEARANCE UNLOCKED', ach.name);
  }

  // Update nav counter
  const countEl = document.getElementById('ach-count');
  if (countEl) countEl.textContent = state.achievements.length;

  if (state.achievements.length >= 8) {
    setTimeout(() => unlockAchievement('full_access'), 1000);
  }
}

if (typeof window !== 'undefined') {
  window.unlockAchievement = unlockAchievement;
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

  setTimeout(() => {
    gsap.to(toast, {
      opacity: 0,
      x: 100,
      duration: 0.4,
      onComplete: () => toast.remove()
    });
  }, 4000);
}

// ─── 12. NEXUS AI OFFICIAL LIVING DIGITAL COMPANION (NEX) ───
function initAICompanion() {
  const wrap = document.getElementById('ai-toggle');
  const bot = document.getElementById('companion-bot');
  const shadow = document.getElementById('companion-shadow');
  const halo = document.getElementById('bot-halo');
  const img = document.getElementById('nex-body-img');
  const bubble = document.getElementById('companion-bubble');
  const bubbleText = document.getElementById('companion-bubble-text');

  if (!wrap || !bot) return;

  let currentState = 'idle';
  let bubbleTimeout = null;
  let isMouseNear = false;

  // 1. State Machine Controller
  function setCompanionState(newState) {
    currentState = newState;
    wrap.className = `nex-companion-wrap state-${newState}`;
  }

  // 2. Holographic Speech Bubble
  function say(text, duration = 4200) {
    if (!bubble || !bubbleText) return;
    if (bubbleTimeout) clearTimeout(bubbleTimeout);

    bubbleText.textContent = text;
    bubble.classList.add('visible');

    bubbleTimeout = setTimeout(() => {
      bubble.classList.remove('visible');
    }, duration);
  }

  // 3. Continuous GSAP Levitation & Physics
  gsap.to(bot, {
    y: -12,
    rotationZ: 1.5,
    duration: 2.4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  gsap.to(shadow, {
    scale: 0.72,
    opacity: 0.22,
    duration: 2.4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  gsap.to(halo, {
    rotationZ: 360,
    duration: 10,
    ease: 'none',
    repeat: -1
  });

  // 4. Natural Glance / Micro-Movement Engine
  function triggerNaturalGlance() {
    if (currentState !== 'idle') {
      setTimeout(triggerNaturalGlance, 4000);
      return;
    }

    const randomAngle = (Math.random() - 0.5) * 6;
    gsap.to(img, {
      rotationZ: randomAngle,
      duration: 1.2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setTimeout(triggerNaturalGlance, 5000 + Math.random() * 4000);
      }
    });
  }
  setTimeout(triggerNaturalGlance, 3500);

  // 5. Cursor Hover & 3D Proximity Lean
  window.addEventListener('mousemove', (e) => {
    if (currentState === 'alert' || currentState === 'thinking' || currentState === 'neural' || currentState === 'future') return;

    const rect = wrap.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < 320) {
      if (!isMouseNear && currentState === 'idle') {
        isMouseNear = true;
        setCompanionState('hover');
      }

      // 3D Lean towards mouse
      const rotY = Math.max(-16, Math.min(16, (deltaX / 320) * 16));
      const rotX = Math.max(-12, Math.min(12, -(deltaY / 320) * 12));
      gsap.to(img, {
        rotationY: rotY,
        rotationX: rotX,
        scale: 1.06,
        duration: 0.24,
        ease: 'power2.out'
      });
    } else {
      if (isMouseNear && currentState === 'hover') {
        isMouseNear = false;
        setCompanionState('idle');
        gsap.to(img, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out'
        });
      }
    }
  });

  // 6. Onboarding Wave & Welcome Speech (Once per session)
  const hasGreeted = sessionStorage.getItem('nex_session_greeted');
  if (!hasGreeted) {
    setTimeout(() => {
      // Step 1: Greeting Wave
      setCompanionState('idle');
      say('Olá! Eu sou o NEX.', 3400);

      gsap.fromTo(img, 
        { rotationZ: -4, scale: 1.08 },
        { rotationZ: 4, scale: 1.08, duration: 0.45, yoyo: true, repeat: 3, ease: 'sine.inOut' }
      );

      // Step 2: Second message after a few seconds
      setTimeout(() => {
        const savedName = getVisitorName();
        if (savedName) {
          say(`Posso ajudar você a explorar este portfólio, ${savedName}.`, 4500);
        } else {
          say('Posso ajudar você a explorar este portfólio.', 4500);
        }
        sessionStorage.setItem('nex_session_greeted', 'true');
      }, 3800);
    }, 1800);
  }

  // Expose Global Companion Interface
  window.nexusCompanion = {
    setState: setCompanionState,
    say,
    triggerAlert: (text) => {
      setCompanionState('alert');
      if (text) say(text, 3200);
    },
    greetVisitor: (name) => {
      say(`Olá ${name}! Identificação registrada no núcleo NEX.`, 4500);
    }
  };
}

// ─── 13. NEXUS AI Cognitive Assistant Window (NEX) ───
const nexGreeting = `
  <div style="line-height:1.6;">
    Olá.<br><br>
    Sou o <strong style="color:var(--hq-cyan);">NEX</strong>.<br><br>
    Posso responder perguntas sobre:<br><br>
    • <strong>Gabriel</strong><br>
    • <strong>Tecnologias</strong><br>
    • <strong>Projetos</strong><br>
    • <strong>GitHub</strong><br>
    • <strong>Estudos</strong><br>
    • <strong>Cybersegurança</strong>
  </div>
`;

const nexSuggestions = [
  'Quem é Gabriel?',
  'Tecnologias & Skills',
  'Projetos de IA',
  'Perfil no GitHub',
  'Estudos & Certificações',
  'Cybersegurança'
];

const nexResponses = [
  {
    keywords: ['gabriel', 'quem e', 'autor', 'perfil', 'bio', 'sobre'],
    response: `<strong>Gabriel Henrique Alves Rocha</strong> é Desenvolvedor Full Stack & Especialista em Automação e IA, cursando Análise e Desenvolvimento de Sistemas. Focado em arquitetura escalável, IA aplicada e segurança digital.`
  },
  {
    keywords: ['tecnologia', 'tech', 'stack', 'skills', 'ferramentas', 'linguagens'],
    response: `O ecossistema técnico do Gabriel inclui <strong>TypeScript, React, Next.js, Node.js, Python, TailwindCSS, GSAP, Docker, PostgreSQL, UiPath RPA</strong> e APIs de Inteligência Artificial.`
  },
  {
    keywords: ['projeto', 'projetos', 'portfolio', 'cases', 'ia', 'inteligencia'],
    response: `Destaques no portfólio: <strong>Aegis Security Sentinel</strong> (Detecção de Ameaças com IA), <strong>Autonomous Agent System</strong> (Orquestrador multi-agente) e <strong>Nexus Enterprise ERP</strong> (Arquitetura Full Stack). Visite a seção <strong>Projetos (P-VLT)</strong>!`
  },
  {
    keywords: ['github', 'repositorio', 'git', 'codigo', 'commits'],
    response: `O perfil do GitHub é <a href="https://github.com/Gabriel-H-Alves" target="_blank" style="color:#00E5FF; text-decoration:underline;">github.com/Gabriel-H-Alves</a> com dezenas de repositórios públicos de código limpo e arquitetura moderna.`
  },
  {
    keywords: ['estudo', 'estudos', 'certificacao', 'certificados', 'cursos'],
    response: `Gabriel mantém aprendizado contínuo com certificações em <strong>Python, JavaScript Avançado, Cloud Fundamentals, Cyber Security & Defesa Digital</strong> e Engenharia de Prompts para LLMs.`
  },
  {
    keywords: ['cyber', 'segurança', 'cyberseguranca', 'defesa', 'pentest', 'soc'],
    response: `Cybersegurança é um dos pilares centrais: defesa de redes, análise estática de vulnerabilidades, OAuth2/JWT seguro e conformidade com OWASP Top 10.`
  },
  {
    keywords: ['whoami', 'nome', 'visitante', 'identidade', 'voce sabe quem'],
    response: () => {
      const name = getVisitorName();
      if (name) {
        return `Você está identificado no sistema como <strong>${escapeHtml(name)}</strong>. Bem-vindo de volta!`;
      }
      return `Você ainda é um Visitante Anônimo. Digite <code>whoami()</code> no terminal para registrar seu nome!`;
    }
  }
];

const nexFallback = `Comando cognitivo processado. Você pode me perguntar sobre a experiência do <strong>Gabriel</strong>, projetos de <strong>IA</strong>, <strong>Tecnologias</strong>, <strong>GitHub</strong> ou <strong>Cybersegurança</strong>!`;

function initAIAssistant() {
  const toggle = document.getElementById('ai-toggle');
  const windowEl = document.getElementById('ai-chat-window');
  const input = document.getElementById('ai-input');
  const sendBtn = document.getElementById('ai-send');
  const messagesEl = document.getElementById('ai-messages');
  const promptsEl = document.getElementById('ai-prompts');
  let isOpen = false;

  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    windowEl.classList.toggle('open', isOpen);

    if (isOpen) {
      window.nexusCompanion?.setState('thinking');
      if (messagesEl.children.length === 0) {
        postAIMessage(nexGreeting);
        renderSuggestions();
      }
    } else {
      window.nexusCompanion?.setState('idle');
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

    // Companion Thinking State
    window.nexusCompanion?.setState('thinking');

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

    setTimeout(() => {
      waveEl.remove();
      const response = processAIQuery(text);
      
      // Companion Responding
      postAIMessage(response);

      setTimeout(() => {
        if (isOpen) {
          window.nexusCompanion?.setState('idle');
        }
      }, 2000);
    }, 700 + Math.random() * 350);
  }

  sendBtn.addEventListener('click', () => executeQuery(input.value));
  input.addEventListener('keydown', (e) => {
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
    msg.innerHTML = `<div class="ai-msg-bubble">${escapeHtml(text)}</div>`;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function processAIQuery(raw) {
    const q = raw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for (const item of nexResponses) {
      if (item.keywords.some(k => q.includes(k))) {
        return typeof item.response === 'function' ? item.response() : item.response;
      }
    }
    return nexFallback;
  }

  function renderSuggestions() {
    promptsEl.innerHTML = '';
    nexSuggestions.forEach(s => {
      const chip = document.createElement('button');
      chip.className = 'ai-prompt-chip';
      chip.textContent = s;
      chip.addEventListener('click', () => {
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
    { icon: '🏠', label: 'Central de Comando (HQ)', action: () => navigateTo('hq') },
    { icon: '👤', label: 'Dossiê do Engenheiro (ID-CORE)', action: () => navigateTo('identity') },
    { icon: '🆔', label: 'Identificação do Visitante // whoami()', action: () => { navigateTo('identity'); setTimeout(() => { const el = document.getElementById('terminal-cmd-input'); if(el) { el.value = 'whoami()'; el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); } }, 400); } },
    { icon: '⚙️', label: 'Ir para Tecnologias & Grafo Neural (T-MTX)', action: () => navigateTo('matrix') },
    { icon: '🚀', label: 'Ir para Projetos & Dossiês de Arquitetura (P-VLT)', action: () => navigateTo('vault') },
    { icon: '📡', label: 'Linha do Tempo Tática de Missões (M-LOG)', action: () => navigateTo('missions') },
    { icon: '🛡️', label: 'Ir para Cyber Lab & Estudos de Segurança', action: () => { navigateTo('identity'); setTimeout(() => { const el = document.getElementById('terminal-cmd-input'); if(el) { el.value = 'cyber'; el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); } }, 400); } },
    { icon: '🏆', label: 'Ir para Estudos & Credenciais Verificadas (K-HUB)', action: () => navigateTo('knowledge') },
    { icon: '🐙', label: 'Abrir Perfil no GitHub', action: () => window.open('https://github.com/Gabriel-H-Alves', '_blank') },
    { icon: '💼', label: 'Abrir Perfil no LinkedIn', action: () => window.open('https://linkedin.com/in/gabriel-henrique-alves-rocha', '_blank') },
    { icon: '🤖', label: 'Abrir Assistente Cognitivo NEXUS AI', action: () => document.getElementById('ai-toggle').click() },
    { icon: '🧠', label: 'Despertar Núcleo Neural // python awaken.py', action: () => runAwakenEasterEgg() },
    { icon: '⏳', label: 'Salto Temporal 2035 // git checkout future', action: () => runFutureTimelineEasterEgg() },
    { icon: '✨', label: 'Protocolo Transcendência // npm run transcendence', action: () => runTranscendenceEasterEgg() },
    { icon: '⚡', label: 'Executar Modo Cyber (Overdrive)', action: () => runCyberModeEasterEgg() },
    { icon: '🐰', label: 'Executar Modo Matrix (Protocolo Neo)', action: () => runMatrixEasterEgg() },
    { icon: '🚨', label: 'Simular Tentativa de Intrusão (Breach Alert)', action: () => runSimulateBreachEasterEgg() },
    { icon: '💥', label: 'Desativar Realidade // sudo rm -rf reality', action: () => runRealityDisintegrationEasterEgg() }
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

    list.forEach((cmd, idx) => {
      const row = document.createElement('div');
      row.className = `palette-row-item ${idx === 0 ? 'active-choice' : ''}`;
      row.innerHTML = `
        <span class="palette-row-icon">${cmd.icon}</span>
        <span class="palette-row-label">${cmd.label}</span>
      `;
      row.addEventListener('click', () => {
        cmd.action();
        closePalette();
      });
      results.appendChild(row);
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      overlay.classList.contains('open') ? closePalette() : openPalette();
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closePalette();
    }
  });

  document.getElementById('nav-palette-btn').addEventListener('click', openPalette);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    const filtered = commands.filter(c => c.label.toLowerCase().includes(q));
    renderCmds(filtered);
  });

  input.addEventListener('keydown', (e) => {
    const rows = results.querySelectorAll('.palette-row-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = Math.min(selectedIdx + 1, rows.length - 1);
      rows.forEach((r, i) => r.classList.toggle('active-choice', i === selectedIdx));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = Math.max(selectedIdx - 1, 0);
      rows.forEach((r, i) => r.classList.toggle('active-choice', i === selectedIdx));
    }
    if (e.key === 'Enter') {
      rows[selectedIdx]?.click();
    }
  });
}

// ─── 14. Easter Eggs (Konami Code) ───
function initEasterEggs() {
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let cursor = 0;

  document.addEventListener('keydown', (e) => {
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

  for (let i = 0; i < 45; i++) {
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
    for (let j = 0; j < 25; j++) {
      chars += String.fromCharCode(0x30A0 + Math.random() * 96) + '<br>';
    }
    stream.innerHTML = chars;
    container.appendChild(stream);
  }

  setTimeout(() => container.remove(), 5500);
}

// ─── 15. System Initialization ───
function initApp() {
  initNavigation();
  initTypewriter();
  initCounters();
  initParticles();
  initHud();
  initAICompanion();
  initAIAssistant();
  initCommandPalette();
  initEasterEggs();

  // First authorization unlock
  unlockAchievement('first_contact');

  // Update badge counter
  const countEl = document.getElementById('ach-count');
  if (countEl) countEl.textContent = state.achievements.length;
}

export function startNexusOS() {
  if (typeof window === 'undefined') return;
  initBoot();
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    startNexusOS();
  } else {
    document.addEventListener('DOMContentLoaded', startNexusOS);
  }
}

