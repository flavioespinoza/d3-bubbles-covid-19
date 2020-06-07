const { colors: { teal, orange, pink, ...colors } } = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    colors: colors,
    extend: {
      colors: {
        pink: {
          dark: '#6f164a',
          light: '#eb3981',
          lighter: '#fef3f8',
        },
        grey: {
          darkest: '#232323',
          darker: '#464646',
          dark: '#6d6d6d',
        },
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
