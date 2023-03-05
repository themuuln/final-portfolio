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
      brand_bg: {
        100: "#ccd2d5",
        200: "#99a6ab",
        300: "#667982",
        400: "#334d58",
        500: "#00202e",
        600: "#001a25",
        700: "#00131c",
        800: "#000d12",
        900: "#000609",
      },
      brand_main: {
        100: "#ffe7d6",
        200: "#ffcead",
        300: "#ffb683",
        400: "#ff9d5a",
        500: "#ff8531",
        600: "#cc6a27",
        700: "#99501d",
        800: "#663514",
        900: "#331b0a",
      },
      extraverted: "#5f96b3",
      intuitive: "#d9b044",
      thinking: "#5ca176",
      prospecting: "#816499",
      turbulent: "#dc6a63",
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
