/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
        },
        accent: "#3B82F6",
        critical: "#DC2626",
        success: "#16A34A",
        warning: "#D97706",
        textPrimary: "#0A0A0A",
        textSecondary: "#52525B",
        border: "#E4E4E7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.4" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
