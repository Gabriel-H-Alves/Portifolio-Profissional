"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Zap,
  CheckCircle,
  Copy
} from "lucide-react";

interface IdentitySectionProps {
  onAddToast: (toast: { title: string; desc?: string; icon?: string }) => void;
}

export function IdentitySection({ onAddToast }: IdentitySectionProps) {
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = () => {
    const textToCopy = profile.bio.map(b => b.text).join("\n");
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(textToCopy);
      setCopiedBio(true);
      onAddToast({
        title: "Dossiê Copiado!",
        desc: "Código do dossiê copiado com sucesso.",
        icon: "📋",
      });
      setTimeout(() => setCopiedBio(false), 2000);
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-border/60 pb-4">
        <div className="w-9 h-9 rounded-lg bg-cyber-blue/15 border border-cyber-blue-dim flex items-center justify-center text-cyber-blue shadow-[0_0_12px_rgba(0,180,255,0.25)]">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-starlight">
            IDENTITY CORE
          </h2>
          <div className="text-[11px] text-asteroid tracking-widest uppercase">
            // ID-CORE // DIGITAL TWIN & DOSSIÊ DO ENGENHEIRO
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Holographic Scanner & System Status */}
        <div className="lg:col-span-4 flex flex-col items-center gap-6 p-6 rounded-2xl border border-border/80 bg-space-void/90 backdrop-blur-md">
          
          {/* Holographic Avatar Scanner */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Outer radar ring */}
            <div className="absolute -inset-3 rounded-full border border-cyber-blue-dim animate-[radarSweep_8s_linear_infinite]" />
            <div className="absolute -inset-1.5 rounded-full border border-cyber-blue/20" />
            
            {/* Scanner line */}
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent shadow-[0_0_12px_rgba(0,180,255,0.8)] z-10 animate-[scannerSweep_3s_ease-in-out_infinite]" />

            {/* Avatar display */}
            <div className="w-full h-full rounded-full border-2 border-space-nebula-light bg-space-nebula flex items-center justify-center text-6xl select-none overflow-hidden relative shadow-inner">
              <span className="animate-float">👨‍💻</span>
            </div>

            {/* Status dot */}
            <div 
              className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-cyber-green border-4 border-space-deep z-20" 
              title="Operacional: Ativo"
            >
              <span className="absolute -inset-1 rounded-full border border-cyber-green animate-[ringPulse_2s_ease-out_infinite]" />
            </div>
          </div>

          {/* Level Badge */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue-dim bg-cyber-blue-glow text-cyber-blue text-xs font-bold tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>NÍVEL {profile.level} // ENGENHEIRO & ARQUITETO SÊNIOR</span>
          </div>

          {/* XP Progress Bar */}
          <div className="w-full">
            <div className="flex justify-between text-[11px] text-asteroid mb-1.5 font-bold">
              <span>PROGRESSÃO DE XP</span>
              <span className="text-cyber-blue">{profile.xp} / 100</span>
            </div>
            <div className="h-1.5 bg-space-nebula-light rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(0,180,255,0.4)]"
                style={{ width: `${profile.xp}%` }}
              />
            </div>
          </div>

          {/* System Indicators */}
          <div className="w-full space-y-2 pt-2 border-t border-border/50 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg border border-border/40 bg-space-deep/60">
              <span className="flex items-center gap-2 text-asteroid">
                <MapPin className="w-3.5 h-3.5 text-cyber-blue" />
                <span>Base:</span>
              </span>
              <span className="text-starlight font-medium">{profile.location}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg border border-border/40 bg-space-deep/60">
              <span className="flex items-center gap-2 text-asteroid">
                <GraduationCap className="w-3.5 h-3.5 text-cyber-blue" />
                <span>Formação:</span>
              </span>
              <span className="text-starlight font-medium">{profile.formation}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg border border-border/40 bg-space-deep/60">
              <span className="flex items-center gap-2 text-asteroid">
                <Globe className="w-3.5 h-3.5 text-cyber-blue" />
                <span>Idiomas:</span>
              </span>
              <span className="text-starlight font-medium text-right text-[11px]">PT-BR / EN (Fluente)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg border border-border/40 bg-space-deep/60">
              <span className="flex items-center gap-2 text-asteroid">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Segurança:</span>
              </span>
              <span className="text-emerald-400 font-medium text-[11px]">Estudos & Práticas em Dev</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Terminal & Engineering Pillars */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Bio Terminal */}
          <div className="rounded-2xl border border-border/80 bg-space-void/95 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-xs text-asteroid ml-2 select-none">
                  dossier.sys // Gabriel Henrique Alves Rocha
                </span>
              </div>

              <button
                onClick={handleCopyBio}
                className="flex items-center gap-1.5 text-[11px] text-asteroid hover:text-cyber-cyan transition-colors"
                title="Copiar código do dossiê"
              >
                {copiedBio ? <CheckCircle className="w-3.5 h-3.5 text-cyber-green" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBio ? "Copiado" : "Copiar"}</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <div className="space-y-1 font-mono">
                {profile.bio.map((line, idx) => {
                  if (line.type === "empty") return <div key={idx} className="h-3" />;
                  if (line.type === "comment") {
                    return (
                      <div key={idx} className="text-asteroid italic">
                        {line.text}
                      </div>
                    );
                  }
                  if (line.type === "keyword") {
                    return (
                      <span key={idx} className="text-cyber-blue font-bold">
                        {line.text}
                      </span>
                    );
                  }
                  if (line.type === "property") {
                    return (
                      <span key={idx} className="text-cyber-cyan">
                        {line.text}
                      </span>
                    );
                  }
                  if (line.type === "string") {
                    return (
                      <span key={idx} className="text-cyber-green font-medium">
                        {line.text}
                      </span>
                    );
                  }
                  return (
                    <span key={idx} className="text-starlight">
                      {line.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Engineering Pillars & DNA */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-cyber-cyan" />
              <h3 className="font-display text-sm uppercase tracking-wider text-starlight font-bold">
                PILARES DE ENGENHARIA & ESPECIALIZAÇÕES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.dna.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border/80 bg-space-void/60 hover:bg-space-void hover:border-cyber-blue-dim transition-all group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="font-heading text-base font-bold text-starlight mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-asteroid leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
