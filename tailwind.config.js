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
      }
    },
  },
  plugins: [],
}
