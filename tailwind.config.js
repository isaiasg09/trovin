/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`
const scale = (name, steps) => Object.fromEntries(steps.map((s) => [s, token(`${name}-${s}`)]))

const EASE_DECANT = 'cubic-bezier(0.22, 1, 0.36, 1)'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { ...scale('primary', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]), DEFAULT: token('primary-700') },
        secondary: { ...scale('secondary', [50, 100, 200, 300, 400]), DEFAULT: token('secondary-100') },
        accent: { ...scale('accent', [200, 300, 400, 500, 600, 700, 800]), DEFAULT: token('accent-500') },
        surface: { DEFAULT: token('surface'), raised: token('surface-raised'), deep: token('surface-deep') },
        ink: { DEFAULT: token('ink'), muted: token('ink-muted') },
        cream: { DEFAULT: token('secondary-100'), muted: token('cream-muted') },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', '"Bodoni 72"', 'Didot', 'Georgia', 'serif'],
        body: ['Jost', 'Futura', '"Century Gothic"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.32em' }],
      },
      letterSpacing: {
        label: '0.18em',
        eyebrow: '0.32em',
      },
      boxShadow: {
        wine: '0 30px 60px -20px rgb(var(--color-primary-950) / 0.55), 0 12px 24px -12px rgb(var(--color-primary-900) / 0.35)',
        'wine-sm': '0 14px 30px -14px rgb(var(--color-primary-900) / 0.35)',
        copper: '0 12px 32px -8px rgb(var(--color-accent-500) / 0.55)',
        'copper-lg': '0 18px 48px -10px rgb(var(--color-accent-400) / 0.7)',
      },
      transitionTimingFunction: {
        decant: EASE_DECANT,
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 28px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translate3d(-36px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translate3d(36px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgb(var(--color-accent-400) / 0.55), 0 12px 32px -8px rgb(var(--color-accent-500) / 0.55)',
          },
          '50%': {
            boxShadow: '0 0 0 14px rgb(var(--color-accent-400) / 0), 0 18px 48px -6px rgb(var(--color-accent-400) / 0.75)',
          },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        'drift-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in-up': `fade-in-up 1.1s ${EASE_DECANT} both`,
        'fade-in': `fade-in 1.2s ${EASE_DECANT} both`,
        'fade-in-left': `fade-in-left 1.1s ${EASE_DECANT} both`,
        'fade-in-right': `fade-in-right 1.1s ${EASE_DECANT} both`,
        'scale-in': `scale-in 1s ${EASE_DECANT} both`,
        'pulse-glow': 'pulse-glow 2.8s ease-in-out infinite',
        shine: 'shine 1.1s ease-out',
        draw: `draw 3.2s ${EASE_DECANT} 0.4s both`,
        'drift-down': 'drift-down 2.4s ease-in-out infinite',
        'ken-burns': 'ken-burns 14s ease-out both',
        'slow-spin': 'slow-spin 60s linear infinite',
      },
    },
  },
  plugins: [],
}
