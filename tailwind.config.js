const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      title: "#021628",
      gray: "#5c5b5c",
      blue: "#799BEF",
      black: "#243330",
      red: "#7e2649",
      orange: "#e37e48",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    fontFamily: {
      normal: ["Nunito", "sans-serif"],
      title: ["Nunito", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
