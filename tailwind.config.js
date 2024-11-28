/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(355, 100%, 74%)',
        'very-dark-blue': 'hsl(208, 49%, 24%)',
        'grayish-hsl': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue': 'hsl(240, 10%, 16%)',
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}