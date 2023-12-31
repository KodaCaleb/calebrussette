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
      'themeBlue' : '#a14bf1',
      'themeBlack' : '#1D1D20',
      'themePurple' : '#e55dd7',
      'themeWhite' : '#E0E0E0',
      'themeBlacker' : '#131316',
      'themeGrey' : '#999999',
    },
  },
  plugins: [],
}

