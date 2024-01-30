/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  variants: {
    display: ["group-hover"]
  },
  plugins: [],
}