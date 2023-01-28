/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headline: "#0d0d0d",
        paragraph: "#2a2a2a",
        buttonColor: "#ff8e3c",
        buttonText: "#0d0d0d",
        glassButtonBg: "rgba(255, 255, 255, 0.2)",
      },
      boxShadow: {
        buttonShadow: "-4px -4px 4px 1px rgba(31, 38, 135, 0.37)",
        volumeSliderShadow:
          "15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff",
        volumeSliderRangeShadow:
          "5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 10px #fff, inset 5px 5px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
