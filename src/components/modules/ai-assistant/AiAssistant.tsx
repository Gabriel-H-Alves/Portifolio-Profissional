"use client";

import React, { useState, useRef, useEffect } from "react";
import { ariaGreeting, ariaSuggestions, ariaResponses, ariaFallback } from "@/data/ai-prompts";
import { Bot, Send, X, Sparkles, User, CornerDownLeft } from "lucide-react";

interface AiAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUnlockAchievement: (id: string) => void;
}

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

export function AiAssistant({
  open,
  onOpenChange,
  onUnlockAchievement,
}: AiAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-msg",
      sender: "ai",
      text: ariaGreeting,
      timestamp: "00:00",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [inquiryCount, setInquiryCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    const newCount = inquiryCount + 1;
    setInquiryCount(newCount);
    if (newCount >= 4) {
      onUnlockAchievement("curious_mind");
    }

    // Determine smart response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let responseText = ariaFallback;

      if (lower.includes("ia") || lower.includes("inteligência") || lower.includes("llm") || lower.includes("rag")) {
        responseText = ariaResponses.ia;
      } else if (lower.includes("cyber") || lower.includes("segurança") || lower.includes("owasp") || lower.includes("lab")) {
        responseText = ariaResponses.cyber;
      } else if (lower.includes("stack") || lower.includes("tecnologia") || lower.includes("react") || lower.includes("next")) {
        responseText = ariaResponses.stack;
      } else if (lower.includes("visão") || lower.includes("computacional") || lower.includes("camera") || lower.includes("opencv")) {
        responseText = ariaResponses.visao;
      } else if (lower.includes("carreira") || lower.includes("trajetória") || lower.includes("experiência") || lower.includes("liderança")) {
        responseText = ariaResponses.carreira;
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: responseText,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => onOpenChange(!open)}
        className={`fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
          open
            ? "bg-space-void text-cyber-magenta border-2 border-cyber-magenta shadow-[0_0_25px_rgba(255,0,110,0.5)]"
            : "bg-gradient-to-tr from-cyber-magenta to-cyber-violet text-white hover:scale-110 shadow-[0_0_25px_rgba(255,0,110,0.4)]"
        }`}
        aria-label="Abrir Copiloto NEXUS AI"
        title="Copiloto Cognitivo NEXUS AI"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[calc(100vw-2rem)] sm:w-[420px] max-h-[580px] h-[520px] rounded-2xl border border-cyber-magenta-dim bg-space-void shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(255,0,110,0.2)] flex flex-col font-mono overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Chat Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-border bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyber-magenta to-cyber-violet flex items-center justify-center text-white text-sm shadow-[0_0_10px_rgba(255,0,110,0.4)]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-starlight tracking-wider">
                  NEXUS AI // COPILOTO
                </div>
                <div className="text-[10px] text-cyber-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                  <span>NÚCLEO NEURAL ONLINE</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenChange(false)}
              className="p-1.5 rounded text-asteroid hover:text-starlight hover:bg-white/[0.05]"
              aria-label="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => {
              const isAi = msg.sender === "ai";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isAi ? "justify-start" : "justify-end"}`}
                >
                  {isAi && (
                    <div className="w-6 h-6 rounded-full bg-cyber-magenta/20 border border-cyber-magenta/40 flex items-center justify-center text-cyber-magenta text-xs shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                      isAi
                        ? "border border-border/80 bg-space-deep text-starlight"
                        : "bg-cyber-cyan text-space-deep font-medium"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Inquiry Chips */}
          <div className="p-2 border-t border-border/40 bg-space-deep/50 flex gap-1.5 overflow-x-auto no-scrollbar">
            {ariaSuggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(suggestion)}
                className="px-2.5 py-1 rounded-full border border-border/60 bg-space-void text-[10px] text-asteroid hover:text-cyber-cyan hover:border-cyber-cyan/40 whitespace-nowrap transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input Field Form */}
          <div className="p-3 border-t border-border/60 bg-white/[0.01] flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Consulte sobre IA, Cyber Lab, arquitetura..."
              className="flex-1 bg-space-deep border border-border rounded-lg px-3 py-2 text-xs text-starlight placeholder:text-asteroid focus:outline-none focus:border-cyber-magenta-dim font-mono"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-cyber-magenta hover:bg-cyber-magenta/80 text-white transition-colors"
              aria-label="Enviar mensagem"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
