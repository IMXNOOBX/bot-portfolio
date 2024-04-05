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
      }
    },
  },
  plugins: [],
}

