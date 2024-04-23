/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D87D4a",
        "primary-light": "#FBAF85",
        "off-black": "#101010",
        "off-grey": "#F1F1F1",
        "off-white": "#FAFAFA",
      },
      spacing : {
        "22.5": "5.625em",
        "30": "7.5rem",
      },
      fontSize: {
        "13": "0.8125rem", // 13px @ 16px base
        "15":"0.938rem", // 15px @ 16px base
      }
    },
  },
  plugins: [],
}
