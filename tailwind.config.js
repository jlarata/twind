/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./public/**/*.{html,js}", //<- esto es fundamental y depende de la arquitectura de carpetas que armés para el input y output del proceso del css.
  ],
  theme: {
    extend: {
      colors:
      {
        gray: colors.gray,
        colorloco: "#FF6363",
        colorlocovar:
        {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

