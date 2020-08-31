const plugin = require('tailwindcss/plugin');

const {
  colors: { ...colors },
} = require('tailwindcss/defaultTheme');

module.exports = {
  plugins: ['@tailwindcss/ui'],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '3rem',
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    colors: {
      ...colors,
      pink: '#e81b74',
    },
    extend: {
      // margin: {
      //   '96': '24rem',
      //   '128': '32rem',
      // },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
