import type { Metadata, Viewport } from "next";
import { Orbitron, Rajdhani, Inter, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXUS OS // AI Career Command Center — Gabriel Henrique",
  description: "NEXUS OS v3 — AI Career Command Center of Gabriel Henrique. AI Systems Architect, Full Stack, Robotics & Automation.",
  keywords: "AI, Autonomous Systems, Robotics, Software Architecture, Portfolio, Career Command Center, Gabriel Henrique",
  authors: [{ name: "Gabriel Henrique" }],
  creator: "Gabriel Henrique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "NEXUS OS — Personal AI Operating System",
    description: "Personal AI Career Command Center — Interactive systems, neural matrix, tactical mission log, and AI copilot.",
    siteName: "NEXUS OS // Gabriel Henrique",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔮</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#04040A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable} ${spaceMono.variable}`}
    >
      <body className="bg-space-deep text-starlight antialiased selection:bg-cyber-cyan selection:text-space-deep">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
