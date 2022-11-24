const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')
const { join } = require('path')

const uiPath = join(__dirname, '../ui')

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    `${uiPath}/components/**/*.{html,js,svelte,ts}`,
    'src/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans]
      }
    }
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
          primary: '#45B1E8'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=black]'],
          primary: '#45B1E8',
          '--rounded-box': '0.2rem',
          '--rounded-btn': '0.2rem'
        }
      }
    ]
  },

  plugins: [typography, daisyui]
}

module.exports = config
