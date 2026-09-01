"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { SectionModule } from "@/hooks/useNexusState";
import {
  Terminal,
  User,
  Network,
  Clock,
  FolderGit2,
  ShieldCheck,
  Award,
  Bot,
  FileText,
  Copy,
  Sparkles,
  Search,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (section: SectionModule) => void;
  onOpenAi: () => void;
  onAddToast: (toast: { title: string; desc?: string; icon?: string }) => void;
  onUnlockAchievement: (id: string) => void;
}

export function CommandPalette({
  open,
  onOpenChange,
  onNavigate,
  onOpenAi,
  onAddToast,
  onUnlockAchievement,
}: CommandPaletteProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  const handleSelect = (callback: () => void) => {
    callback();
    onOpenChange(false);
    onUnlockAchievement("terminal_master");
  };

  const copyEmail = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText("gabrielhenrique.alvesrocha@gmail.com");
      onAddToast({
        title: "Contato Copiado!",
        desc: "Email de Gabriel copiado para a área de transferência.",
        icon: "📋",
      });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-20 px-4 bg-space-deep/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={() => onOpenChange(false)} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-xl rounded-xl border border-cyber-cyan-dim bg-space-void shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,229,255,0.15)] overflow-hidden font-mono z-10 animate-in zoom-in-95 duration-200">
        <Command label="Centro de Comandos NEXUS" className="w-full">
          {/* Search Header */}
          <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-border bg-white/[0.02]">
            <Search className="w-4 h-4 text-cyber-cyan shrink-0" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Digite um comando, módulo ou pesquisa..."
              className="w-full bg-transparent text-sm text-starlight placeholder:text-asteroid focus:outline-none font-mono"
            />
            <span className="px-1.5 py-0.5 rounded border border-border text-[10px] text-asteroid">
              ESC
            </span>
          </div>

          {/* List items */}
          <Command.List className="max-h-80 overflow-y-auto p-2 space-y-1">
            <Command.Empty className="py-6 text-center text-xs text-asteroid">
              Nenhum subsistema ou comando encontrado.
            </Command.Empty>

            <Command.Group heading="Módulos do Sistema" className="text-[10px] text-asteroid uppercase tracking-widest px-2 py-1.5 font-bold">
              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("hq"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-cyan/10 hover:text-cyber-cyan cursor-pointer transition-colors"
              >
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span>NEXUS HQ — Central de Comando</span>
                <span className="ml-auto text-[10px] text-asteroid">#hq</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("identity"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-blue/10 hover:text-cyber-blue cursor-pointer transition-colors"
              >
                <User className="w-4 h-4 text-cyber-blue" />
                <span>ID Core — Dossiê & Especializações</span>
                <span className="ml-auto text-[10px] text-asteroid">#identity</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("matrix"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-green/10 hover:text-cyber-green cursor-pointer transition-colors"
              >
                <Network className="w-4 h-4 text-cyber-green" />
                <span>Tech Matrix — Grafo Neural de Tecnologias</span>
                <span className="ml-auto text-[10px] text-asteroid">#matrix</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("missions"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-amber/10 hover:text-cyber-amber cursor-pointer transition-colors"
              >
                <Clock className="w-4 h-4 text-cyber-amber" />
                <span>Mission Log — Linha do Tempo Tática</span>
                <span className="ml-auto text-[10px] text-asteroid">#missions</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("vault"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-violet/10 hover:text-cyber-violet cursor-pointer transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-cyber-violet" />
                <span>Project Vault — Dossiês de Arquitetura</span>
                <span className="ml-auto text-[10px] text-asteroid">#vault</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("cyber-lab"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cyber Lab — Trilhas de Segurança em Dev</span>
                <span className="ml-auto text-[10px] text-asteroid">#cyber-lab</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => onNavigate("knowledge"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-gold/10 hover:text-cyber-gold cursor-pointer transition-colors"
              >
                <Award className="w-4 h-4 text-cyber-gold" />
                <span>Knowledge Hub — Certificações & Emblemas</span>
                <span className="ml-auto text-[10px] text-asteroid">#knowledge</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Ações Rápidas" className="text-[10px] text-asteroid uppercase tracking-widest px-2 py-1.5 font-bold mt-2">
              <Command.Item
                onSelect={() => handleSelect(onOpenAi)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-cyber-magenta/10 hover:text-cyber-magenta cursor-pointer transition-colors"
              >
                <Bot className="w-4 h-4 text-cyber-magenta" />
                <span>Ativar Copiloto NEXUS AI</span>
                <span className="ml-auto text-[10px] text-asteroid">Chat</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(copyEmail)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-starlight hover:bg-white/[0.06] cursor-pointer transition-colors"
              >
                <Copy className="w-4 h-4 text-starlight" />
                <span>Copiar Contato / Email de Gabriel</span>
                <span className="ml-auto text-[10px] text-asteroid">Clipboard</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-white/[0.01] text-[10px] text-asteroid">
            <div className="flex items-center gap-2">
              <span>↑↓ Navegar</span>
              <span>•</span>
              <span>↵ Executar</span>
            </div>
            <span>NEXUS OS v3.0 // GABRIEL HENRIQUE</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
