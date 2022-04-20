const colors = require('tailwindcss/colors');
const color = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: color.trueGray,
        darkblue: "#08406e",
        background: "#1d2024",
        ownMessage: "#1a6beb",
        extraMessage: "#4b5057"
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  plugins: [],
};
