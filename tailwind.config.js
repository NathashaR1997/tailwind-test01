/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      maxWidth: {
        '50%' : '90rem',
      },
      colors: {
        'light-blue': '#679DFF',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, #FFFFFF 0%, #F0F5FF 58.85%, #F0F5FF 79.17%)",
        'hero-image' : "url('/src/image/signupcover.png')",
      },
      shadow: {
        'box-cover': '0px_14px_14px_rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'xsm': {'min': '300px', 'max': '767px'},
        // => @media (min-width: 640px) { ... }
  
        'sm': '768px',
        // => @media (min-width: 768px) { ... }

        'md': '992px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
