/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F14',
          panel: '#111823',
          panel2: '#161F2C',
          border: '#20303F',
        },
        signal: {
          DEFAULT: '#5EEAD4', // cyan/teal — "system OK"
          dim: '#2DD4BF',
        },
        amber: {
          DEFAULT: '#F0B429', // warm secondary accent, used sparingly
        },
        ivory: '#E7EDF3',
        slate: {
          muted: '#8B98A5',
          faint: '#5B6773',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #1A2430 1px, transparent 1px), linear-gradient(to bottom, #1A2430 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(94,234,212,0.15), 0 0 40px -10px rgba(94,234,212,0.25)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        scanline: 'scanline 3s linear infinite',
      },
    },
  },
  plugins: [],
}
