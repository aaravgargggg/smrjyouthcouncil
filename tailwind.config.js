/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#f7f4ee',
        card: '#fdfbf7',
        raised: '#efe9df',
        hairline: 'rgba(31, 27, 22, 0.08)',
        'border-input': 'rgba(31, 27, 22, 0.32)',
        primary: '#1f1b16',
        secondary: '#5e554a',
        muted: '#6f665a',
        aubergine: {
          DEFAULT: '#2a1b36',
          raised: '#3b284b',
          hairline: 'rgba(239, 233, 222, 0.12)',
        },
        'dark-primary': '#efe9de',
        'dark-secondary': '#b3aaa0',
        accent: {
          DEFAULT: '#edc868',
          text: '#1f1b16',
          hover: '#e2bc5c',
        },
        semantic: {
          positive: '#16a34a',
          negative: '#dc2626',
        }
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', '"Instrument Serif"', 'Georgia', 'serif'],
        display: ['"Bodoni Moda"', '"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      borderRadius: {
        tag: '4px',
        btn: '8px',
        card: '12px',
        panel: '16px',
      },
      boxShadow: {
        float: '0 8px 24px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
