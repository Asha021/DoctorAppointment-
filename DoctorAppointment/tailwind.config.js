import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          cutumFont:["Libre Franklin",' serif']
      },
      keyframes:{
        slideDown:{
          '0%':{transform:"translateY(-100%)",opacity:0},
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDownX:{
          '0%':{transform:"translateX(-100%)",opacity:0},
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
      },
      animation: {
        slideDown: 'slideDown 0.9s ease-out forwards',
        slideDownX: 'slideDownX 0.9s ease-in-out forwards',
      },
      // screens:{
      // }
    },
    // container: {
    //   center: "true",  
    // },
  },
  plugins: [],
}