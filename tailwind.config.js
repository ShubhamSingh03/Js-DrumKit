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
        navModalOpenBg: "#1c1c1c30",
      },
      boxShadow: {
        buttonShadow: "-4px -4px 4px 1px rgba(31, 38, 135, 0.37)",
        volumeSliderShadow:
          "15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff",
        volumeSliderRangeShadow:
          "5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 10px #fff, inset 5px 5px 5px rgba(0, 0, 0, 0.1)",
        navModalOpenShadow:
          "0px 100px 80px rgba(184, 184, 184, 0.07), 0px 25.8162px 19px 4px rgba(178, 178, 178, 0.0456112), 0px 7.779px 7.30492px rgba(0, 0, 0, 0.035), 0px 1.48838px 2.0843px rgba(0, 0, 0, 0.0243888)",
      },
      zIndex: {
        100: "100",
      },
      animation: {
        videoModal: "opacity 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
