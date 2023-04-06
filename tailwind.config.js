/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#1A535C',
        secondary: '#4ECDC4',
        tertiary: '#F7FFF7',
        tertiary_bg: '#F1F6F1'
      }
    },
  },
  plugins: [],
}
