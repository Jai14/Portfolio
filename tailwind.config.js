/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 15"', 'serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
}

