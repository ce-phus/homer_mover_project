/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
     // Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: 'class',
   theme: {
     extend: {
       fontFamily: {
         mont: ['var(--font-mont)'],
         mono: ['var(--font-roboto-mono)'],
       },
       colors:{
         dark: "#1b1b1b",
         light: "#f5f5f5",
         primary: "#050816",
         tertiary: "#151030",
         primaryDark: "#FFA500",
         secondary: "#aaa6c3",
         accent: '#ee7600',
       },
       animation: {
         'spin-slow': 'spin 8s linear infinite',
     },
     backgroundImage:{
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
        "hero-bg": "url('/src/assets/products/herobg4.jpg')",
        "hero-footer": "url('/src/assets/herobg2.jpg')"
      },
 
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
   },
   plugins: [],
 }
 
 