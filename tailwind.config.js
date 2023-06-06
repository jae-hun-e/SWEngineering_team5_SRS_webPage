/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      fSize: "1920px",
    },
    extend: {
      colors: {
        antiquewhite: "#e4d8c6",
        white: "#fff",
        saddlebrown: "#8a6314",
        gray: {
          100: "rgba(255, 255, 255, 0.2)",
          200: "rgba(0, 0, 0, 0.2)",
          300: "rgba(33, 33, 33, 0.5)",
          400: "rgba(0, 0, 0, 0.4)",
          500: "rgba(255, 255, 255, 0.3)",
          600: "rgba(0, 0, 0, 0.6)",
        },
        gainsboro: "#d9d9d9",
        goldenrod: {
          100: "#cfae0a",
          200: "rgba(207, 174, 10, 0.4)",
        },
        black: "#000",
        yellowgreen: "#80c743",
        olive: "#949e31",
        khaki: "#e7e790",
        brown: "#792728",
        olivedrab: "#9bb748",
        indigo: "#440281",
        linen: "#f5eade",
        darkslategray: "rgba(70, 70, 70, 0.5)",
        cornflowerblue: "#98b5ff",
      },
      fontFamily: {
        buenard: "Buenard",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
      zoom: {
        80: "0.8",
      },
    },
    fontSize: {
      "29xl": "3rem",
      "13xl": "2rem",
      "45xl": "4rem",
      "17xl": "2.25rem",
      "11xl": "1.88rem",
      base: "1rem",
      xl: "1.25rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
