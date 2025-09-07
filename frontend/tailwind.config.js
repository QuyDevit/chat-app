/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        "military-green": {
          DEFAULT: "#166534",
          hover: "#15803d"
        },
        "accent-orange": {
          DEFAULT: "#ea580c",
          hover: "#f97316"
        }
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 197, 94, 0.3)"
      }
    }
  },
  plugins: []
};
