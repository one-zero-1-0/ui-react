/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'blurBack': "url('./src/assets/images/student-college.jpg')",
    },
  },
  plugins: [],
}
}