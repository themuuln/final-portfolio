/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {},
      colors: {
        brand_bg: {
          100: "#e9d9fc",
          200: "#d2b4f8",
          300: "#bc8ef5",
          400: "#a569f1",
          500: "#8f43ee",
          600: "#7236be",
          700: "#56288f",
          800: "#391b5f",
          900: "#1d0d30",
        },
        extraverted: "#5F96B3",
        intuitive: "#D9B044",
        thinking: "#5CA176",
        prospecting: "#816499",
        turbulent: "#DC6A63",
        percentage: "#51596A",
        chart_bg: {
          100: "#d0d0d0",
          200: "#a2a2a2",
          300: "#737373",
          400: "#454545",
          500: "#161616",
          600: "#121212",
          700: "#0d0d0d",
          800: "#090909",
          900: "#040404",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
      },
    }),
  ],
};
