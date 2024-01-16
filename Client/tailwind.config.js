/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        cardHeight: "10rem", // 160px
      },
      colors: {
        primary: "#815487",
        secondary: `#444444`,
        cartColor: "#f7e8e5",
      },
    },
  },
  plugins: [],
};
