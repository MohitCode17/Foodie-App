/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#FF9447",
        lightCoral: "#FFAF75",
        blue: "#4F849F",
        red: "#FF6868",
        primaryBG: "#FCFCFC",
        textDark: "#000000",
        textSmooth: "#555555",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        heading: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
