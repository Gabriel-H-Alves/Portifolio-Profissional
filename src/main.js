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

// ─── Application State ───
const state = {
  currentSection: 'hq',
  visitedSections: new Set(['hq']),
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

// ─── 7. Identity Core (ID-CORE) Module ───
let identityInited = false;
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

  items.forEach(it => {
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
    if (lineIdx >= profile.bio.length) {
      html += '<span class="typing-cursor"></span>';
      bioEl.innerHTML = html;
      return;
    }

    const item = profile.bio[lineIdx];
    let cls = '';
    if (item.type === 'comment') cls = 'cmt';
    else if (item.type === 'keyword') cls = 'kw';
    else if (item.type === 'string') cls = 'str';
    else if (item.type === 'property') cls = 'kw';

    if (item.type === 'empty') {
      html += '<br>';
    } else {
      html += `<span class="${cls}">${item.text}</span>`;
      if (['comment', 'normal', 'string'].includes(item.type)) {
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
      document.getElementById('matrix-neural-view').style.display = (view === 'neural') ? 'block' : 'none';
      document.getElementById('matrix-grid-view').style.display = (view === 'grid') ? 'block' : 'none';
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

// ─── 12. NEXUS AI Cognitive Assistant (N-AI) ───
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
    toggle.classList.toggle('active', isOpen);

    if (isOpen && messagesEl.children.length === 0) {
      postAIMessage(ariaGreeting);
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

    setTimeout(() => {
      waveEl.remove();
      const response = processAIQuery(text);
      postAIMessage(response);
    }, 850 + Math.random() * 400);
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
    msg.innerHTML = `<div class="ai-msg-bubble">${text}</div>`;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function processAIQuery(raw) {
    const q = raw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for (const item of ariaResponses) {
      if (item.keywords.some(k => q.includes(k))) {
        return item.response;
      }
    }
    return ariaFallback;
  }

  function renderSuggestions() {
    promptsEl.innerHTML = '';
    ariaSuggestions.forEach(s => {
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
    { icon: '👤', label: 'Access Identity Core (ID-CORE)', action: () => navigateTo('identity') },
    { icon: '⚙️', label: 'Open Tech Matrix & Synapse Graph (T-MTX)', action: () => navigateTo('matrix') },
    { icon: '📡', label: 'Inspect Tactical Mission Log (M-LOG)', action: () => navigateTo('missions') },
    { icon: '🚀', label: 'Unlock Project Vault Dossiers (P-VLT)', action: () => navigateTo('vault') },
    { icon: '🏆', label: 'Verify Knowledge Hub Credentials (K-HUB)', action: () => navigateTo('knowledge') },
    { icon: '🏠', label: 'Return to Central Command (HQ)', action: () => navigateTo('hq') },
    { icon: '🤖', label: 'Engage NEXUS AI Assistant', action: () => document.getElementById('ai-toggle').click() },
    { icon: '📄', label: 'Download Executive Briefing [CV]', action: () => alert('Executive Briefing CV download initiated.') },
    { icon: '🥚', label: 'Execute Easter Egg Protocol', action: () => { unlockAchievement('code_breaker'); showToast('🥚', 'CIPHER SOLVED', 'Secret clearance granted via Command Terminal!'); } }
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
  initAIAssistant();
  initCommandPalette();
  initEasterEggs();

  // First authorization unlock
  unlockAchievement('first_contact');

  // Update badge counter
  const countEl = document.getElementById('ach-count');
  if (countEl) countEl.textContent = state.achievements.length;
}

document.addEventListener('DOMContentLoaded', initBoot);
