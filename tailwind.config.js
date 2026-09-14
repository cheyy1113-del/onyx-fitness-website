/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          bg: "#050505",
          surface: "#0D0D0D",
          card: "#121212",
          cardHover: "#181818",
          border: "#1F1F1F",
          borderLight: "#2E2E2E",
          red: "#E50914",
          redHover: "#C1070F",
          redGlow: "rgba(229, 9, 20, 0.35)",
          textMuted: "#A1A1AA",
          textDim: "#71717A"
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif']
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(229, 9, 20, 0.4)',
        'red-glow-lg': '0 0 50px -10px rgba(229, 9, 20, 0.5)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
