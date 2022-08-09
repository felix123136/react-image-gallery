//@type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'veryDarkGray': '#212426',
      'almostWhite': '#F1F1F1',
      'blue': '#3120E0',
      'purple': '#80558C',
      'gray': '#A5C9CA',
      'lightTeal': '#54BAB9',
      'darkTeal': '#3FA796',
    },
    extend: {},
  },
  plugins: [],
}
