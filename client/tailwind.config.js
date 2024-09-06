/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",//#fdf5df
        secondary: "#5ebec4",//#00f6ff,#80DEEA(text-teal-300),#009688(text-teal-500)
        dimWhite: "rgba(0, 0, 0, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",//rgba(44, 107, 243, 0.1)
        customCyan: 'rgb(91, 209, 215)',/////style={{ color: "#5BD1D7" }}
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};