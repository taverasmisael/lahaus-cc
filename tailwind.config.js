const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/client/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        copy: '#5b6866',
        primary: '#012d26',
        accent: '#3ecfaf',
      },
    },
  },
}
