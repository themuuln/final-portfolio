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
    },
    colors: {
      // brand_bg: {
      //   100: "#ccd2d5",
      //   200: "#99a6ab",
      //   300: "#667982",
      //   400: "#334d58",
      //   500: "#00202e",
      //   600: "#001a25",
      //   700: "#00131c",
      //   800: "#000d12",
      //   900: "#000609",
      // },
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
      // brand_main: {
      //   100: "#ffe7d6",
      //   200: "#ffcead",
      //   300: "#ffb683",
      //   400: "#ff9d5a",
      //   500: "#ff8531",
      //   600: "#cc6a27",
      //   700: "#99501d",
      //   800: "#663514",
      //   900: "#331b0a",
      // },
      brand_main: {
        100: "#fcfbe8",
        200: "#f9f7d1",
        300: "#f6f3bb",
        400: "#f3efa4",
        500: "#f0eb8d",
        600: "#c0bc71",
        700: "#908d55",
        800: "#605e38",
        900: "#302f1c",
      },
      extraverted: "#5F96B3",
      intuitive: "#D9B044",
      thinking: "#5CA176",
      prospecting: "#816499",
      turbulent: "#DC6A63",
      percentage: "#51596A",
      chartbg: "#001A25",
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
