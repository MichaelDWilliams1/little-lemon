/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': 'League Spartan'
      },
      height: {
        '1/10': '10%',
        '9/10': '90%',
        '800': '800px',
        '500': '500px',
        '1000': '1000px'
      },
      width: {
        '300': '330px',
        '400': '400px',
        '500': '500px',
        '700': '700px',
        '800': '800px',
        '1000': '1000px',
        '1200': '1200px'
      }
    },
  },
  plugins: [],
}