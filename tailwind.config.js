/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], 
      roboto:[ "Roboto Condensed",' sans-serif'] , // For close the letters
      cursive:["Playwrite GB S", 'serif'],  // For cursive type letters
      roboto2 :["Roboto", "serif"]   // for normal text
    },
  },
  plugins: [],
}

