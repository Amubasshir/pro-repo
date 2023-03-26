/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //   sm: '276px',
    //   md: '68px',
    //   lg: '992px',
    //   xl: '14000px',
    // },
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif'],
      },
    },
  },
  plugins: [],
};
