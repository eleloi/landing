/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        sans: ['Bitter Variable', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 1s steps(20), blink .7s infinite',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['dracula', 'lemonade'],
  },
}
