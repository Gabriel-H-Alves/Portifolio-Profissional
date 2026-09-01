"use client";

import React, { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { SectionModule } from "@/hooks/useNexusState";
import {
  User,
  Network,
  Clock,
  FolderGit2,
  ShieldCheck,
  Award,
  Bot,
  FileDown,
  ArrowRight,
  Activity,
  Terminal,
} from "lucide-react";

interface HqSectionProps {
  onNavigate: (section: SectionModule) => void;
  onOpenAi: () => void;
}

export function HqSection({ onNavigate, onOpenAi }: HqSectionProps) {
  const [timeString, setTimeString] = useState("--:--:--");
  const [typewriterText, setTypewriterText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Live UTC-3 Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTimeString(timeFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentFullTitle = profile.titles[titleIndex] || profile.title;
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentFullTitle.length) {
          setTypewriterText(currentFullTitle.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentFullTitle.slice(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % profile.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Top HUD Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-asteroid border-b border-border/60 pb-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <span className="text-starlight font-bold">SYS.NODE:</span>
            <span className="text-cyber-cyan">SAO_PAULO_01</span>
          </div>
          <div className="hidden sm:inline">
            <span className="text-starlight">COORD:</span> {profile.coordinates.lat}, {profile.coordinates.lon}
          </div>
          <div className="hidden md:inline">
            <span className="text-starlight">CREDENCIAL:</span> {profile.clearance}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <span className="text-starlight">SYS.CLOCK (BRT):</span>{" "}
            <span className="text-cyber-cyan font-bold">{timeString}</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyber-green font-bold">
            <Activity className="w-3.5 h-3.5" />
            <span>100% OPERACIONAL</span>
          </div>
        </div>
      </div>

      {/* Center Hero */}
      <div className="my-auto py-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-cyan-dim bg-cyber-cyan-glow text-cyber-cyan text-xs tracking-widest mb-6 uppercase animate-pulse">
          <Terminal className="w-3.5 h-3.5" />
          <span>// CENTRO DE COMANDO IA // BEM-VINDO</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-starlight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-starlight via-cyber-cyan to-cyber-blue">
            GABRIEL HENRIQUE
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl text-asteroid font-heading font-medium tracking-normal mt-1">
            ALVES ROCHA
          </span>
        </h1>

        {/* Typewriter Title */}
        <div className="h-8 flex items-center justify-center font-mono text-sm sm:text-lg md:text-xl text-cyber-cyan mb-8">
          <span>&gt; {typewriterText}</span>
          <span className="w-2.5 h-5 bg-cyber-cyan ml-1 animate-[cursorBlink_1s_step-end_infinite]" />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => onNavigate("identity")}
            className="btn-cyber-primary"
          >
            <span>EXPLORAR ID-CORE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-outline"
          >
            <FileDown className="w-4 h-4" />
            <span>CURRÍCULO EXECUTIVO [PDF]</span>
          </a>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          <div className="p-4 rounded-xl border border-border/80 bg-space-void/80 backdrop-blur-md text-center hover:border-cyber-cyan-dim transition-all">
            <div className="font-display text-2xl sm:text-3xl font-black text-cyber-cyan">
              {profile.stats.yearsExperience}+
            </div>
            <div className="text-[11px] text-asteroid uppercase tracking-wider mt-1">
              Anos de Experiência
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border/80 bg-space-void/80 backdrop-blur-md text-center hover:border-cyber-blue-dim transition-all">
            <div className="font-display text-2xl sm:text-3xl font-black text-cyber-blue">
              {profile.stats.projectsDelivered}+
            </div>
            <div className="text-[11px] text-asteroid uppercase tracking-wider mt-1">
              Projetos Entregues
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border/80 bg-space-void/80 backdrop-blur-md text-center hover:border-cyber-green-dim transition-all">
            <div className="font-display text-2xl sm:text-3xl font-black text-cyber-green">
              {profile.stats.technologies}
            </div>
            <div className="text-[11px] text-asteroid uppercase tracking-wider mt-1">
              Tecnologias Dominadas
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border/80 bg-space-void/80 backdrop-blur-md text-center hover:border-cyber-gold-dim transition-all">
            <div className="font-display text-2xl sm:text-3xl font-black text-cyber-gold">
              {profile.stats.certifications}
            </div>
            <div className="text-[11px] text-asteroid uppercase tracking-wider mt-1">
              Certificações Oficiais
            </div>
          </div>
        </div>
      </div>

      {/* Modules Shortcut Grid */}
      <div className="pt-6 border-t border-border/60">
        <div className="text-[10px] text-asteroid uppercase tracking-widest mb-3 font-bold">
          // ACESSO RÁPIDO AOS SUBSISTEMAS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => onNavigate("identity")}
            className="p-3 rounded-lg border border-border bg-space-void/60 hover:bg-cyber-blue-glow hover:border-cyber-blue-dim text-left group transition-all"
          >
            <User className="w-4 h-4 text-cyber-blue mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-starlight">ID Core</div>
            <div className="text-[9px] text-asteroid">Dossiê Digital</div>
          </button>

          <button
            onClick={() => onNavigate("matrix")}
            className="p-3 rounded-lg border border-border bg-space-void/60 hover:bg-cyber-green-glow hover:border-cyber-green-dim text-left group transition-all"
          >
            <Network className="w-4 h-4 text-cyber-green mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-starlight">Tech Matrix</div>
            <div className="text-[9px] text-asteroid">Grafo Neural</div>
          </button>

          <button
            onClick={() => onNavigate("missions")}
            className="p-3 rounded-lg border border-border bg-space-void/60 hover:bg-cyber-amber-glow hover:border-cyber-amber-dim text-left group transition-all"
          >
            <Clock className="w-4 h-4 text-cyber-amber mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-starlight">Mission Log</div>
            <div className="text-[9px] text-asteroid">Carreira Tática</div>
          </button>

          <button
            onClick={() => onNavigate("vault")}
            className="p-3 rounded-lg border border-border bg-space-void/60 hover:bg-cyber-violet-glow hover:border-cyber-violet-dim text-left group transition-all"
          >
            <FolderGit2 className="w-4 h-4 text-cyber-violet mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-starlight">Project Vault</div>
            <div className="text-[9px] text-asteroid">Arquiteturas</div>
          </button>

          <button
            onClick={() => onNavigate("cyber-lab")}
            className="p-3 rounded-lg border border-border bg-space-void/60 hover:bg-emerald-500/15 hover:border-emerald-400 text-left group transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-starlight">Cyber Lab</div>
            <div className="text-[9px] text-asteroid">Segurança em Dev</div>
          </button>

          <button
            onClick={onOpenAi}
            className="p-3 rounded-lg border border-border bg-space-void/60 hover:bg-cyber-magenta-glow hover:border-cyber-magenta-dim text-left group transition-all"
          >
            <Bot className="w-4 h-4 text-cyber-magenta mb-1.5 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-starlight">NEXUS AI</div>
            <div className="text-[9px] text-asteroid">Copiloto Cognitivo</div>
          </button>
        </div>
      </div>
    </section>
  );
}
