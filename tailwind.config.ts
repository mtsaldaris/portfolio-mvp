/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Light mode
        'brand-light': '#f5f7fa', // light desaturated background
        'brand-primary': '#38bdf8', // slate-800 — readable body
        'brand-secondary': '#0284c7', // cyan-600 — clean but distinct (background/soft accent)
        'brand-accent': '#0f172a', // slate-900 — header contrast
        'brand-muted': '#475569', // slate-600 — clearer subtext in light mode
        'brand-text': '#334155', // slate-700 — clean paragraph

        // Dark mode
        'brand-dark': '#111827', // very dark slate
        'brand-dark-primary': '#38bdf8', // sky-400 — slight neon touch
        'brand-dark-secondary': '#0ea5e9', // sky-500 — accent clarity
        'brand-dark-muted': '#94a3b8', // slate-400 — more visible in dark mode
        'brand-dark-text': '#e2e8f0', // slate-200 — calm readability

        // Stat card variants
        'card-slate': '#1f2937',     // slate-800 — dark base
        'card-sky': '#38bdf8',       // sky-400 — calmer sky accent
        'card-contrast': '#cbd5e1',  // slate-300 — improved visibility for light sections
      }
    },
  },
  plugins: [],
}