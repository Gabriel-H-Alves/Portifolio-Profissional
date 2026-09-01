"use client";

import { create } from "zustand";

export type SectionModule = 
  | 'hq' 
  | 'identity' 
  | 'matrix' 
  | 'missions' 
  | 'vault' 
  | 'cyber-lab' 
  | 'knowledge';

export interface ToastMessage {
  id: string;
  title: string;
  desc?: string;
  icon?: string;
}

interface NexusState {
  currentSection: SectionModule;
  visitedSections: Set<SectionModule>;
  booted: boolean;
  paletteOpen: boolean;
  aiOpen: boolean;
  activeProjectModalId: string | null;
  toasts: ToastMessage[];
  unlockedAchievements: string[];
  
  // Actions
  setSection: (section: SectionModule) => void;
  setBooted: (booted: boolean) => void;
  setPaletteOpen: (open: boolean) => void;
  setAiOpen: (open: boolean) => void;
  setActiveProjectModalId: (id: string | null) => void;
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
  unlockAchievement: (id: string) => void;
}

// Simple internal state container with React state hook integration
import { useState, useEffect, useCallback } from "react";

export function useNexus() {
  const [currentSection, setCurrentSection] = useState<SectionModule>('hq');
  const [visitedSections, setVisitedSections] = useState<Set<SectionModule>>(new Set(['hq']));
  const [booted, setBootedState] = useState<boolean>(false);
  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);
  const [aiOpen, setAiOpen] = useState<boolean>(false);
  const [activeProjectModalId, setActiveProjectModalId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBooted = sessionStorage.getItem('nexus-v3-booted') === 'true';
      const storedAchievements = JSON.parse(localStorage.getItem('nexus-v3-achievements') || '[]');
      setBootedState(isBooted);
      setUnlockedAchievements(storedAchievements);
    }
  }, []);

  const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const unlockAchievement = useCallback((achId: string) => {
    setUnlockedAchievements((prev) => {
      if (prev.includes(achId)) return prev;
      const updated = [...prev, achId];
      if (typeof window !== 'undefined') {
        localStorage.setItem('nexus-v3-achievements', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const setSection = useCallback((section: SectionModule) => {
    setCurrentSection(section);
    setVisitedSections((prev) => {
      const updated = new Set(prev);
      updated.add(section);
      if (updated.size >= 6) {
        unlockAchievement('explorer');
      }
      return updated;
    });
  }, [unlockAchievement]);

  const setBooted = useCallback((isBooted: boolean) => {
    setBootedState(isBooted);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nexus-v3-booted', isBooted ? 'true' : 'false');
    }
    if (isBooted) {
      unlockAchievement('first_contact');
    }
  }, [unlockAchievement]);

  return {
    currentSection,
    visitedSections,
    booted,
    paletteOpen,
    aiOpen,
    activeProjectModalId,
    toasts,
    unlockedAchievements,
    setSection,
    setBooted,
    setPaletteOpen,
    setAiOpen,
    setActiveProjectModalId,
    addToast,
    removeToast,
    unlockAchievement,
  };
}
