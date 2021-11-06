const { coolGray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './_site/**/*.html',
    './src/_data/themeColorStrings.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2160px',
        'fp': 'calc(512px + 66.667%)',
        'max-sm': { 'max': '540px' }
      },
      colors: {
        gray: colors.coolGray,
        green: colors.teal,
        fp: {
          "primary-dark": colors.blue['700'],
          "primary": colors.blue['500'],
          "primary-light": colors.blue['300'],
        }
      },
      borderWidth: {
        3: '3px'
      },
      boxShadow: {
        // solid: '0 0 0 4px #202023',
        solid: '2px 2px 0 16px rgba(17, 24, 39, .25)',
        'inner-xl': 'inset 1px 0px 8px rgba(0,0,0,.2)',
        inset: 'inset 0 1px 2px rgba(0,0,0,.1), inset 0 -1px 1px rgba(255,255,255,.05)'
      },
      fontFamily: {
        sans: [
          '"Inter var"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          '"Recursive"', 'monospace'
        ]
      },
      fontSize: {
        h2: ['clamp(1.125rem, 3vw, 2rem)', { lineHeight: 'clamp(1.75rem, 1.275rem, 1rem)' }],
        p: ['clamp(0.75rem, 2vw, 1.125rem)', { lineHeight: 'clamp(1.75, 1.5, 1.25)' }],
        lede: ['clamp(1rem, 3vw, 1.5rem)', { lineHeight: 'clamp(1, 1.5, 1.375)' }],
      },
      height: {
        192: "48rem",
        256: "64rem"
      },
      outline: {
        'border-3': "colors.coolGray[900] 3px solid"
      },
      width: {
        192: "48rem",
        256: "64rem"
      }
    },

    // transitionTimingFunction: {
    //   DEFAULT: 'cubic-bezier(0, 0.3, 0, 1)',
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // plugin(function({ addComponents }) {
    //   const layouts = {
    //     'has-side-panel': {
    //         display: 'grid',
    //         grid: '[stack] 1fr / min-content [stack] 1fr',
    //     }
    //   }

    //   addComponents(layouts)
    // })
  ],
}
