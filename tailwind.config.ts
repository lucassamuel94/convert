import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem'
        }
      },
      colors: {
        blue: {
          100: '#080815',
          200: '#0E0F25',
          300: '#141534',
          400: '#1F2151',
          500: '#2F3279',
          600: '#2F34AB',
          700: '#4A5DCD',
          800: '#7D8DEC',
          900: '#B2B8DE'
        },
        white: '#F1F2F6',
        black: '#04040B'
      },
      fontFamily: {
        sans: 'Inter, ui-sans-serif, sans-serif',
        mono: '"IBM Plex Mono", monospace'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config
