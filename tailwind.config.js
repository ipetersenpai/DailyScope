/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dailyscope: ["Montserrat"],
      },
      backgroundImage: {
        dailyscope_logo: "url('./assets/dailyscope_logo.png')",
      },
    },
  },
  plugins: [],
};
