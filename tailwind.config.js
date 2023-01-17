/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geocaching: {
          green: "#02874d",
          white: "#ffffff",
          light: "#e6f7ef",
          gray: "#c1c1c1",
          brown: {
            darker: "#5f452a",
            dark: "#83603f",
            light: "#f8edd4",
          },
        },
      },
    },
  },
  plugins: [],
};
