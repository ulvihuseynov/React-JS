/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
center:true,
screens: {
  sm: '640px', // sm ekran üçün container genişliyi
  md: '768px', // md ekran üçün container genişliyi
  lg: '1024px', // lg ekran üçün container genişliyi
  xl: '1280px', // xl ekran üçün container genişliyi
  '2xl': '1420px', // 2xl ekran üçün container genişliyi
},
    },
    fontFamily:{
      'font-poppins': ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}