/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-900": "#19191a",
        "background-f2f2f2": "#f2f2f2",
        "grey-50": "rgba(229, 229, 230, 0.5)",
        "grey-300": "#b0b1b3",
        white: "#fff",
        "grey-100": "#e5e5e6",
        "grey-200": "#cacbcc",
        "text-5-": "#1d2129",
        "grey-400": "#96979a",
      },
      spacing: {},
      fontFamily: {
        body: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      "12xl": "31px",
      "6xl": "25px",
      "20xl": "39px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
