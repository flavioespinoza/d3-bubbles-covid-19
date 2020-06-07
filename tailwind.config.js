module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#171e21',
        cyan: '#9cdbff',
        pink: '#e81b74',
        'pink-dark': '#6f164a',
        'pink-light': '#eb3981',
        'pink-lighter': '#fef3f8',
        indigo: '#5c6ac4',
        blue: '#00a6cc',
        red: '#de3618',
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
