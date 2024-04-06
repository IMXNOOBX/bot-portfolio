/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        mx: '0.6rem',
        ms: '0.5rem',
      },
      borderRadius: {
        xs: '0.2rem',
      },
      rotate: {
        full: '360deg',
      },
      transitionProperty: {
        'width': 'width',
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out 1s',
        show: 'show 1s ease-in-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        screen: {
          '0%': { opacity: '0' },
          '30%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      screens: {
        'xs': '390px',
      },
      minHeight: {
        'chat': '600px',
      },
    },
  },
  plugins: [],
}

