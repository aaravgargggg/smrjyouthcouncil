/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#1F1329',
          800: '#2A1B36',
          700: '#3B284B',
          DEFAULT: '#563F6A',
          600: '#563F6A',
          500: '#755690',
          400: '#9A7EAF',
          200: '#C9BCD6',
          100: '#EAE2F0',
          50: '#F7F3FA',
        },
        gold: {
          DEFAULT: '#EDC868',
          light: '#F8E9B6',
          dark: '#CCA344',
          dim: '#9B7C33',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          light: '#FCFBF9',
          dark: '#F3EFEA',
          muted: '#EAE4DC',
        },
        ink: {
          DEFAULT: '#2A2330',
          deep: '#1A1420',
          muted: '#63596D',
          light: '#8E8398',
        }
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
