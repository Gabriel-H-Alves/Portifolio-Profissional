"use client";

import React, { useState } from "react";
import { timeline } from "@/data/timeline";
import { Clock, Shield, Calendar, Award, Building, CheckCircle2, ChevronRight } from "lucide-react";

interface MissionsSectionProps {
  onUnlockAchievement: (id: string) => void;
}

export function MissionsSection({ onUnlockAchievement }: MissionsSectionProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTimeline = timeline.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-amber/15 border border-cyber-amber-dim flex items-center justify-center text-cyber-amber shadow-[0_0_12px_rgba(255,184,0,0.25)]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-starlight">
              MISSION LOG
            </h2>
            <div className="text-[11px] text-asteroid tracking-widest uppercase">
              // M-LOG // REGISTROS TÁTICOS CRONOLÓGICOS DE CARREIRA
            </div>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "all"
                ? "bg-cyber-amber/20 text-cyber-amber border border-cyber-amber-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            TODAS AS MISSÕES
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "active"
                ? "bg-cyber-green/20 text-cyber-green border border-cyber-green-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            OPERAÇÃO ATIVA
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "completed"
                ? "bg-cyber-amber/20 text-cyber-amber border border-cyber-amber-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            CONCLUÍDAS
          </button>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:top-3 before:bottom-3 before:left-2 sm:before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-cyber-amber before:via-space-nebula-light before:to-transparent">
        {filteredTimeline.map((mission, idx) => {
          const isActive = mission.status === "active";
          return (
            <div
              key={mission.id}
              className="relative group animate-in fade-in slide-in-from-bottom-3 duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Timeline Beacon Point */}
              <div
                className={`absolute -left-[27px] sm:-left-[35px] top-4 w-4 h-4 rounded-full border-2 bg-space-deep transition-all ${
                  isActive
                    ? "border-cyber-green shadow-[0_0_12px_rgba(0,255,136,0.6)] animate-pulse"
                    : "border-cyber-amber"
                }`}
              />

              {/* Mission Card */}
              <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-space-void/90 hover:border-cyber-amber-dim transition-all shadow-lg space-y-4">
                
                {/* Header: Code, Status, Classification */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-cyber-amber">{mission.code}</span>
                    <span className="text-asteroid">•</span>
                    <span className="text-starlight/90">{mission.id}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        isActive
                          ? "bg-cyber-green/15 text-cyber-green border border-cyber-green/40"
                          : "bg-white/[0.05] text-asteroid border border-border"
                      }`}
                    >
                      {isActive ? "EM OPERAÇÃO ATIVA" : "CONCLUÍDO"}
                    </span>
                    <span className="text-[10px] text-asteroid border border-border px-1.5 py-0.5 rounded">
                      {mission.classification}
                    </span>
                  </div>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-starlight">
                    {mission.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-asteroid mt-1">
                    <Building className="w-3.5 h-3.5 text-cyber-amber" />
                    <span className="text-starlight/80 font-medium">{mission.company}</span>
                    <span>•</span>
                    <Calendar className="w-3.5 h-3.5 text-asteroid" />
                    <span>{mission.timeframe} ({mission.duration})</span>
                  </div>
                </div>

                {/* Tactical Briefing */}
                <p className="text-xs sm:text-sm text-starlight/80 leading-relaxed">
                  {mission.briefing}
                </p>

                {/* Operational Intel Metrics */}
                <div className="grid grid-cols-3 gap-3 p-3 rounded-xl border border-border/50 bg-space-deep/60 text-center">
                  {mission.intel.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-sm sm:text-base font-bold text-cyber-amber">
                        {metric.val}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-asteroid uppercase">
                        {metric.lbl}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mission.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded border border-border/60 bg-white/[0.02] text-[10px] text-asteroid font-mono hover:text-starlight hover:border-asteroid transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
