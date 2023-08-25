/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      fontFamil:{
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1000px",
        lg: "1300px",
        xl: "1700px",
      },

      colors: {
          primary: "#121a3f",
          secondary: "#101a3e",
          lightBg: "#34385b",
          lightBlue: "#07bce1", 
          lightPink: "#fd2e6c",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
      }
      
    },
  },
  
  plugins: [],
};
