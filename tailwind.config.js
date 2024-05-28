/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sm-home-hero": "url('/audiophile-ecommerce-website/home/mobile/image-header.jpg')",
        "md-home-hero": "url('/audiophile-ecommerce-website/home/tablet/image-header.jpg')",
        "sm-featured-product": "url('/audiophile-ecommerce-website/home/desktop/pattern-circles.svg')",
        "sm-primary-product": "url('/audiophile-ecommerce-website/home/mobile/image-speaker-zx7.jpg')",
      },
      backgroundPosition: {
        "sm-featured-product-pos": "50% -120px",
      },
      backgroundSize: {
        "sm-featured-product-size": "170% auto",
      },
      colors: {
        "primary": "#D87D4A",
        "primary-light": "#FBAF85",
        "off-black": "#101010",
        "off-grey": "#F1F1F1",
        "off-white": "#FAFAFA",
        "error": "#CD2C2C",
      },
      spacing: {
        "7.5": "1.875rem", // 30px @ 16px base
        "9.5": "2.375rem", // 38px @ 16px base
        "14": "3.5rem", // 56px @ 16px base
        "22": "5.5rem", // 88px @ 16px base
        "22.5": "5.625em", // 90px @ 16px base
        "24": "6rem", // 96px @ 16px base
        "25": "6.25rem", // 100px @ 16px base
        "25.5": "6.375rem", // 102px @ 16px base
        "27": "6.75rem", // 108px @ 16px base
        "28": "7rem", // 112px @ 16px base
        "30": "7.5rem", // 120px @ 16px base
        "40": "10rem", // 160px @ 16px base
        "43": "10.75rem", // 172px @ 16px base
        "50": "12.5rem", // 200px @ 16px base
        "56": "14rem", // 224px @ 16px base
        "95": "23.75rem", // 380px @ 16px base
        "182": "45.5rem", // 728px @ 16px base
      },
      fontSize: {
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
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
