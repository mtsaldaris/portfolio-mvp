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
        // Default Palette
        // 'brand-light': '#f5f7fa', // light desaturated background
        // 'brand-primary': '#38bdf8', // slate-800 — readable body
        // 'brand-secondary': '#0284c7', // cyan-600 — clean but distinct (background/soft accent)
        // 'brand-muted': '#475569', // slate-600 — clearer subtext in light mode
        // 'brand-text': '#334155', // slate-700 — clean paragraph

        // 'brand-dark': '#111827', // very dark slate
        // 'brand-dark-primary': '#38bdf8', // sky-400 — slight neon touch
        // 'brand-dark-secondary': '#0ea5e9', // sky-500 — accent clarity
        // 'brand-dark-muted': '#94a3b8', // slate-400 — more visible in dark mode
        // 'brand-dark-text': '#e2e8f0', // slate-200 — calm readability

        // Updated Light Theme Palette - Improved Contrast & Clarity
        'brand-light': '#fdf6e3',         // light background — soft cream yellow (Solarized light-inspired)
        'brand-primary': '#3e5c76',       
        'brand-secondary': '#64748b',     // slate-500 — subtle accent
        'brand-accent': '#0f172a',        // slate-900 — header text/accent
        'brand-muted': '#94a3b8',         // slate-400 — more muted subtext
        'brand-text': '#1e293b',          // slate-800 — paragraph text

        'brand-dark': '#0d1321',
        'brand-dark-primary': '#748cab',
        'brand-dark-secondary': '#3e5c76',
        'brand-dark-muted': '#94a3b8',
        'brand-dark-text': '#f0ebd8',

        // Palette 2 - Sleek Slate Blues + Off White
        // 'brand-light': '#e0e1dd',
        // 'brand-primary': '#415a77',
        // 'brand-secondary': '#778da9',
        // 'brand-accent': '#1b263b',
        // 'brand-muted': '#415a77',
        // 'brand-text': '#0d1b2a',

        // 'brand-dark': '#0d1b2a',
        // 'brand-dark-primary': '#778da9',
        // 'brand-dark-secondary': '#415a77',
        // 'brand-dark-muted': '#a5b3c7',
        // 'brand-dark-text': '#e0e1dd',
      },
    },
  },
  plugins: [],
}
