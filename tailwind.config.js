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
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        riseIn: {
          '0%': { transform: 'translateY(65%)', opacity: '0' },
          '60%': { opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.25)' },
          '50%': { boxShadow: '0 0 38px rgba(56,189,248,0.55)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -25px) scale(1.08)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'marquee-reverse': 'marqueeReverse 26s linear infinite',
        float: 'float 4.5s ease-in-out infinite',
        'scroll-up': 'scrollUp 11s linear infinite',
        'rise-in': 'riseIn 3.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
