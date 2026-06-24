import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",

        border: "rgba(255,255,255,0.08)",
        input: "rgba(255,255,255,0.08)",
        ring: "#f59e0b",

        amber: {
          50: "#fffdf5",
          100: "#fff7db",
          200: "#ffeeb3",
          300: "#ffe082",
          400: "#facc15",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },

        zinc: {
          950: "#09090b",
        },

        brand: {
          gold: "#f59e0b",
          goldLight: "#fbbf24",
          goldDark: "#d97706",

          charcoal: "#09090b",
          midnight: "#050505",

          cream: "#fffdf5",

          success: "#10b981",
          warning: "#f59e0b",
          danger: "#ef4444",
          info: "#3b82f6",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],

        heading: [
          "Playfair Display",
          "Georgia",
          "serif",
        ],

        serif: [
          "Cormorant Garamond",
          "serif",
        ],
      },

      fontSize: {
        hero: [
          "5rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg,#fbbf24 0%,#f59e0b 40%,#d97706 100%)",

        "story-gradient":
          "linear-gradient(135deg,#fbbf24 0%,#f59e0b 50%,#facc15 100%)",

        "glass-gradient":
          "linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))",

        radial:
          "radial-gradient(var(--tw-gradient-stops))",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      boxShadow: {
        glow: "0 0 30px rgba(245,158,11,0.25)",

        "glow-lg":
          "0 0 60px rgba(245,158,11,0.20)",

        glass:
          "0 8px 32px rgba(0,0,0,0.35)",

        premium:
          "0 25px 50px rgba(0,0,0,0.45)",
      },

      backdropBlur: {
        xs: "2px",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform:
              "translateY(-12px)",
          },
        },

        glow: {
          "0%,100%": {
            opacity: "0.7",
          },

          "50%": {
            opacity: "1",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition:
              "-1000px 0",
          },

          "100%": {
            backgroundPosition:
              "1000px 0",
          },
        },

        gradient: {
          "0%,100%": {
            backgroundPosition:
              "0% 50%",
          },

          "50%": {
            backgroundPosition:
              "100% 50%",
          },
        },

        pulseGlow: {
          "0%,100%": {
            boxShadow:
              "0 0 0 rgba(245,158,11,0)",
          },

          "50%": {
            boxShadow:
              "0 0 30px rgba(245,158,11,.4)",
          },
        },

        reveal: {
          from: {
            opacity: "0",
            transform:
              "translateY(20px)",
          },

          to: {
            opacity: "1",
            transform:
              "translateY(0px)",
          },
        },
      },

      animation: {
        float:
          "float 6s ease-in-out infinite",

        glow:
          "glow 3s ease-in-out infinite",

        shimmer:
          "shimmer 3s linear infinite",

        gradient:
          "gradient 8s ease infinite",

        pulseGlow:
          "pulseGlow 3s ease-in-out infinite",

        reveal:
          "reveal .8s ease forwards",
      },
    },
  },

  plugins: [],
};

export default config;