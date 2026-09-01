"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  { text: "Kernel Quântico NEXUS 3.0", code: "INICIALIZADO" },
  { text: "Subsistemas da Matriz Sináptica Neural", code: "ONLINE" },
  { text: "Telemetria de Carreira & Missões Táticas", code: "CARREGADA" },
  { text: "Fragmentos Criptográficos do Project Vault", code: "DESBLOQUEADOS" },
  { text: "Módulo Cyber Lab & Engenharia Defensiva", code: "VERIFICADO" },
  { text: "Copiloto Cognitivo NEXUS AI", code: "ATIVO" },
  { text: "Credencial de Comando Nível 5 [ALPHA]", code: "CONCEDIDA" },
];

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [readyToEnter, setReadyToEnter] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".boot-logo",
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }
      )
        .fromTo(
          ".boot-sub",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          ".boot-progress-wrap",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.1"
        );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (currentLineIndex < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        const pct = Math.round(((currentLineIndex + 1) / BOOT_LOGS.length) * 100);
        setProgress(pct);
      }, 260);
      return () => clearTimeout(timer);
    } else {
      setReadyToEnter(true);
    }
  }, [currentLineIndex]);

  const handleEnter = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: onComplete,
      });
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (readyToEnter || e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [readyToEnter]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-space-deep font-mono text-cyber-cyan select-none"
    >
      {/* Scanline texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,229,255,0.015)_2px,rgba(0,229,255,0.015)_4px)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center max-w-lg w-[90%] px-4">
        {/* Boot Logo */}
        <div className="boot-logo font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-widest text-center mb-1 text-starlight">
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-starlight to-cyber-violet">
            NEXUS OS v3.0
          </span>
        </div>

        <div className="boot-sub text-[10px] sm:text-xs text-asteroid tracking-[0.25em] text-center mb-8 uppercase">
          // CENTRO DE COMANDO IA // INICIALIZANDO SUBSISTEMAS
        </div>

        {/* Boot logs lines */}
        <div className="w-full space-y-1.5 mb-6 min-h-[190px]">
          {BOOT_LOGS.slice(0, currentLineIndex).map((log, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs sm:text-sm py-0.5 text-starlight/90 animate-in fade-in slide-in-from-left-2 duration-200"
            >
              <span className="flex items-center gap-2 text-cyber-cyan truncate pr-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0" />
                <span className="text-asteroid text-[11px]">&gt;</span> {log.text}
              </span>
              <span className="text-cyber-green text-[10px] sm:text-xs font-bold tracking-wider shrink-0">
                {log.code}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="boot-progress-wrap w-full mb-6">
          <div className="h-1 bg-space-nebula-light rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-blue transition-all duration-300 rounded-full shadow-[0_0_12px_rgba(0,229,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-asteroid mt-1.5 tracking-widest">
            <span>SUBSISTEMAS: {progress}%</span>
            <span>GABRIEL_H_ROCHA // ALPHA_CLEARANCE</span>
          </div>
        </div>

        {/* Enter / Skip action button */}
        <button
          onClick={handleEnter}
          className={`px-6 py-2.5 rounded text-xs tracking-widest uppercase border transition-all duration-300 ${
            readyToEnter
              ? "border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10 hover:bg-cyber-cyan hover:text-space-deep shadow-[0_0_20px_rgba(0,229,255,0.3)] animate-pulse"
              : "border-border text-asteroid hover:text-starlight hover:border-asteroid"
          }`}
        >
          {readyToEnter
            ? "INICIALIZAR CENTRO DE COMANDO [PRESSIONE QUALQUER TECLA]"
            : "IGNORAR INTRODUÇÃO [ESC]"}
        </button>
      </div>
    </div>
  );
}
