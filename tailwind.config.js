/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#F8F8F8",
        color2: "#1C1C1C",
        color3: "#DADADA",
        color4: "#E3E3E3",
        color5: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
