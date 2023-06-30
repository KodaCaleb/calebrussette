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
      'themeYellow' : '#FFD60A',
      'themeBlack' : '#1D1D20',
      'themeYellowDark' : '#FFDD33',
    },
  },
  plugins: [],
}

