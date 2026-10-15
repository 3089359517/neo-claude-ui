/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        claude: {
          orange: '#d97757',
          brown: '#c16540',
        },
        // CDS (Claude Design System) tokens — reverse-engineered from Claude Desktop
        clay: {
          DEFAULT: '#d97757',
          hover: '#cc5a36',
          light: '#fbf3ef',
          dark: '#e08264',
        },
        surface: {
          0: 'var(--cds-surface-0)',
          1: 'var(--cds-surface-1)',
          2: 'var(--cds-surface-2)',
          3: 'var(--cds-surface-3)',
          popover: 'var(--cds-surface-popover)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        'panel': 'var(--cds-panel-radius, 10px)',
        'bubble': 'var(--cds-message-bubble-radius, 18px)',
        'composer': 'var(--cds-radius-composer, 20px)',
      },
      boxShadow: {
        'popover': 'var(--cds-shadow-popover)',
        'composer': 'var(--cds-shadow-composer)',
        'composer-hover': 'var(--cds-shadow-composer-hover)',
        'composer-focus': 'var(--cds-shadow-composer-focus)',
        'panel': 'var(--cds-panel-shadow)',
        'panel-hover': 'var(--cds-panel-shadow-hover)',
      },
      animation: {
        'message-fade-up': 'message-fade-up 0.45s cubic-bezier(0.34, 1.3, 0.64, 1)',
        'clay-breathe': 'dframe-clay-breathe 2.4s infinite ease-in-out',
        'dot-pulse': 'dframe-dot-pulse 1.2s infinite ease-in-out',
        'shimmer-sweep': 'cds-skeleton-sweep 1.8s infinite cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
