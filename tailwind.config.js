/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '25/100': '25%',
        '30/100': '30%',
        '35/100': '35%',
        '90/100': '90%',
      },
    },
  },
  plugins: [],
};
