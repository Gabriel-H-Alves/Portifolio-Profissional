import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--deep-space)",
        foreground: "var(--starlight)",
        space: {
          deep: "var(--deep-space)",
          void: "var(--void)",
          nebula: "var(--nebula)",
          "nebula-light": "var(--nebula-light)",
        },
        cyber: {
          cyan: "var(--hq-cyan)",
          blue: "var(--id-blue)",
          green: "var(--tm-green)",
          amber: "var(--ml-amber)",
          violet: "var(--pv-violet)",
          gold: "var(--kh-gold)",
          magenta: "var(--ai-magenta)",
        },
        starlight: "var(--starlight)",
        asteroid: {
          DEFAULT: "var(--asteroid)",
          dim: "rgba(107, 107, 141, 0.4)",
        },
        border: "rgba(228, 228, 240, 0.08)",
        input: "rgba(228, 228, 240, 0.12)",
        ring: "var(--hq-cyan)",
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "monospace"],
        heading: ["var(--font-rajdhani)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        data: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        "scanline": "scanline 8s linear infinite",
        "radar-sweep": "radarSweep 4s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.03)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        radarSweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
