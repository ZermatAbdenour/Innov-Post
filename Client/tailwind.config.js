/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "details-background": "url('/src/assets/background.svg')",
      },
      colors: {
        "baridi-yellow": "#FFC436",
        "baridi-blue": "#0C356A",
      },
    },
  },
  plugins: [],
};
