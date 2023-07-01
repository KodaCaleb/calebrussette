/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'themeBlue' : '#8400FF',
      'themeBlack' : '#1D1D20',
      'themePurple' : '#CF1FBD',
      'themeWhite' : '#E0E0E0',
      'themeBlacker' : '#131316',
    },
  },
  plugins: [],
}

