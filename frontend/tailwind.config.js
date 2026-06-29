/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-2': '#121212',
        'bg-3': '#1a1a1a',
        gold: {
          DEFAULT: '#c6cace',
          light: '#e4e7eb',
        },
        rust: '#565b62',
        ink: '#ededed',
        muted: '#9a9a9a',
        line: '#2a2a2a',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
        widest4: '0.4em',
        widest5: '0.5em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'pulse-slow': 'pulse 1.4s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite 2s',
        'pin-bounce': 'pinBounce 2s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        pinBounce: {
          '0%, 100%': { transform: 'rotate(-45deg) translateY(0)' },
          '50%': { transform: 'rotate(-45deg) translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
      },
    },
  },
  plugins: [],
}
