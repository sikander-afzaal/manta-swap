const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        headerBorder:"linear-gradient(91.82deg, #70B9FF 44.4%, #B689FF 53.21%, #7DF4D0 60.97%)",
        mainBg:"url('/mainBg.png')",
        borderGr:"linear-gradient(132.82deg, #A5128A 1.29%, #7597BA 38.53%, #BC85FF 97.49%)",
        mainGr:
          "linear-gradient(73.6deg, #85FFC4 2.11%, #5CC6FF 42.39%, #BC85FF 85.72%)",
      },
      colors: {
        headerBg: "#09080C",
        gray: "#A6A0BB",
        mirage:"#1C1924",
        cinder:"#131118"
      },
    },
  },
  plugins: [],
};
