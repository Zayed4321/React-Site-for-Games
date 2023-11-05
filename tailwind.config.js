/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  //For Integration of Daisy UI and using it's themes 

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "retro"],
  },
}

