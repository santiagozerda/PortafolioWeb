/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: "#fb923c", // naranja
        secondary: "#00f0ff", // cyan cyberpunk
        accent: "#8b5cf6", // violeta opcional

        dark: "#020617",
        darkSoft: "#0a0f1f",
      },

      boxShadow: {
        neon: "0 0 10px #fb923c, 0 0 20px rgba(251,146,60,0.5)",
        neonCyan: "0 0 10px #00f0ff, 0 0 20px rgba(0,240,255,0.5)",
        neonMix: "0 0 15px rgba(251,146,60,0.3), 0 0 40px rgba(0,240,255,0.2)",
      },

      animation: {
        neonPulse: "neonPulse 2.5s infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },

      keyframes: {
        neonPulse: {
          "0%, 100%": { boxShadow: "0 0 10px #fb923c" },
          "50%": {
            boxShadow: "0 0 20px #fb923c, 0 0 40px rgba(0,240,255,0.5)",
          },
        },

        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
