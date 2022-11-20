const daisyui = require('daisyui')
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
          primary: '#24c8db',
          secondary: '#f73c00',
          accent: '#ffc131',
          neutral: '#25343C',
          'base-100': '#F8F8FB',
          info: '#93BADC',
          success: '#12A168',
          warning: '#F4C857',
          error: '#DE3B4E'
        },
        dark: {
          primary: '#24c8db',
          secondary: '#f73c00',
          accent: '#ffc131',
          neutral: '#2b2b2b',
          'base-100': '#1f1f1f',
          info: '#35B0F3',
          success: '#1B743C',
          warning: '#F38A12',
          error: '#F2215C'
        }
      }
    ]
  },
  plugins: [daisyui]
}

module.exports = config
