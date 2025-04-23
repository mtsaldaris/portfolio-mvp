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
        // Light theme colors
        'brand-light': '#ffffff', // Pure white background
        'brand-primary': '#7f5af0', // Purple primary color
        'brand-secondary': '#2cb67d', // Green accent
        'brand-muted': '#94a1b2', // Gray for muted text
        'brand-text': '#2d3748', // Dark text
        
        // Dark theme colors
        'brand-dark': '#16161a', // Dark background
        'brand-dark-primary': '#7f5af0', // Purple primary (same as light)
        'brand-dark-secondary': '#2cb67d', // Green accent (same as light)
        'brand-dark-muted': '#94a1b2', // Gray for muted text (same as light)
        'brand-dark-text': '#fffffe', // Light text
      },
    },
  },
  plugins: [],
}