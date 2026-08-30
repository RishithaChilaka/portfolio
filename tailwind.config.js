/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050b16',
        panel: '#081020',
        cyan: {
          glow: '#38bdf8',
        },
        gold: '#facc15',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)',
        heroGrad: 'linear-gradient(135deg,#eaf6ff 0%,#7dd3fc 45%,#38bdf8 70%,#0ea5e9 100%)',
      },
      backgroundSize: {
        grid: '42px 42px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
