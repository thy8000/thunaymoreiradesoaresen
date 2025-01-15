const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      gray: colors.gray,
      green: colors.green,
    },
    extend: {
      colors: {
        green: {
          500: "#3A7B4C",
        }
      }
    }
    /*
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '1140px',
        xl: '1320px',
     },
    }
    */
  },
  plugins: [],
}

