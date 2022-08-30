/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        body: '#202020',
        bodyRgb: 'rgb(32,32,32)',
        grey: '#bebebe',
        tertiary: '',
      },
      fontFamily: {
        sirin: ['Sirin Stencil', 'sans-serif'],
        kaushan: ['Kaushan Script', 'sans-serif'],
      },

      fontSize: {
        big_mobile: ['3rem', '4rem'],
        big_tablet: ['6rem', '7rem'],
        big_desktop: ['8rem', '9rem'],
      },

      dropShadow: {
        text: '1px 1px 1px #202020',
      },
    },
  },
  variants: {},
  plugins: [],
};
