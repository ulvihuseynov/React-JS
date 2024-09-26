/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "money":"url('./src/assets/image/money.jpg')"
      },
      backgroundSize:{
        "50%":"100% 100%"
      }
    },
  },
  plugins: [],
}