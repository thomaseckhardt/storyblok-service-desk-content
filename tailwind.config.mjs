/** @type {import('tailwindcss').Config} */
import tailwindcssTypography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const fontFamily = {
  sans: 'Roboto, Helvetica, Arial, sans-serif',
  sans__: [
    // 'Sofia Sans Extra Condensed Variable',
    ...defaultTheme.fontFamily.sans,
  ],
  mono__: [
    'Inconsolata Variable',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
    ...defaultTheme.fontFamily.mono,
  ],
}

// shadow-[]

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        derek:
          '0px 0px 0px 1px rgba(0,0,0,0.06),0px 1px 1px -0.5px rgba(0,0,0,0.06),0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06),0px 12px 12px -6px rgba(0,0,0,0.06),0px 24px 24px -12px rgba(0,0,0,0.06)',
      },
      // TailwindCSS Color Generator
      // https://uicolors.app/create
      // NOTE: Heads up! If you change a color here, you need to change it in the
      // - storyblok/components.273160.json storyblok-palette fields like "backgroundColor"
      // - src/utils/color.ts helper function
      colors: {
        'sierra': {
          '50': '#fdf4ef',
          '100': '#fbe5d9',
          '200': '#f5c9b3',
          '300': '#efa582',
          '400': '#e77650',
          '500': '#e1512a', // DEFAULT
          '600': '#d33c23',
          '700': '#af2d1f',
          '800': '#8c2620',
          '900': '#71211d',
          '950': '#3d0f0d',
        },

        // https://www.madebycircular.com.au/product/sierra-brand-style-guide
        'scarlet': {
          '50': '#fff5ec',
          '100': '#ffe8d3',
          '200': '#ffcda5',
          '300': '#ffaa6d',
          '400': '#ff7a32',
          '500': '#ff560a',
          '600': '#f33800', // DEAFULT: Sierra
          '700': '#cc2602',
          '800': '#a11f0b',
          '900': '#821d0c',
          '950': '#460b04',
        },
        'pearl-bush': {
          '50': '#f8f6f4',
          '100': '#efebe5',
          '200': '#ded5c9', // DEFAULT: Stone
          '300': '#c9baa8',
          '400': '#b39b84',
          '500': '#a4846b',
          '600': '#967460',
          '700': '#7d6051',
          '800': '#674f45',
          '900': '#54423a',
          '950': '#2c221e',
        },
        'dune': {
          '50': '#f4f4f2',
          '100': '#e3e3de',
          '200': '#c9c7bf',
          '300': '#aaa59a',
          '400': '#918b7e',
          '500': '#827c70',
          '600': '#6f685f',
          '700': '#5a544e',
          '800': '#4e4945',
          '900': '#45403e',
          '950': '#2e2a28', // DEFAULT: Charcoal
        },

        'siam': {
          '50': '#f6f7f6',
          '100': '#e4e6e1',
          '200': '#c8ccc3',
          '300': '#a4ab9d',
          '400': '#808978',
          '500': '#666e5e',
          '600': '#596152',
          '700': '#42483d',
          '800': '#373b34',
          '900': '#30332e',
          '950': '#191c17',
        },
        'mine-shaft': {
          '50': '#f8f7f8',
          '100': '#f0eeee',
          '200': '#dddadb',
          '300': '#c0b9bc',
          '400': '#9d9396',
          '500': '#827579',
          '600': '#6a5f62',
          '700': '#564e50',
          '800': '#4a4244',
          '900': '#403a3c',
          '950': '#2e2a2b',
        },
        'mine-shaft2': {
          'DEFAULT': '#363739', // 900
          '50': '#f5f6f6',
          '100': '#e6e7e7',
          '200': '#cfd1d2',
          '300': '#adb0b3',
          '400': '#84888c',
          '500': '#696d71',
          '600': '#595c61',
          '700': '#4c4f52',
          '800': '#434447',
          '900': '#363739',
          '950': '#252627',
        },
        'cameo': {
          'DEFAULT': '#d3b89c', // 300
          '50': '#faf6f2',
          '100': '#f2ebe2',
          '200': '#e5d5c3',
          '300': '#d3b89c',
          '400': '#c19876',
          '500': '#b47f5b',
          '600': '#a76d4f',
          '700': '#8b5843',
          '800': '#71493b',
          '900': '#5c3d32',
          '950': '#311e19',
        },
        'pearl-bush': {
          'DEFAULT:': '#eaded2', // 200
          '50': '#f9f6f3',
          '100': '#f2eae2',
          '200': '#eaded2',
          '300': '#d2b79f',
          '400': '#bf9578',
          '500': '#b27d5d',
          '600': '#a46b52',
          '700': '#895745',
          '800': '#6f473d',
          '900': '#5b3c33',
          '950': '#301e1a',
        },
        'pale-slate': {
          'DEFAULT': '#bbb9ba', // 400
          '50': '#f7f6f6',
          '100': '#f0efef',
          '200': '#e3e2e2',
          '300': '#d1d0d0',
          '400': '#bbb9ba',
          '500': '#aba9aa',
          '600': '#979495',
          '700': '#828081',
          '800': '#6a6969',
          '900': '#585757',
          '950': '#333333',
        },
        'iron': {
          'DEFAULT:': '#d4d7da', // 200
          '50': '#f6f7f8',
          '100': '#ebecee',
          '200': '#d4d7da',
          '300': '#c4c8cc',
          '400': '#a7adb3',
          '500': '#9198a0',
          '600': '#808690',
          '700': '#737882',
          '800': '#61656c',
          '900': '#505258',
          '950': '#333438',
        },
        'boulder': {
          'DEAFULT': '#767477', // 500
          '50': '#f6f5f6',
          '100': '#e7e6e7',
          '200': '#d1d0d1',
          '300': '#b0afb1',
          '400': '#888789',
          '500': '#767477',
          '600': '#5d5c5e',
          '700': '#504e50',
          '800': '#464446',
          '900': '#3d3c3d',
          '950': '#262626',
        },
      },
      fontFamily,
      aspectRatio: {
        '16/9': '16/9',
      },
    },
  },
  plugins: [
    tailwindcssTypography,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.stack': {
          display: 'grid',
        },
        '.stack > *': {
          'grid-area': '1/1',
          width: '100%',
        },
      })
    }),
  ],
}
