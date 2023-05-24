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
        light: "#FDF8E5",
        primarylight: "#FFFFFF",
        secondaryLight: '#E2C492',
        primary: "#B63E96",
        primaryDark: "#9c6618", 
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
<<<<<<< HEAD
}
=======
}

// primarylight: "#FDF8E5"

// dark: "#4B2204",
// light: "#F0E7D5",
// primarylight: "#FDF8E5",
// secondaryLight: '#E2C492',
// primary: "#B63E96",
// primaryDark: "#9c6618",
>>>>>>> 84b0fdd78680205d0b8a8ddb43ebe3dab1c9b44f
