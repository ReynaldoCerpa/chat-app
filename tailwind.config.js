const colors = require('tailwindcss/colors');
const color = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: color.trueGray,
        blue: "#08406e",
        background: "#dce3e2"
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
