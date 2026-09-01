"use client";

import React, { useState } from "react";
import { cyberStudyTracks } from "@/data/cyber-lab";
import { CyberStudyTrack, CyberTopicCategory } from "@/types/cyber.types";
import { 
  ShieldCheck, 
  Lock, 
  Globe, 
  Cloud, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ExternalLink,
  ShieldAlert,
  Terminal
} from "lucide-react";

interface CyberLabSectionProps {
  onUnlockAchievement: (id: string) => void;
}

export function CyberLabSection({ onUnlockAchievement }: CyberLabSectionProps) {
  const [selectedTrackId, setSelectedTrackId] = useState<CyberTopicCategory>("owasp");

  const selectedTrack = cyberStudyTracks.find((t) => t.id === selectedTrackId) || cyberStudyTracks[0];

  const handleTrackSelect = (id: CyberTopicCategory) => {
    setSelectedTrackId(id);
    onUnlockAchievement("cyber_scholar");
  };

  const getTrackIcon = (id: CyberTopicCategory) => {
    switch (id) {
      case "owasp":
        return ShieldAlert;
      case "secure_coding":
        return Lock;
      case "web_security":
        return Globe;
      case "cloud_security":
        return Cloud;
      case "threat_intel":
        return Search;
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-starlight">
              CYBER LAB
            </h2>
            <div className="text-[11px] text-asteroid tracking-widest uppercase">
              // SEC.LAB // TRILHA DE ESPECIALIZAÇÃO EM DESENVOLVIMENTO SEGURO
            </div>
          </div>
        </div>

        {/* Framing Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
          <Terminal className="w-3.5 h-3.5" />
          <span>ÁREA DE ESTUDOS & ENGENHARIA DEFENSIVA</span>
        </div>
      </div>

      {/* Context Introduction Box */}
      <div className="p-4 sm:p-5 rounded-2xl border border-emerald-400/20 bg-space-void/90 mb-8 text-xs sm:text-sm text-starlight/85 leading-relaxed">
        <p>
          <strong className="text-emerald-400">Diretriz do Laboratório:</strong> A segurança de software é tratada como um pilar fundamental da arquitetura de sistemas contemporânea. O <strong>Cyber Lab</strong> organiza os tópicos de estudo contínuo, boas práticas de código defensivo (Secure Coding) e conformidade com padrões globais de segurança aplicados ao ciclo de vida de desenvolvimento de software de <strong>Gabriel Henrique Alves Rocha</strong>.
        </p>
      </div>

      {/* Main Grid: Track Selector Tabs + Track Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 5 Study Tracks Cards */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-[11px] text-asteroid uppercase tracking-wider font-bold mb-1">
            // TRILHAS DE APRENDIZADO ATIVAS
          </div>

          {cyberStudyTracks.map((track) => {
            const isSelected = track.id === selectedTrackId;
            const Icon = getTrackIcon(track.id);
            return (
              <button
                key={track.id}
                onClick={() => handleTrackSelect(track.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex flex-col gap-2 ${
                  isSelected
                    ? "border-emerald-400/50 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                    : "border-border bg-space-void/60 hover:bg-space-void hover:border-asteroid"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : "text-asteroid"}`} />
                    <span className="font-heading text-sm sm:text-base font-bold text-starlight">
                      {track.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    {track.progressPercent}%
                  </span>
                </div>

                <div className="w-full h-1 bg-space-nebula-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyber-cyan transition-all duration-500"
                    style={{ width: `${track.progressPercent}%` }}
                  />
                </div>

                <div className="text-[10px] text-asteroid">
                  {track.focusArea}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Track Deep Inspection */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-border/80 bg-space-void/95 space-y-6 shadow-2xl">
          
          {/* Header */}
          <div className="border-b border-border/50 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs text-emerald-400 font-bold">{selectedTrack.code}</span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold border border-emerald-400/40 bg-emerald-500/10 text-emerald-400 uppercase">
                {selectedTrack.badge}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-starlight mb-2">
              {selectedTrack.title}
            </h3>
            <p className="text-xs sm:text-sm text-asteroid leading-relaxed">
              {selectedTrack.description}
            </p>
          </div>

          {/* Topics Breakdown */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-starlight uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Tópicos & Práticas Defensivas na Trilha</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedTrack.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-4 rounded-xl border border-border/60 bg-space-deep/60 flex flex-col justify-between gap-2.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-heading text-sm font-bold text-starlight">
                        {topic.name}
                      </h4>
                      {topic.status === "concluido" ? (
                        <span title="Tópico Dominado / Praticado">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        </span>
                      ) : (
                        <span title="Em Estudo / Aperfeiçoamento">
                          <Clock className="w-3.5 h-3.5 text-cyber-amber shrink-0" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-asteroid leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {topic.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 rounded border border-border/50 text-[9px] text-asteroid font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Reference Standards */}
          <div className="p-4 rounded-xl border border-border/50 bg-space-deep/40">
            <div className="text-[11px] text-asteroid uppercase tracking-wider font-bold mb-2">
              // FONTES & DOCUMENTAÇÕES DE REFERÊNCIA
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedTrack.keyResources.map((res, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md border border-emerald-400/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono"
                >
                  {res}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
