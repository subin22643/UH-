/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        formBG: "rgba(221, 221, 221, 0.9)",
        formText: "#353131",
        formInput: "rgba(236, 236, 236, 0.72)",
        formButton: "rgba(165, 72, 140, 0.85)",
        cancelButton: "#676767",
        modalBorder: "#6B6B6B",
        mc1: "#F72585",
        mc2: "#B5179E",
        mc3: "#7209B7",
        mc4: "#560BAD",
        mc5: "#480CA8",
        mc6: "#3A0CA3",
        mc7: "#3F37C9",
        mc8: "#4361EE",
        mc9: "#4895EF",
        mc10: "#4CC9F0",
        bg1: "#f0f9ff",
        bd1: "#bae6fd",
        tab1: "#EF476F",
        tab2: "#F78C6B",
        tab3: "#FFD166",
        tab4: "#06D6A0",
        tab5: "#118AB2",
        tab6: "#073B4C",
      },
      height: {
        "screen-80": "calc(100vh - 96px)",
        "screen-40": "calc(100% - 40px)",
        "screen-16": "calc(100% - 16px)",
      },
      transformOrigin: {
        bottom: "bottom",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
