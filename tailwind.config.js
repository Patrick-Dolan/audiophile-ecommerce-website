/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sm-home-hero": "url('/audiophile-ecommerce-website/home/mobile/image-header.jpg')",
      },
      colors: {
        "primary": "#D87D4a",
        "primary-light": "#FBAF85",
        "off-black": "#101010",
        "off-grey": "#F1F1F1",
        "off-white": "#FAFAFA",
      },
      spacing : {
        "9.5": "2.375rem", // 38px @ 16px base
        "22.5": "5.625em", // 90px @ 16px base
        "25": "6.25rem", // 100px @ 16px base
        "27": "6.75rem", // 108px @ 16px base
        "28": "7rem", // 112px @ 16px base
        "30": "7.5rem", // 120px @ 16px base
        "40": "10rem", // 160px @ 16px base
      },
      fontSize: {
        "13": "0.8125rem", // 13px @ 16px base
        "14": "0.875rem", // 14px @ 16px base
        "15":"0.938rem", // 15px @ 16px base
      },
      letterSpacing: {
        "1px": "1px",
        "2px": "2px",
        "10px": "10px",
      },
      lineHeight: {
        "19": "1.188rem", // 19px @ 16px base
      },
    },
  },
  plugins: [],
}
