"use client";

import React, { useState } from "react";
import { SectionModule } from "@/hooks/useNexusState";
import { 
  Terminal, 
  User, 
  Network, 
  Clock, 
  FolderGit2, 
  ShieldCheck, 
  Award, 
  Command, 
  Menu, 
  X,
  Sparkles
} from "lucide-react";

interface MainNavProps {
  currentSection: SectionModule;
  onNavigate: (section: SectionModule) => void;
  unlockedCount: number;
  totalAchievements: number;
  onOpenPalette: () => void;
}

const NAV_ITEMS: Array<{
  id: SectionModule;
  label: string;
  code: string;
  icon: React.ElementType;
}> = [
  { id: "hq", label: "HQ", code: "CENTRAL", icon: Terminal },
  { id: "identity", label: "ID Core", code: "PERFIL", icon: User },
  { id: "matrix", label: "Tech Matrix", code: "GRAFO", icon: Network },
  { id: "missions", label: "Mission Log", code: "CARREIRA", icon: Clock },
  { id: "vault", label: "Project Vault", code: "PROJETOS", icon: FolderGit2 },
  { id: "cyber-lab", label: "Cyber Lab", code: "SEGURANÇA", icon: ShieldCheck },
  { id: "knowledge", label: "Knowledge Hub", code: "CERTS", icon: Award },
];

export function MainNav({
  currentSection,
  onNavigate,
  unlockedCount,
  totalAchievements,
  onOpenPalette,
}: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: SectionModule) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-space-deep/85 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("hq")}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyber-cyan to-cyber-blue flex items-center justify-center font-display font-black text-space-deep text-sm shadow-[0_0_12px_rgba(0,229,255,0.35)] group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-bold tracking-wider text-starlight">
              NEXUS<span className="text-cyber-cyan opacity-80">.OS</span>
            </span>
            <span className="text-[9px] font-mono text-asteroid -mt-1 tracking-widest hidden sm:block">
              GABRIEL H. ROCHA
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs" aria-label="Navegação Principal">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-md flex items-center gap-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-starlight bg-white/[0.06] border border-border shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                    : "text-asteroid hover:text-starlight hover:bg-white/[0.03]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyber-cyan" : "text-asteroid"}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-px left-3 right-3 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-blue" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Achievements + Command Palette + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Achievements Badge */}
          <button
            onClick={() => handleNavClick("knowledge")}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-cyber-gold/30 bg-cyber-gold/10 hover:bg-cyber-gold/20 font-mono text-[11px] text-cyber-gold transition-all duration-200 shadow-[0_0_10px_rgba(255,215,0,0.15)]"
            title="Conquistas e Emblemas de Autorização"
          >
            <Award className="w-3.5 h-3.5 text-cyber-gold" />
            <span className="font-bold">{unlockedCount}</span>
            <span className="text-asteroid text-[10px]">/{totalAchievements}</span>
          </button>

          {/* Command Palette Trigger (Cmd+K) */}
          <button
            onClick={onOpenPalette}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border bg-space-void hover:border-cyber-cyan-dim hover:text-cyber-cyan font-mono text-xs text-asteroid transition-all duration-200"
            title="Abrir Centro de Comandos (Ctrl+K)"
          >
            <Command className="w-3 h-3 text-cyber-cyan" />
            <span className="text-[11px]">⌘K</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-border bg-space-void text-starlight hover:text-cyber-cyan focus:outline-none"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-space-void/95 backdrop-blur-xl px-4 py-4 space-y-1 font-mono text-sm animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-md transition-all ${
                  isActive
                    ? "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30"
                    : "text-asteroid hover:text-starlight hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-[10px] tracking-widest text-asteroid uppercase">
                  //{item.code}
                </span>
              </button>
            );
          })}
          <div className="pt-3 mt-2 border-t border-border/50 flex justify-between items-center px-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPalette();
              }}
              className="flex items-center gap-2 text-xs text-cyber-cyan font-mono"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Abrir Command Palette (Ctrl+K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
