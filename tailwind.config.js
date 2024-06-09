/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        cardHeight: "10rem", // 160px
      },
      colors: {
        primary: "#882565",
        primary1: `#e16a96`,
        primary2: `#e16a96`,
        cartColor: "#f7e8e5",
        homeColor: "#426c7b",
        buttonColor: "#34646c",
        slate: "#334155",
        lightSlate: `#64748b`,
        textColor: "#949494",
        iconGreen: "#67ad5b",
        iconPurple: "#8f31aa",
        iconRed: "#e15240",
        blueShade1: "#2596be",
        blueShade2: "#4ca9be",
        orangeShade1: "#de7b3d",
        orangeShade2: "#b14521",
      },
    },
    fontFamily: {
      cusFont: ["Open Sans", "sans-serif"],
      cursive: ["Pacifico", "cursive"],
    },
  },
  plugins: [],
};
