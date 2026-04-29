/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        primary: {
          500: "#3b82f6",
          600: "#2563eb",
          400: "#60a5fa",
        },
        navy: {
          900: "#020617",
          800: "#0f172a",
        },
        accent: {
          gold: "#F59E0B",
        }
      },
      backgroundImage: {
        'dotted-pattern': 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
      },
      backgroundSize: {
        'dotted': '20px 20px',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 3s",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        }
      },
    },
  },
  plugins: [],
};
