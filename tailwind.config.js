/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppinsSerif: ['Poppins', 'sans-serif']
      },
      colors:{
        "special-blue": "#388FF3",
        "special-black": "#16191D",
        "special-red": "#e93c47",
        "special-orange": "#FAAC36",
        "special-green": "#21B264",
        "slate-bg": "#F0F3F7",
        "grey-0": "#63676C",
        "grey-1": "#8E9297",
        "grey-3": "#D5D8DB",
        "span-bg": "#17181A",
        "grey-2": "#B8BBBD",
        "grey-4": "#EAEDF0",
      }
    },
  },
  plugins: [],
};