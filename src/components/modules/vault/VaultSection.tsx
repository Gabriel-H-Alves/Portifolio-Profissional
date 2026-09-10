"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ProjectItem } from "@/types/projects.types";
import { fetchGitHubProjects } from "@/services/github.service";
import { 
  FolderGit2, 
  ExternalLink, 
  GitBranch, 
  Maximize2, 
  X, 
  Star, 
  GitFork, 
  RefreshCw, 
  Search, 
  Terminal, 
  Copy, 
  Check, 
  Code2, 
  Clock, 
  HardDrive,
  Coffee,
  Bot,
  Layers,
  Sparkles,
  BookOpen,
  Target,
  Cpu,
  CheckCircle2,
  Globe
} from "lucide-react";

interface VaultSectionProps {
  onUnlockAchievement?: (id: string) => void;
}

function renderProjectIcon(category: string, tech: string[] = []) {
  const techJoined = tech.join(" ").toLowerCase();

  if (category === "python" || techJoined.includes("python")) {
    return <Terminal size={20} color="var(--hq-cyan)" />;
  }
  if (category === "java" || techJoined.includes("java")) {
    return <Coffee size={20} color="var(--ml-amber)" />;
  }
  if (category === "automation" || techJoined.includes("uipath") || techJoined.includes("rpa")) {
    return <Bot size={20} color="var(--tm-green)" />;
  }
  if (category === "web" || techJoined.includes("react") || techJoined.includes("next")) {
    return <Layers size={20} color="var(--pv-violet)" />;
  }
  return <Code2 size={20} color="var(--pv-violet)" />;
}

export function VaultSection({ onUnlockAchievement }: VaultSectionProps) {
  const [projectsList, setProjectsList] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [syncSource, setSyncSource] = useState<"live" | "fallback">("live");
  const [lastSyncTime, setLastSyncTime] = useState<string>("");
  
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedClone, setCopiedClone] = useState<boolean>(false);

  const loadProjects = async (forceRefresh: boolean = false) => {
    if (forceRefresh) setIsRefreshing(true);
    else setIsLoading(true);

    try {
      const data = await fetchGitHubProjects();
      setProjectsList(data.projects);
      setSyncSource(data.source);
      setLastSyncTime(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    } catch (err) {
      console.error("Erro ao carregar projetos:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const formatRelativeTime = (dateStr?: string) => {
    if (!dateStr) return "Recente";
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 0) return "Hoje";
      if (diffDays === 1) return "Ontem";
      if (diffDays < 30) return `Há ${diffDays} dias`;
      if (diffDays < 365) return `Há ${Math.floor(diffDays / 30)} meses`;
      return `Há ${Math.floor(diffDays / 365)} anos`;
    } catch {
      return "Sincronizado";
    }
  };

  const isRecentlyUpdated = (dateStr?: string) => {
    if (!dateStr) return false;
    try {
      const date = new Date(dateStr);
      const diffMs = new Date().getTime() - date.getTime();
      return diffMs < 1000 * 60 * 60 * 24 * 60;
    } catch {
      return false;
    }
  };

  const filteredProjects = useMemo(() => {
    return projectsList.filter((p) => {
      const matchesFilter =
        activeFilter === "all" ||
        p.category === activeFilter ||
        (activeFilter === "python" && p.tech.some(t => t.toLowerCase().includes("python"))) ||
        (activeFilter === "java" && p.tech.some(t => t.toLowerCase().includes("java"))) ||
        (activeFilter === "automation" && (p.category === "automation" || p.tech.some(t => t.toLowerCase().includes("uipath") || t.toLowerCase().includes("rpa")))) ||
        (activeFilter === "web" && (p.category === "web" || p.tech.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("typescript") || t.toLowerCase().includes("javascript"))));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query)) ||
        p.spec.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [projectsList, activeFilter, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: projectsList.length,
      python: projectsList.filter(p => p.category === "python" || p.tech.some(t => t.toLowerCase().includes("python"))).length,
      automation: projectsList.filter(p => p.category === "automation" || p.tech.some(t => t.toLowerCase().includes("uipath") || t.toLowerCase().includes("rpa"))).length,
      web: projectsList.filter(p => p.category === "web" || p.tech.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("typescript") || t.toLowerCase().includes("javascript"))).length,
      java: projectsList.filter(p => p.category === "java" || p.tech.some(t => t.toLowerCase().includes("java"))).length,
    };
  }, [projectsList]);

  const totalStars = useMemo(() => {
    return projectsList.reduce((acc, curr) => acc + (curr.stars || 0), 0);
  }, [projectsList]);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    if (onUnlockAchievement) {
      onUnlockAchievement("deep_diver");
    }
  };

  const handleCopyClone = (url?: string) => {
    if (!url) return;
    navigator.clipboard.writeText(`git clone ${url}`);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2500);
  };

  return (
    <div className="vault-integrated-layout">
      
      {/* ═══ BARRA DE CONTROLE & STATUS DO GITHUB ═══ */}
      <div className="vault-toolbar-bar">
        
        {/* Status Strip */}
        <div className="vault-status-strip">
          <div className="vault-tele-chip">
            <span className="vault-live-dot-wrap">
              <span className="vault-live-dot-ping"></span>
              <span className="vault-live-dot"></span>
            </span>
            <span>GitHub: <strong>{syncSource === "live" ? "Conectado" : "Offline"}</strong></span>
            {lastSyncTime && (
              <span style={{ opacity: 0.6, borderLeft: "1px solid rgba(228,228,240,0.15)", paddingLeft: "6px" }}>
                {lastSyncTime}
              </span>
            )}
          </div>

          <div className="vault-tele-chip">
            <Code2 size={13} color="var(--pv-violet)" />
            <span><strong>{projectsList.length}</strong> Repositórios</span>
          </div>

          <div className="vault-tele-chip">
            <Star size={13} color="var(--ml-amber)" fill="rgba(255,184,0,0.3)" />
            <span><strong>{totalStars}</strong> Stars</span>
          </div>

          <button
            onClick={() => loadProjects(true)}
            disabled={isRefreshing || isLoading}
            className="vault-sync-btn-compact"
            title="Sincronizar com GitHub"
          >
            <RefreshCw size={12} className={isRefreshing ? "animate-spin" : ""} />
            <span>{isRefreshing ? "Atualizando..." : "Atualizar"}</span>
          </button>
        </div>

        {/* Search & Filter Tabs */}
        <div className="vault-search-filter-row">
          
          {/* Search */}
          <div className="vault-search-box">
            <div className="vault-search-icon">
              <Search size={14} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, tecnologia ou assunto..."
              className="vault-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="vault-search-clear"
                title="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="vault-filters-group">
            {[
              { id: "all", label: "Todos", icon: <FolderGit2 size={12} />, count: counts.all },
              { id: "python", label: "Python & IA", icon: <Terminal size={12} />, count: counts.python },
              { id: "automation", label: "Robótica & RPA", icon: <Bot size={12} />, count: counts.automation },
              { id: "web", label: "Web & React", icon: <Layers size={12} />, count: counts.web },
              { id: "java", label: "Java & Backend", icon: <Coffee size={12} />, count: counts.java },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`vault-filter-tab ${activeFilter === tab.id ? "active" : ""}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="vault-filter-tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ═══ GRADE DE PROJETOS ═══ */}
      {isLoading ? (
        <div className="vault-grid">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="vault-card-skeleton"></div>
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 1rem", border: "1px dashed rgba(228,228,240,0.12)", borderRadius: "var(--radius-lg)" }}>
          <Code2 size={36} color="var(--asteroid)" style={{ marginBottom: "0.8rem", opacity: 0.6 }} />
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--starlight)", margin: "0 0 0.4rem 0" }}>
            Nenhum projeto encontrado
          </h3>
          <p style={{ fontSize: "12px", color: "var(--asteroid)", marginBottom: "1.2rem" }}>
            Tente buscar por outro termo ou limpar os filtros ativos.
          </p>
          <button
            onClick={() => {
              setActiveFilter("all");
              setSearchQuery("");
            }}
            className="btn btn-outline"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="vault-grid">
          {filteredProjects.map((project) => {
            const isRecent = isRecentlyUpdated(project.updatedAt);

            return (
              <div key={project.id} className="vault-card">
                <div>
                  {/* Top Bar */}
                  <div className="vault-card-bar">
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span className="vault-card-spec">{project.id}</span>
                      {isRecent && (
                        <span className="badge badge-green" style={{ fontSize: "9px", padding: "1px 6px" }}>
                          <Sparkles size={9} />
                          Recente
                        </span>
                      )}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", color: "var(--asteroid)" }}>
                      <GitBranch size={11} color="var(--pv-violet)" />
                      <span>{project.defaultBranch || "main"}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="vault-card-body-content">
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                      <div className="vault-card-icon-box">
                        {renderProjectIcon(project.category, project.tech)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 className="vault-card-title" title={project.name}>
                          {project.name}
                        </h3>
                        <div style={{ fontSize: "10px", color: "var(--asteroid)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {project.spec}
                        </div>
                      </div>
                    </div>

                    <p className="vault-card-desc">
                      {project.desc}
                    </p>

                    <div className="vault-card-tags">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="badge badge-violet" style={{ fontSize: "10px" }}>
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="badge" style={{ fontSize: "9px" }}>
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div>
                  <div className="vault-card-meta-line">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "3px" }} title="Estrelas">
                        <Star size={11} color="var(--ml-amber)" fill="rgba(255,184,0,0.3)" />
                        <span>{project.stars || 0}</span>
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "3px" }} title="Forks">
                        <GitFork size={11} color="var(--pv-violet)" />
                        <span>{project.forks || 0}</span>
                      </span>
                      {project.sizeKb && (
                        <span style={{ display: "flex", alignItems: "center", gap: "3px", opacity: 0.7 }} title="Tamanho">
                          <HardDrive size={10} />
                          <span>{project.sizeKb > 1000 ? `${(project.sizeKb / 1024).toFixed(1)}MB` : `${project.sizeKb}KB`}</span>
                        </span>
                      )}
                    </div>

                    <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                      <Clock size={10} />
                      <span>{formatRelativeTime(project.updatedAt)}</span>
                    </span>
                  </div>

                  <div className="vault-card-footer">
                    <button
                      onClick={() => handleOpenProject(project)}
                      className="btn btn-outline"
                      style={{ flex: 1, justifyContent: "center", fontSize: "11px", padding: "6px 10px" }}
                    >
                      <Maximize2 size={12} />
                      <span>Detalhes</span>
                    </button>

                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost"
                        style={{ padding: "6px 10px" }}
                        title="Ver Código no GitHub"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="badge badge-green"
                        style={{ padding: "6px 10px", fontWeight: 700, textDecoration: "none" }}
                        title="Abrir Demo Online"
                      >
                        <Globe size={11} style={{ marginRight: "3px" }} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ═══ MODAL DE DETALHES ═══ */}
      {selectedProject && (
        <div className="vault-modal-overlay open" onClick={() => setSelectedProject(null)}>
          <div className="vault-modal-container" onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="vault-modal-close"
              title="Fechar"
            >
              <X size={15} />
            </button>

            <div className="vault-modal-content">
              
              <div className="vault-modal-header">
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <span className="badge badge-violet">{selectedProject.spec}</span>
                  <span className="badge badge-green">Concluído & Disponível</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div className="vault-card-icon-box" style={{ width: "36px", height: "36px" }}>
                    {renderProjectIcon(selectedProject.category, selectedProject.tech)}
                  </div>
                  <h3 className="vault-modal-title">
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "1.2rem" }}>
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="badge badge-violet">
                    {t}
                  </span>
                ))}
              </div>

              <div className="vault-modal-section">
                <h4>
                  <BookOpen size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                  // SOBRE O PROJETO
                </h4>
                <p>{selectedProject.fullDesc}</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--sp-md)", marginBottom: "var(--sp-md)" }}>
                <div className="vault-modal-section" style={{ margin: 0 }}>
                  <h4 style={{ color: "var(--ml-amber)" }}>
                    <Target size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                    // OBJETIVO & DESAFIO
                  </h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="vault-modal-section" style={{ margin: 0 }}>
                  <h4>
                    <Cpu size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                    // SOLUÇÃO DESENVOLVIDA
                  </h4>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              <div className="vault-modal-section">
                <h4 style={{ color: "var(--tm-green)" }}>
                  <CheckCircle2 size={13} style={{ display: "inline", marginRight: "5px", verticalAlign: "middle" }} />
                  // RESULTADOS & IMPACTO
                </h4>
                <p>{selectedProject.result}</p>
              </div>

              {selectedProject.cloneUrl && (
                <div style={{ background: "rgba(5,5,12,0.8)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "10px 14px", marginTop: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "10px", color: "var(--asteroid)", marginBottom: "6px" }}>
                    <span>// CLONAR REPOSITÓRIO</span>
                    {copiedClone && (
                      <span style={{ color: "var(--tm-green)", fontWeight: 700, display: "flex", alignItems: "center", gap: "3px" }}>
                        <Check size={11} /> Copiado!
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", background: "rgba(16,16,42,0.7)", borderRadius: "var(--radius-sm)", padding: "6px 10px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--hq-cyan)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      git clone {selectedProject.cloneUrl}
                    </span>
                    <button
                      onClick={() => handleCopyClone(selectedProject.cloneUrl)}
                      className="btn btn-ghost"
                      style={{ padding: "3px 6px", fontSize: "10px" }}
                      title="Copiar comando"
                    >
                      {copiedClone ? <Check size={12} /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>
              )}

              <div className="vault-modal-actions">
                {selectedProject.links.code && (
                  <a
                    href={selectedProject.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    <Code2 size={14} />
                    <span>Ver no GitHub</span>
                  </a>
                )}

                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    <Globe size={14} />
                    <span>Acessar Demo</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
