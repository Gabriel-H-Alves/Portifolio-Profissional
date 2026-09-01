"use client";

import React from "react";
import { ToastMessage } from "@/hooks/useNexusState";
import { Award, X } from "lucide-react";

interface ToastStackProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export function ToastStack({ toasts, onDismiss }: ToastStackProps) {
  if (toasts.length === 0) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-[95] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-3.5 rounded-lg border border-cyber-gold/40 bg-space-void/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,215,0,0.2)] font-mono animate-in slide-in-from-right duration-300"
        >
          <div className="w-8 h-8 rounded bg-cyber-gold/15 border border-cyber-gold/30 flex items-center justify-center shrink-0 text-base">
            {toast.icon || <Award className="w-4 h-4 text-cyber-gold" />}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-cyber-gold tracking-wide">
              {toast.title}
            </div>
            {toast.desc && (
              <div className="text-[11px] text-starlight/80 mt-0.5 leading-snug">
                {toast.desc}
              </div>
            )}
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-asteroid hover:text-starlight transition-colors p-1"
            aria-label="Fechar notificação"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
