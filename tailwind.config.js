const plugin = require('tailwindcss/plugin');
const {
  colors: { ...colors },
} = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    colors: {
      black: {
        default: '#171e21',
      },
      indigo: {
        dark: '#202e78',
        default: '#5c6ac4',
        lighter: '#b3bcf5',
      },
      orange: {
        default: '#fd7e0c',
      },
      yellow: {
        default: '#feaf2f',
      },
      green: {
        default: '#6dc34b',
      },
      blue: {
        default: '#00a6cc',
      },
      pink: {
        dark: '#6f164a',
        default: '#e81b74',
        light: '#eb3981',
        lighter: '#fef3f8',
      },
      purple: {
        default: '#7d7184',
        light: '#7d7184',
      },
      grey: {
        darkest: '#232323',
        darker: '#464646',
        dark: '#6d6d6d',
        default: '#969696',
        light: '#b3b3b3',
        lighter: '#e9e9e9',
        lightest: '#f8f7f7',
      },
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
