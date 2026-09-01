"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Position,
  Handle,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { skills, skillCategories, neuralLinks } from "@/data/skills";
import { SkillCategory, SkillNode } from "@/types/skills.types";
import { Network, Grid, Share2, Sparkles, Layers } from "lucide-react";

// Custom Cyber Node for React Flow
function CyberSkillNode({ data }: { data: SkillNode }) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "master":
        return "text-cyber-gold border-cyber-gold/40 bg-cyber-gold/10";
      case "expert":
        return "text-cyber-green border-cyber-green/40 bg-cyber-green/10";
      case "advanced":
        return "text-cyber-cyan border-cyber-cyan/40 bg-cyber-cyan/10";
      default:
        return "text-cyber-violet border-cyber-violet/40 bg-cyber-violet/10";
    }
  };

  return (
    <div className="relative px-3.5 py-2.5 rounded-xl border border-cyber-green-dim bg-space-void/95 text-starlight font-mono shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(0,255,136,0.15)] min-w-[150px] transition-all hover:scale-105 hover:border-cyber-green">
      <Handle type="target" position={Position.Top} className="!bg-cyber-green !w-2 !h-2" />
      
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-xl">{data.icon}</span>
        <div className="truncate">
          <div className="text-xs font-bold text-starlight truncate">{data.name}</div>
          <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-bold border ${getTierColor(data.tier)}`}>
            {data.tier}
          </span>
        </div>
      </div>

      <div className="w-full h-1 bg-space-nebula-light rounded-full overflow-hidden mb-1">
        <div 
          className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan" 
          style={{ width: `${data.xp}%` }} 
        />
      </div>

      <div className="flex justify-between text-[9px] text-asteroid">
        <span>XP: {data.xp}%</span>
        <span>{data.years} anos</span>
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-cyber-green !w-2 !h-2" />
    </div>
  );
}

const nodeTypes = {
  cyberSkill: CyberSkillNode,
};

interface MatrixSectionProps {
  onUnlockAchievement: (id: string) => void;
}

export function MatrixSection({ onUnlockAchievement }: MatrixSectionProps) {
  const [viewMode, setViewMode] = useState<"neural" | "grid">("neural");
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // React Flow Nodes
  const initialNodes: Node[] = useMemo(() => {
    return skills.map((skill) => ({
      id: skill.id,
      type: "cyberSkill",
      position: { x: skill.x * 1.5, y: skill.y * 1.3 },
      data: skill,
    }));
  }, []);

  // React Flow Edges
  const initialEdges: Edge[] = useMemo(() => {
    return neuralLinks.map((link, idx) => ({
      id: `e-${link.source}-${link.target}-${idx}`,
      source: link.source,
      target: link.target,
      animated: true,
      style: { stroke: "rgba(0, 255, 136, 0.4)", strokeWidth: 1.5 },
    }));
  }, []);

  const handleNodeClick = useCallback(() => {
    onUnlockAchievement("skill_scanner");
  }, [onUnlockAchievement]);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-green/15 border border-cyber-green-dim flex items-center justify-center text-cyber-green shadow-[0_0_12px_rgba(0,255,136,0.25)]">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-starlight">
              TECH MATRIX
            </h2>
            <div className="text-[11px] text-asteroid tracking-widest uppercase">
              // T-MTX // GRAFO NEURAL INTERATIVO & CAPABILIDADES
            </div>
          </div>
        </div>

        {/* View Switcher: React Flow vs Grid */}
        <div className="flex items-center gap-1 p-1 rounded-lg border border-border bg-space-void">
          <button
            onClick={() => setViewMode("neural")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${
              viewMode === "neural"
                ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/40 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                : "text-asteroid hover:text-starlight"
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>GRAFO NEURAL</span>
          </button>

          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${
              viewMode === "grid"
                ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/40 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                : "text-asteroid hover:text-starlight"
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>GRADE DE CLUSTERS</span>
          </button>
        </div>
      </div>

      {/* View Content */}
      {viewMode === "neural" ? (
        <div className="relative w-full h-[540px] rounded-2xl border border-border/80 bg-space-void overflow-hidden shadow-2xl">
          {/* Overlay Info */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-cyber-green-dim bg-cyber-green/10 text-cyber-green text-[10px] font-bold tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>GRAFO SINÁPTICO DINÂMICO (REACT FLOW)</span>
            </div>
            <span className="text-[10px] text-asteroid">
              Arraste nós e explore sinapses interconectadas em tempo real.
            </span>
          </div>

          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            onNodeClick={handleNodeClick}
            fitView
            attributionPosition="bottom-right"
            className="bg-space-deep"
          >
            <Background color="#10102A" gap={24} size={1} variant={BackgroundVariant.Dots} />
            <Controls className="!bg-space-void !border-border !fill-asteroid" />
            <MiniMap 
              nodeColor="#00FF88" 
              maskColor="rgba(4, 4, 10, 0.85)"
              className="!bg-space-void !border-border !rounded-lg"
            />
          </ReactFlow>
        </div>
      ) : (
        <div>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "border-cyber-green-dim bg-cyber-green/15 text-cyber-green shadow-[0_0_12px_rgba(0,255,136,0.2)]"
                    : "border-border text-asteroid hover:border-asteroid hover:text-starlight"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-4 rounded-xl border border-border/80 bg-space-void/80 hover:bg-space-void hover:border-cyber-green-dim hover:-translate-y-1 transition-all flex flex-col items-center text-center group shadow-md"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="font-heading text-sm font-bold text-starlight mb-1">
                  {skill.name}
                </h4>
                <div className="text-[10px] text-cyber-green uppercase font-mono font-bold mb-2">
                  {skill.tier}
                </div>
                <div className="w-full h-1 bg-space-nebula-light rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan"
                    style={{ width: `${skill.xp}%` }}
                  />
                </div>
                <div className="flex justify-between w-full text-[9px] text-asteroid mt-1">
                  <span>{skill.xp}% XP</span>
                  <span>{skill.years} anos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
