/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'notosansjp': ['Noto Sans JP', 'san-serif'],
        'sawagothic': ['sawarabi-gothic', 'san-serif'],
        'guppo': ['Gruppo', 'san-serif'],
      },
    },
  },
  plugins: [],
}

