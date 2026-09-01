"use client";

import React from "react";
import { certifications, visitorAchievements } from "@/data/achievements";
import { Award, CheckCircle, Lock, ExternalLink, ShieldCheck, Trophy, Sparkles } from "lucide-react";

interface KnowledgeSectionProps {
  unlockedAchievements: string[];
}

export function KnowledgeSection({ unlockedAchievements }: KnowledgeSectionProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-gold/15 border border-cyber-gold-dim flex items-center justify-center text-cyber-gold shadow-[0_0_12px_rgba(255,215,0,0.25)]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-starlight">
              KNOWLEDGE HUB
            </h2>
            <div className="text-[11px] text-asteroid tracking-widest uppercase">
              // K-HUB // CREDENCIAIS PROFISSIONAIS & EMBLEMAS DO VISITANTE
            </div>
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-gold/40 bg-cyber-gold/10 text-cyber-gold text-xs font-bold shadow-[0_0_10px_rgba(255,215,0,0.15)]">
          <Trophy className="w-3.5 h-3.5" />
          <span>AUTORIZAÇÃO: {unlockedAchievements.length} / {visitorAchievements.length} EMBLEMAS</span>
        </div>
      </div>

      {/* 1. Verified Certifications */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-bold text-starlight uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4 text-cyber-gold" />
          <span>🎓 Credenciais Profissionais Verificadas</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl border border-border/80 bg-space-void/90 hover:border-cyber-gold-dim hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold border border-cyber-gold/40 bg-cyber-gold/10 text-cyber-gold uppercase">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading text-sm font-bold text-starlight leading-snug group-hover:text-cyber-gold transition-colors mb-1">
                  {cert.name}
                </h3>
                <div className="text-[11px] text-asteroid mb-4">
                  {cert.issuer} • {cert.date}
                </div>
              </div>

              <div className="text-[10px] text-cyber-gold/80 flex items-center gap-1 font-bold pt-2 border-t border-border/50">
                <CheckCircle className="w-3.5 h-3.5 text-cyber-gold" />
                <span>CERTIFICAÇÃO OFICIAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Visitor Gamified Badges */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-starlight uppercase tracking-wider mb-4">
          <Trophy className="w-4 h-4 text-cyber-gold" />
          <span>🎮 Emblemas de Autorização do Visitante (Gamificado)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visitorAchievements.map((ach) => {
            const isUnlocked = unlockedAchievements.includes(ach.id);
            return (
              <div
                key={ach.id}
                className={`p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? "border-cyber-gold/40 bg-cyber-gold/10 shadow-[0_0_15px_rgba(255,215,0,0.15)]"
                    : "border-border/60 bg-space-void/50 opacity-60"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0 border ${
                  isUnlocked 
                    ? "bg-cyber-gold/20 border-cyber-gold/50 text-cyber-gold shadow-[0_0_10px_rgba(255,215,0,0.3)]" 
                    : "bg-space-deep border-border text-asteroid"
                }`}>
                  {isUnlocked ? ach.icon : <Lock className="w-4 h-4 text-asteroid" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="font-heading text-sm font-bold text-starlight truncate">
                      {ach.name}
                    </h4>
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${
                      isUnlocked 
                        ? "text-cyber-gold border-cyber-gold/40 bg-cyber-gold/20" 
                        : "text-asteroid border-border bg-space-deep"
                    }`}>
                      {isUnlocked ? "DESBLOQUEADO" : "BLOQUEADO"}
                    </span>
                  </div>
                  <p className="text-[11px] text-asteroid leading-normal">
                    {ach.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
