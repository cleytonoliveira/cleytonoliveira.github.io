/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
      prompt: ["Prompt", "sans-serif"],
    },
    fontSize: {
      sm: "0.875rem",
      xl: "1.25rem",
      "2xl": "1.333rem",
      "3xl": "2rem",
      "4xl": "2.667rem",
      "5xl": "3.333rem",
      "6xl": "4rem",
    },
    letterSpacing: {
      widest: ".35em",
    },
    extend: {
      colors: {
        nero: "#292929",
        "suva-grey": "#898989",
        "gray-30": "#4D4D4D",
        gray: "#868686",
        "eerie-black": "#1F1F1F"
      },
      width: {
        84: "21rem",
        100: "25rem",
        125: "31.25rem",
        140: "35rem",
        640: "40rem",
        1024: "64rem",
        // 1320: "82.5rem",
      },
      height: {
        104: "26.063rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
};
