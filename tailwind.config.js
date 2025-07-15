/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6BBE92",
          dark: "#4f9470"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
