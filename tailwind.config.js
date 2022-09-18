/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        gray: "#F7F6F9",
        primary: "#FFEC89",
        green: "#36d67e",
      },
    },
  },
  plugins: [],
};
