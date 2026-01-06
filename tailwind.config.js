/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              borderRadius: "12px",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};








