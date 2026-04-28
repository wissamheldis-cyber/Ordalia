import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "Geist", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        deep: "#02070D",
        night: "#061019",
        mist: "#EAF4FF",
        muted: "rgba(234,244,255,.62)",
        cyan: "#8AF6FF",
        violet: "#E6A7FF",
        blue: "#6A7DFF",
        gold: "#D4AF37",
      },
      boxShadow: {
        liquid: "0 34px 120px rgba(0,0,0,.46), 0 0 80px rgba(138,246,255,.12), 0 0 80px rgba(230,167,255,.08)",
        button: "0 0 34px rgba(138,246,255,.25), 0 0 42px rgba(230,167,255,.17)",
        glow: "0 0 60px rgba(138,246,255,.22), 0 0 90px rgba(230,167,255,.13)"
      }
    }
  },
  plugins: [],
};
export default config;
