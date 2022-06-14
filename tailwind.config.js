// const defaultTheme = require(' tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        jet: '#39332d',
        slategray: '#6e8087',
        rustyred: '#d83148',
        independence: '#38405f',
        independence2: '#59546c'
        },
      fontFamily: {
        textstyle: ['Cuprum']
      }
    },
  },
  plugins: [],
}