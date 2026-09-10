"use client";

import React, { useState, useMemo, useCallback } from "react";
import "@/styles/engineering-core.css";
import "@/styles/skills.css";
import OrbGyro from "./OrbGyro";
import { professionalCapabilities } from "./data/domains.data";
import { CapabilityId, ProfessionalCapability } from "./types/engineering-core.types";
import {
  Layout,
  Server,
  Cloud,
  BrainCircuit,
  Workflow,
  FlaskConical,
  Compass,
  Activity,
  Sparkles,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface EngineeringCoreSectionProps {
  onUnlockAchievement?: (id: string) => void;
}

export function EngineeringCoreSection({ onUnlockAchievement }: EngineeringCoreSectionProps) {
  const [activeCapabilityId, setActiveCapabilityId] = useState<CapabilityId>("products");
  const [hoveredCapabilityId, setHoveredCapabilityId] = useState<CapabilityId | null>(null);
  const [telemetry, setTelemetry] = useState({ yaw: 0, pitch: 0 });

  const currentCapabilityId = hoveredCapabilityId || activeCapabilityId;

  const currentCapability = useMemo<ProfessionalCapability>(() => {
    return professionalCapabilities.find((c) => c.id === currentCapabilityId) || professionalCapabilities[0];
  }, [currentCapabilityId]);

  const handleCapabilityClick = useCallback(
    (id: CapabilityId) => {
      setActiveCapabilityId(id);
      if (onUnlockAchievement) {
        onUnlockAchievement("skill_scanner");
      }
    },
    [onUnlockAchievement]
  );

  const handleTelemetryChange = useCallback((t: { yaw: number; pitch: number }) => {
    setTelemetry(t);
  }, []);

  // Helper de renderização de ícones vetoriais Lucide (Zero emojis)
  const renderIcon = (iconName: string, size = 16) => {
    switch (iconName) {
      case "Layout":
        return <Layout size={size} />;
      case "Server":
        return <Server size={size} />;
      case "Cloud":
        return <Cloud size={size} />;
      case "BrainCircuit":
        return <BrainCircuit size={size} />;
      case "Workflow":
        return <Workflow size={size} />;
      case "FlaskConical":
        return <FlaskConical size={size} />;
      default:
        return <Cpu size={size} />;
    }
  };

  // Coordenadas espaciais perfeitamente balanceadas para as 6 capacidades em arco de 360° (Desktop)
  const capabilityPositions: Record<CapabilityId, { top: string; left: string; lineX: number; lineY: number }> = {
    cloud: { top: "10%", left: "50%", lineX: 500, lineY: 70 },
    ai: { top: "26%", left: "84%", lineX: 830, lineY: 180 },
    architecture: { top: "72%", left: "84%", lineX: 830, lineY: 500 },
    lab: { top: "90%", left: "50%", lineX: 500, lineY: 620 },
    products: { top: "72%", left: "16%", lineX: 170, lineY: 500 },
    automation: { top: "26%", left: "16%", lineX: 170, lineY: 180 },
  };

  return (
    <div className="grav-cosmos-wrapper">
      
      {/* ═══ 1. ETHEREAL SECTION HEADER ═══ */}
      <div className="grav-hdr">
        <div className="grav-hdr-left">
          <div className="grav-hdr-tagline">
            <Sparkles size={13} />
            <span>THE LIVING REACTOR // ECOSYSTEM OF CAPABILITIES</span>
          </div>
          <h2 className="grav-hdr-title">
            GABRIEL HENRIQUE // SOFTWARE ENGINEER
          </h2>
          <p className="grav-hdr-sub">
            <strong>Não sou definido pelas ferramentas;</strong> utilizo tecnologia, inteligência artificial e arquitetura para projetar, automatizar e materializar soluções reais de ponta a ponta.
          </p>
        </div>

        {/* Live HUD Telemetry */}
        <div className="grav-hdr-right">
          <div className="grav-telemetry-pill">
            <span className="grav-pulse-dot" />
            <span>NÚCLEO: <strong style={{ color: "var(--starlight)" }}>GRAVITACIONAL ONLINE</strong></span>
          </div>

          <div className="grav-telemetry-pill">
            <Compass size={13} style={{ color: "var(--hq-cyan)" }} />
            <span>YAW: <strong style={{ color: "var(--starlight)" }}>{telemetry.yaw}°</strong></span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>PITCH: <strong style={{ color: "var(--starlight)" }}>{telemetry.pitch}°</strong></span>
          </div>
        </div>
      </div>

      {/* ═══ 2. DEEP COSMIC STAGE (MAJESTIC 3D REACTOR) ═══ */}
      <div className="grav-stage">
        
        {/* Volumetric Radial Light Auroras */}
        <div
          className="grav-aurora-glow"
          style={{
            background: `radial-gradient(circle, ${currentCapability.color}35 0%, rgba(168, 85, 247, 0.2) 45%, transparent 70%)`,
          }}
        />
        <div className="grav-aurora-outer" />

        {/* SVG Laser Rays & Concentric Orbital Rings */}
        <svg className="grav-svg-canvas" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="capabilityLaserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={currentCapability.color} stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Concentric Cosmic Orbit Rings */}
          <circle cx="500" cy="350" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 8" className="animate-[spin_120s_linear_infinite]" />
          <circle cx="500" cy="350" r="290" fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="1 12" />
          <circle cx="500" cy="350" r="390" fill="none" stroke="rgba(255,255,255,0.02)" strokeDasharray="2 16" />

          {/* Active Synapse Light Ray between Central Reactor and Active Capability */}
          {capabilityPositions[currentCapability.id] && (
            <line
              x1="500"
              y1="350"
              x2={capabilityPositions[currentCapability.id].lineX}
              y2={capabilityPositions[currentCapability.id].lineY}
              stroke="url(#capabilityLaserGrad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeOpacity="0.9"
            />
          )}
        </svg>

        {/* ─── 3. Majestic Central Living Reactor ─── */}
        <div className="grav-center-core">
          <OrbGyro
            dotColor={currentCapability.reactorPreset.dotColor}
            accentColor={currentCapability.reactorPreset.accentColor}
            speed={currentCapability.reactorPreset.speed}
            density={currentCapability.reactorPreset.density}
            dotSize={currentCapability.reactorPreset.dotSize}
            spinTurns={currentCapability.reactorPreset.spinTurns}
            onTelemetryChange={handleTelemetryChange}
          />

          <div className="grav-core-instruction">
            <Activity size={11} style={{ color: "var(--hq-cyan)" }} />
            <span>NÚCLEO DIGITAL VIVO // ARRASTE LIVREMENTE</span>
          </div>
        </div>

        {/* ─── 4. Floating Capability Anchors (Desktop/Tablet) ─── */}
        <div className="grav-orbitals-container">
          {professionalCapabilities.map((capability) => {
            const coords = capabilityPositions[capability.id];
            const isActive = capability.id === currentCapabilityId;

            return (
              <div
                key={capability.id}
                onClick={() => handleCapabilityClick(capability.id)}
                onMouseEnter={() => setHoveredCapabilityId(capability.id)}
                onMouseLeave={() => setHoveredCapabilityId(null)}
                style={{
                  top: coords.top,
                  left: coords.left,
                  ["--node-color" as string]: capability.color,
                  ["--node-glow" as string]: `${capability.color}45`,
                  ["--node-border" as string]: isActive ? capability.color : "rgba(228, 228, 240, 0.12)",
                }}
                className={`grav-node-anchor ${isActive ? "active" : ""}`}
              >
                {/* Action Statement (The Narrative) */}
                <div className="grav-action-badge">
                  "{capability.actionStatement}"
                </div>

                {/* Capability Header Badge */}
                <div className="grav-node-hdr">
                  <span className="grav-node-icon">
                    {renderIcon(capability.iconName, 14)}
                  </span>
                  <span className="grav-node-name">{capability.name}</span>
                </div>

                {/* DNA Technology Substrate */}
                <div className="grav-node-stream">
                  {capability.dnaTechs.map((tech) => (
                    <span key={tech} className="grav-stream-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ─── 5. Tactical Capability Lens (Bottom Progressive Inspector) ─── */}
      <div
        className="grav-focus-lens"
        style={{
          ["--active-color" as string]: currentCapability.color,
          ["--active-glow" as string]: `${currentCapability.color}50`,
          borderColor: `${currentCapability.color}35`,
        }}
      >
        <div className="grav-lens-left">
          <div className="grav-lens-action">
            "{currentCapability.actionStatement}"
          </div>
          <div className="grav-lens-title">
            {currentCapability.shortCode} // {currentCapability.headline}
          </div>
          <div className="grav-lens-desc">
            {currentCapability.description}
          </div>
        </div>

        {/* DNA Stack Pills */}
        <div className="grav-lens-right">
          <div className="grav-lens-stack-hdr">
            DNA TECNOLÓGICO SUBSTRATO:
          </div>
          <div className="grav-lens-pills">
            {currentCapability.dnaTechs.map((tech) => (
              <span key={tech} className="grav-lens-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 6. Mobile & Tablet Adaptive Stream Layout ─── */}
      <div className="grav-mobile-stack">
        {professionalCapabilities.map((capability) => {
          const isActive = capability.id === currentCapabilityId;
          return (
            <div
              key={capability.id}
              onClick={() => handleCapabilityClick(capability.id)}
              style={{
                ["--node-color" as string]: capability.color,
                ["--node-glow" as string]: `${capability.color}30`,
              }}
              className={`grav-mobile-card ${isActive ? "active" : ""}`}
            >
              <div className="grav-mobile-card-action">
                "{capability.actionStatement}"
              </div>

              <div className="grav-mobile-card-hdr">
                <div className="grav-mobile-card-title">
                  <span style={{ color: capability.color }}>{renderIcon(capability.iconName, 15)}</span>
                  <span>{capability.name}</span>
                </div>
                <span style={{ fontSize: "10px", color: "var(--asteroid)" }}>{capability.shortCode}</span>
              </div>

              <div className="grav-mobile-card-techs">
                {capability.dnaTechs.map((tech) => (
                  <span key={tech} style={{ color: isActive ? "#ffffff" : "var(--starlight)" }}>
                    {tech} ·
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
