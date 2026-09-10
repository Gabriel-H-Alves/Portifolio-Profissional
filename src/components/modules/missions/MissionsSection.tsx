"use client";

import React, { useState, useEffect } from "react";
import { getComputedTimeline } from "@/data/timeline";
import { MissionLogItem } from "@/types/timeline.types";
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Award, 
  TrendingUp,
  BookOpen,
  Code2,
  Check
} from "lucide-react";

interface MissionsSectionProps {
  onUnlockAchievement?: (id: string) => void;
}

export function MissionsSection({ onUnlockAchievement }: MissionsSectionProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [timelineItems, setTimelineItems] = useState<MissionLogItem[]>([]);

  useEffect(() => {
    setTimelineItems(getComputedTimeline());
  }, []);

  const filteredTimeline = timelineItems.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <div className="mission-integrated-layout">
      
      {/* ─── Filter Tabs & Counter ─── */}
      <div className="mission-filters-bar">
        <div className="mission-filters">
          <button
            onClick={() => setFilter("all")}
            className={`mission-filter-btn ${filter === "all" ? "active" : ""}`}
          >
            <BookOpen size={13} style={{ marginRight: "4px" }} />
            Todas as Formações
            <span className="mission-filter-count">{timelineItems.length}</span>
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`mission-filter-btn ${filter === "active" ? "active" : ""}`}
          >
            <Clock size={13} style={{ marginRight: "4px" }} />
            Em Andamento
            <span className="mission-filter-count">
              {timelineItems.filter((t) => t.status === "active").length}
            </span>
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`mission-filter-btn ${filter === "completed" ? "active" : ""}`}
          >
            <CheckCircle2 size={13} style={{ marginRight: "4px" }} />
            Concluídas
            <span className="mission-filter-count">
              {timelineItems.filter((t) => t.status === "completed").length}
            </span>
          </button>
        </div>
      </div>

      {/* ─── Timeline Track & Cards ─── */}
      <div className="mission-track">
        {filteredTimeline.map((item) => {
          const isActive = item.status === "active";

          return (
            <div key={item.id} className="mission-entry visible">
              
              {/* Beacon */}
              <div className="mission-beacon">
                <div className={`mission-beacon-inner ${isActive ? "beacon-active" : ""}`}></div>
              </div>

              {/* Mission Card */}
              <div className="mission-card">
                
                {/* Header Bar */}
                <div className="mission-card-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span className="badge badge-amber">{item.code}</span>
                    <span style={{ fontSize: "11px", color: "var(--starlight)" }}>{item.timeframe}</span>
                  </div>

                  <span className={`badge ${isActive ? "badge-green" : "badge-amber"}`}>
                    {isActive ? (
                      <>
                        <Clock size={11} style={{ marginRight: "3px" }} />
                        Em Curso ({item.progressPct}%)
                      </>
                    ) : (
                      <>
                        <Check size={11} style={{ marginRight: "3px" }} />
                        Concluído (100%)
                      </>
                    )}
                  </span>
                </div>

                {/* Body Content */}
                <div className="mission-card-body">
                  
                  {/* Role Title & Institution */}
                  <h3 className="mission-card-role">
                    {item.role}
                  </h3>

                  <div className="mission-card-company">
                    <Building2 size={13} color="var(--ml-amber)" />
                    <span style={{ color: "var(--starlight)", fontWeight: 600 }}>{item.company}</span>
                    <span style={{ color: "var(--asteroid)" }}>•</span>
                    <Calendar size={12} color="var(--asteroid)" />
                    <span style={{ color: "var(--asteroid)" }}>{item.duration}</span>
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="mission-progress-box">
                    <div className="mission-progress-label-row">
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <TrendingUp size={12} color={isActive ? "var(--tm-green)" : "var(--ml-amber)"} />
                        Progresso Acadêmico
                      </span>
                      <strong>
                        {item.progressPct}% {item.status === "completed" ? "— Formado" : "— Em Evolução"}
                      </strong>
                    </div>
                    <div className="mission-progress-track">
                      <div
                        className="mission-progress-fill"
                        style={{ 
                          width: `${item.progressPct}%`,
                          background: isActive 
                            ? "linear-gradient(90deg, var(--ml-amber), var(--tm-green))" 
                            : "linear-gradient(90deg, var(--ml-amber), #FFD700)"
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Briefing */}
                  <p className="mission-card-briefing">
                    {item.briefing}
                  </p>

                  {/* Intel Grid */}
                  <div className="mission-card-intel">
                    {item.intel.map((metric, mIdx) => (
                      <div key={mIdx} className="mission-intel-item">
                        <div className="mission-intel-val">{metric.val}</div>
                        <div className="mission-intel-lbl">{metric.lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* Competências & Tecnologias Adquiridas */}
                  <div>
                    <div style={{ fontSize: "10px", color: "var(--asteroid)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Code2 size={11} color="var(--ml-amber)" />
                      Competências & Tecnologias Adquiridas
                    </div>
                    <div className="mission-card-stack">
                      {item.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="badge badge-amber" style={{ fontSize: "10px", padding: "3px 8px" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
