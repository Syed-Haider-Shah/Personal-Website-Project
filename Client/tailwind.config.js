/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        cardHeight: "10rem", // 160px
      },
    },
  },
  plugins: [],
};
