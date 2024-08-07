import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/app/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // light-purple
        'light-purple': '#ac67de',
        // gunmetal
        'dark-blue': '#001f3e',
        // myrtle-green
        'light-blue': '#d0e8f2',
        // light-myrtle-green
        'light-grey': '#f7f9fc',
        // earth yellow
        'white': '#ffffff'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-saira)', 'sans-serif'],
        serif: ['var(--font-lora)', 'var(--font-saira)', 'serif'],
        saira: ['var(--font-saira)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
        hind: ['var(--font-hind)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
        },
      })
    })
  ],
}

export default config
