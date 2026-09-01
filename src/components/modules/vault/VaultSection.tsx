"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectItem } from "@/types/projects.types";
import { 
  FolderGit2, 
  ExternalLink, 
  GitBranch, 
  Maximize2, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp,
  Cpu
} from "lucide-react";

interface VaultSectionProps {
  onUnlockAchievement: (id: string) => void;
}

export function VaultSection({ onUnlockAchievement }: VaultSectionProps) {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    onUnlockAchievement("deep_diver");
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-violet/15 border border-cyber-violet-dim flex items-center justify-center text-cyber-violet shadow-[0_0_12px_rgba(139,92,246,0.25)]">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-starlight">
              PROJECT VAULT
            </h2>
            <div className="text-[11px] text-asteroid tracking-widest uppercase">
              // P-VLT // SISTEMAS DEPLOYADOS & ARQUITETURAS DE ENGENHARIA
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "all"
                ? "bg-cyber-violet/20 text-cyber-violet border border-cyber-violet-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            TODOS OS PROJETOS
          </button>
          <button
            onClick={() => setFilter("ai")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "ai"
                ? "bg-cyber-violet/20 text-cyber-violet border border-cyber-violet-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            IA & NEURAL
          </button>
          <button
            onClick={() => setFilter("automation")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "automation"
                ? "bg-cyber-violet/20 text-cyber-violet border border-cyber-violet-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            ROBÓTICA & IOT
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
              filter === "web"
                ? "bg-cyber-violet/20 text-cyber-violet border border-cyber-violet-dim"
                : "border border-border text-asteroid hover:text-starlight"
            }`}
          >
            WEB & PLATAFORMAS
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group p-5 rounded-2xl border border-border/80 bg-space-void/90 hover:border-cyber-violet-dim hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Card Bar */}
              <div className="flex items-center justify-between border-b border-border/50 pb-2.5 mb-3 text-[10px] text-asteroid">
                <span className="text-cyber-violet font-bold">{project.id}</span>
                <span>{project.spec}</span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-3 mb-2.5">
                <span className="text-2xl">{project.icon}</span>
                <h3 className="font-heading text-lg font-bold text-starlight leading-snug group-hover:text-cyber-violet transition-colors">
                  {project.name}
                </h3>
              </div>

              {/* Short Description */}
              <p className="text-xs text-asteroid leading-relaxed mb-4">
                {project.desc}
              </p>
            </div>

            <div>
              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded border border-border/60 bg-white/[0.02] text-[10px] text-asteroid"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleOpenProject(project)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-cyber-violet-dim bg-cyber-violet/10 hover:bg-cyber-violet hover:text-space-deep text-cyber-violet text-xs font-bold transition-all shadow-[0_0_10px_rgba(139,92,246,0.15)]"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>INSPECIONAR ARQUITETURA</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Inspection Modal (Dialog) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-space-deep/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="fixed inset-0" 
            onClick={() => setSelectedProject(null)} 
            aria-hidden="true" 
          />

          <div className="relative w-full max-w-2xl rounded-2xl border border-cyber-violet-dim bg-space-void shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.25)] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto font-mono space-y-5 animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedProject.icon}</span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-starlight">
                    {selectedProject.name}
                  </h3>
                  <div className="text-xs text-cyber-violet font-mono mt-0.5">
                    {selectedProject.spec} • {selectedProject.id}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg border border-border text-asteroid hover:text-starlight hover:border-asteroid"
                aria-label="Fechar modal de inspeção"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Deep Description */}
            <div>
              <div className="text-[11px] text-asteroid uppercase tracking-wider mb-1 font-bold">
                // VISÃO GERAL DA ARQUITETURA
              </div>
              <p className="text-xs sm:text-sm text-starlight/90 leading-relaxed">
                {selectedProject.fullDesc}
              </p>
            </div>

            {/* Engineering Breakdown: Problem / Solution / Result */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl border border-border/60 bg-space-deep/60">
                <div className="flex items-center gap-2 text-xs font-bold text-cyber-amber mb-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>Desafio de Engenharia:</span>
                </div>
                <p className="text-xs text-starlight/80 leading-relaxed pl-6">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-border/60 bg-space-deep/60">
                <div className="flex items-center gap-2 text-xs font-bold text-cyber-cyan mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Solução Arquitetural:</span>
                </div>
                <p className="text-xs text-starlight/80 leading-relaxed pl-6">
                  {selectedProject.solution}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-border/60 bg-space-deep/60">
                <div className="flex items-center gap-2 text-xs font-bold text-cyber-green mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Impacto & Resultados Mensuráveis:</span>
                </div>
                <p className="text-xs text-starlight/80 leading-relaxed pl-6">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="text-[11px] text-asteroid uppercase tracking-wider mb-2 font-bold">
                // STACK TÉCNICO EMPREGADO
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded border border-cyber-violet/30 bg-cyber-violet/10 text-cyber-violet text-xs font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
