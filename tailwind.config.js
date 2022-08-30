/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/img/cropped-IMG-20210124-WA0050.jpg')",
        'logo-pattern': "url('../assets/img/cropped-Logo-MWI-removebg-preview.png')",
      },
    },
  },
  plugins: [],
}