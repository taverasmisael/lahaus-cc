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
        primary: '#012D26',
        accent: '#3ECFAF',
      },
    },
  },
}
