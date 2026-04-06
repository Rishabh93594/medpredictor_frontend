/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
      blueSoft: "#2F6FED",
      aqua: "#44CCFF",
      charcoal: "#494947"
      },
    },
  },
  plugins: [],
};