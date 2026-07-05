import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05060A",
        surface: "#0B0F17",
        elevated: "#111827",
        primary: "#F8FAFC",
        secondary: "#94A3B8",
        muted: "#64748B",
        blue: "#38BDF8",
        green: "#34D399",
        violet: "#A78BFA",
        amber: "#FBBF24"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(56, 189, 248, 0.16)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
