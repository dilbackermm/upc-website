/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {

  
  content: [], content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',

  
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#4B2204",
        light: "#F0E7D5",
        primarylight: "#FDF8E5",
        secondaryLight: '#E2C492',
        primary: "#B63E96", // 240,86,199
        primaryDark: "#9c6618", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    // => @Media(max-width: 1535px)
  },
  plugins: [],
}

// primarylight: "#FDF8E5"