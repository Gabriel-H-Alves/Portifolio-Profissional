"use client";

import React, { useEffect } from "react";
import { startNexusOS } from "@/main.js";
import { EngineeringCoreSection } from "@/components/modules/engineering-core/EngineeringCoreSection";
import { MissionsSection } from "@/components/modules/missions/MissionsSection";
import { VaultSection } from "@/components/modules/vault/VaultSection";

export default function HomePage() {
  useEffect(() => {
    startNexusOS();
  }, []);

  return (
    <>
      {/* ═══ BOOT SEQUENCE ═══ */}
      <div id="boot-screen">
        <div className="boot-logo">
          <span className="g" data-text="NEXUS OS v3.0">
            NEXUS OS v3.0
          </span>
        </div>
        <div className="boot-sub">
          // AI CAREER COMMAND CENTER // INITIALIZING SUBSYSTEMS
        </div>

        <div className="boot-lines" id="boot-lines"></div>

        <div className="boot-progress-wrap" id="boot-progress-wrap">
          <div className="boot-progress-bar">
            <div className="boot-progress-fill" id="boot-progress"></div>
          </div>
          <div className="boot-pct" id="boot-percent">
            0%
          </div>
        </div>

        <button className="boot-enter" id="boot-enter">
          INITIALIZE COMMAND CENTER [PRESS ANY KEY]
        </button>
      </div>

      {/* ═══ MAIN NAVIGATION ═══ */}
      <nav id="main-nav">
        <div className="nav-brand" data-navigate="hq">
          <div className="nav-brand-icon">N</div>
          <span className="nav-brand-name">
            NEXUS<span style={{ color: "var(--starlight)", opacity: 0.4 }}>.OS</span>
          </span>
        </div>

        <div className="nav-links" id="nav-links">
          <button className="nav-link active" data-navigate="hq">
            HQ
            <span className="nav-dot"></span>
          </button>
          <button className="nav-link" data-navigate="identity">
            ID Core
            <span className="nav-dot"></span>
          </button>
          <button className="nav-link" data-navigate="matrix">
            Engineering Core
            <span className="nav-dot"></span>
          </button>
          <button className="nav-link" data-navigate="missions">
            Mission Log
            <span className="nav-dot"></span>
          </button>
          <button className="nav-link" data-navigate="vault">
            Project Vault
            <span className="nav-dot"></span>
          </button>
          <button className="nav-link" data-navigate="knowledge">
            Knowledge Hub
            <span className="nav-dot"></span>
          </button>
        </div>

        <div className="nav-right">
          <div
            className="nav-ach"
            id="nav-achievements"
            data-navigate="knowledge"
            title="Visitor Authorization Badges"
          >
            🏆 <span id="ach-count">0</span>/9
          </div>
          <div className="nav-cmd" id="nav-palette-btn" title="Command Palette (Ctrl+K)">
            ⌘K
          </div>
          <button className="nav-mob" id="nav-mobile-toggle" aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </nav>

      {/* ═══ MAIN CONTENT SYSTEM ═══ */}
      <main id="app-content">
        {/* ─── 1. NEXUS HQ (Central Command) ─── */}
        <section id="section-hq" className="section active" data-module="hq">
          <canvas className="hq-canvas" id="particles-canvas"></canvas>

          <div className="hq-hud hq-hud-tl">
            <div className="hud-line">
              SYS.NODE: <span>SAO_PAULO_01</span>
            </div>
            <div className="hud-line">
              SYS.LAT: <span className="hud-val" id="hud-lat">-23.5505</span>
            </div>
            <div className="hud-line">
              SYS.LON: <span className="hud-val" id="hud-lon">-46.6333</span>
            </div>
            <div className="hud-line">
              SYS.CLEARANCE: <span>---</span>
            </div>
          </div>

          <div className="hq-hud hq-hud-br">
            <div className="hud-line">
              SYS.CLOCK: <span className="hud-val" id="hud-time">--:--:--</span>
            </div>
            <div className="hud-line">
              SYS.INTEGRITY: <span style={{ color: "var(--success)" }}>100% OPERATIONAL</span>
            </div>
          </div>

          <div className="hq-hero">
            <div className="hq-greeting">// WELCOME TO THE AI CAREER COMMAND CENTER</div>
            <h1 className="hq-name">GABRIEL HENRIQUE</h1>
            <div className="hq-title" id="hq-title-typewriter">
              <span id="typewriter-text"></span>
              <span className="cursor"></span>
            </div>
            <div className="hq-cta">
              <button className="btn btn-primary" data-navigate="identity">
                EXPLORE COMMAND CORE
              </button>
              <button className="btn btn-outline" id="btn-download-cv">
                EXECUTIVE CV [PDF]
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="hq-stats">
            <div className="stat">
              <div className="stat-val" data-count="0">
                0
              </div>
              <div className="stat-lbl">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-val" data-count="42">
                0
              </div>
              <div className="stat-lbl">Projects Deployed</div>
            </div>
            <div className="stat">
              <div className="stat-val" data-count="30" data-suffix="+">
                0
              </div>
              <div className="stat-lbl">Technologies</div>
            </div>
            <div className="stat">
              <div className="stat-val" data-count="12">
                0
              </div>
              <div className="stat-lbl">Verified Certs</div>
            </div>
          </div>

          {/* Modules Nav Grid */}
          <div className="hq-modules">
            <div className="hq-mod" data-navigate="identity">
              <div className="hq-mod-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="hq-mod-label">Identity Core</div>
              <div className="hq-mod-code">ID-CORE // DIGITAL TWIN</div>
            </div>

            <div className="hq-mod" data-navigate="matrix">
              <div className="hq-mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                </svg>
              </div>
              <div className="hq-mod-label">Engineering Core</div>
              <div className="hq-mod-code">ENG-CORE // KNOWLEDGE TOPOLOGY</div>
            </div>

            <div className="hq-mod" data-navigate="missions">
              <div className="hq-mod-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="hq-mod-label">Mission Log</div>
              <div className="hq-mod-code">M-LOG // TACTICAL CAREER</div>
            </div>

            <div className="hq-mod" data-navigate="vault">
              <div className="hq-mod-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="hq-mod-label">Project Vault</div>
              <div className="hq-mod-code">P-VLT // DEPLOYED CASES</div>
            </div>

            <div className="hq-mod" data-navigate="knowledge">
              <div className="hq-mod-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 15 8.5 17.5 9.5 13.5 6.5 10.5 10.5 10 12 6.5 13.5 10 17.5 10.5 14.5 13.5 15.5 17.5 12 15" />
                </svg>
              </div>
              <div className="hq-mod-label">Knowledge Hub</div>
              <div className="hq-mod-code">K-HUB // VERIFIED CERTS</div>
            </div>

            <div className="hq-mod" id="hq-mod-ai-btn">
              <div className="hq-mod-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="hq-mod-label">NEXUS AI</div>
              <div className="hq-mod-code">N-AI // COGNITIVE COPILOT</div>
            </div>
          </div>

          <div className="hq-feed" id="status-feed"></div>
        </section>

        {/* ─── 2. IDENTITY CORE (ID-CORE) ─── */}
        <section id="section-identity" className="section" data-module="id-core">
          <div className="container">
            <div className="section-hdr">
              <div className="section-hdr-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="section-hdr-text">
                <h2>IDENTITY CORE</h2>
                <div className="section-code">// ID-CORE // DIGITAL TWIN & SYSTEM DOSSIER</div>
              </div>
            </div>

            <div className="id-grid">
              {/* Holographic Avatar Scanner */}
              <div className="id-avatar-zone">
                <div className="id-scanner">
                  <div className="id-avatar-ring"></div>
                  <div className="id-scan-line"></div>
                  <div className="id-avatar" id="avatar-display">
                    👨‍💻
                  </div>
                  <div className="id-status-dot" title="Operational: Active"></div>
                </div>

                <div className="id-level">
                  <span>⚡</span>
                  <span className="id-level-txt">LEVEL 28 // SENIOR ARCHITECT</span>
                </div>

                <div className="id-xp">
                  <div className="id-xp-lbl">
                    <span>XP PROGRESSION</span>
                    <span>88 / 100</span>
                  </div>
                  <div className="id-xp-track">
                    <div className="id-xp-fill" id="identity-xp-fill"></div>
                  </div>
                </div>

                <div className="id-indicators" id="identity-indicators"></div>
              </div>

              {/* Dossier & Pillars */}
              <div>
                <div className="id-terminal">
                  <div className="terminal-hdr">
                    <div className="terminal-dot r"></div>
                    <div className="terminal-dot y"></div>
                    <div className="terminal-dot g"></div>
                    <div className="terminal-path">dossier.sys // Identity Core Terminal</div>
                  </div>
                  <div className="id-terminal-body" id="bio-terminal"></div>
                </div>

                <div className="id-specs">
                  <h3>ENGINEERING PILLARS & SPECIALIZATIONS</h3>
                  <div className="id-specs-grid" id="identity-pillars"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. ENGINEERING CORE (ENG-CORE / KNOWLEDGE TOPOLOGY) ─── */}
        <section id="section-matrix" className="section" data-module="t-mtx">
          <EngineeringCoreSection
            onUnlockAchievement={(achId) => {
              if (typeof window !== "undefined" && (window as unknown as { unlockAchievement?: (id: string) => void }).unlockAchievement) {
                (window as unknown as { unlockAchievement: (id: string) => void }).unlockAchievement(achId);
              }
            }}
          />
        </section>

        {/* ─── 4. MISSION LOG (M-LOG) ─── */}
        <section id="section-missions" className="section" data-module="m-log">
          <div className="container">
            <div className="section-hdr">
              <div className="section-hdr-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="section-hdr-text">
                <h2>MISSION LOG</h2>
                <div className="section-code">// M-LOG // JORNADA, GRADUAÇÕES & FORMAÇÃO TECH</div>
              </div>
            </div>

            <MissionsSection
              onUnlockAchievement={(achId) => {
                if (typeof window !== "undefined" && (window as unknown as { unlockAchievement?: (id: string) => void }).unlockAchievement) {
                  (window as unknown as { unlockAchievement: (id: string) => void }).unlockAchievement(achId);
                }
              }}
            />
          </div>
        </section>

        {/* ─── 5. PROJECT VAULT (P-VLT) ─── */}
        <section id="section-vault" className="section" data-module="p-vlt">
          <div className="container">
            <div className="section-hdr">
              <div className="section-hdr-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="section-hdr-text">
                <h2>PROJECT VAULT</h2>
                <div className="section-code">// P-VLT // REPOSITÓRIOS GITHUB & SISTEMAS DEPLOYADOS</div>
              </div>
            </div>

            <VaultSection
              onUnlockAchievement={(achId) => {
                if (typeof window !== "undefined" && (window as unknown as { unlockAchievement?: (id: string) => void }).unlockAchievement) {
                  (window as unknown as { unlockAchievement: (id: string) => void }).unlockAchievement(achId);
                }
              }}
            />
          </div>
        </section>

        {/* ─── 6. KNOWLEDGE HUB (K-HUB) ─── */}
        <section id="section-knowledge" className="section" data-module="k-hub">
          <div className="container">
            <div className="section-hdr">
              <div className="section-hdr-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 15 8.5 17.5 9.5 13.5 6.5 10.5 10.5 10 12 6.5 13.5 10 17.5 10.5 14.5 13.5 15.5 17.5 12 15" />
                </svg>
              </div>
              <div className="section-hdr-text">
                <h2>KNOWLEDGE HUB</h2>
                <div className="section-code">// K-HUB // CERTIFICAÇÕES PROFISSIONAIS & CONQUISTAS</div>
              </div>
            </div>

            <div className="hub-layout">
              <div>
                <div className="hub-section-title">Certificações Profissionais Verificadas</div>
                <div className="hub-cert-grid" id="hub-certs-grid"></div>
              </div>

              <div style={{ marginTop: "var(--sp-2xl)" }}>
                <div className="hub-section-title">Medalhas de Conquista (Gamificado)</div>
                <div className="hub-ach-grid" id="hub-achievements-grid"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ NEXUS AI OFFICIAL DIGITAL COMPANION — NEX ═══ */}
      <div
        className="nex-companion-wrap state-idle"
        id="ai-toggle"
        role="button"
        tabIndex={0}
        aria-label="Assistente IA Oficial NEX"
        title="Clique para conversar com o NEX"
      >
        {/* Holographic Speech / Thought Bubble */}
        <div className="nex-speech-bubble" id="companion-bubble">
          <div className="nex-bubble-header">
            <span className="nex-bubble-badge">NEX AI</span>
            <span className="nex-bubble-dot"></span>
          </div>
          <div className="nex-bubble-text" id="companion-bubble-text">
            Olá! Eu sou o NEX.
          </div>
          <div className="nex-bubble-arrow"></div>
        </div>

        {/* Floating Living NEX Character */}
        <div className="nex-entity" id="companion-bot">
          {/* Holographic Energy Aura Orbit */}
          <div className="nex-energy-ring" id="bot-halo"></div>

          {/* Official NEX Cybernetic Body Image */}
          <img
            src="/nex-ui-avatar.svg"
            alt="NEX — Assistente IA Oficial"
            className="nex-body-img"
            id="nex-body-img"
          />

          {/* Thruster Jet Exhaust Plasma */}
          <div className="nex-thruster-exhaust">
            <span className="exhaust-flame flame-left"></span>
            <span className="exhaust-flame flame-right"></span>
          </div>
        </div>

        {/* Dynamic Holographic Ground Shadow */}
        <div className="nex-ground-shadow" id="companion-shadow"></div>
      </div>

      <div className="ai-chat-window" id="ai-chat-window">
        <div className="ai-chat-header">
          <div className="ai-avatar-core">
            <img src="/nex-ui-avatar.svg" alt="NEX" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div>
            <div className="ai-header-title">NEX // ASSISTENTE IA OFICIAL</div>
            <div className="ai-header-status">● NEURAL CORE ONLINE</div>
          </div>
        </div>

        <div className="ai-messages-area" id="ai-messages"></div>
        <div className="ai-prompts" id="ai-prompts"></div>

        <div className="ai-input-form">
          <input
            className="ai-input-field"
            id="ai-input"
            type="text"
            placeholder="Inquire about architecture, stack, projects..."
          />
          <button className="ai-send-action" id="ai-send" aria-label="Send Inquiry">
            ▶
          </button>
        </div>
      </div>

      {/* ═══ PROJECT VAULT DEEP INSPECTION MODAL ═══ */}
      <div className="vault-modal-overlay" id="vault-modal-overlay">
        <div className="vault-modal-container" id="vault-modal-container">
          <button className="vault-modal-close" id="vault-modal-close" aria-label="Close Modal">
            ✕
          </button>
          <div className="vault-modal-content" id="vault-modal-content"></div>
        </div>
      </div>

      {/* ═══ COMMAND PALETTE HUD (Cmd+K) ═══ */}
      <div className="palette-overlay" id="palette-overlay">
        <div className="palette-box">
          <div className="palette-search-wrap">
            <span className="palette-icon-search">🔍</span>
            <input
              className="palette-input-box"
              id="palette-input"
              type="text"
              placeholder="Type a command or jump to module..."
            />
            <span className="palette-esc-badge">ESC</span>
          </div>
          <div className="palette-items-list" id="palette-results"></div>
          <div className="palette-footer-bar">
            <div>
              <span
                style={{
                  border: "1px solid var(--border-subtle)",
                  padding: "1px 4px",
                  borderRadius: "2px",
                }}
              >
                ↑↓
              </span>{" "}
              Navigate &nbsp;{" "}
              <span
                style={{
                  border: "1px solid var(--border-subtle)",
                  padding: "1px 4px",
                  borderRadius: "2px",
                }}
              >
                ↵
              </span>{" "}
              Execute
            </div>
            <div>NEXUS OS v3.0</div>
          </div>
        </div>
      </div>

      {/* ═══ TOAST NOTIFICATION STACK ═══ */}
      <div id="toast-container"></div>
    </>
  );
}
