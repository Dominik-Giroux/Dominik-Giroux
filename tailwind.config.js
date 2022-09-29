module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Nunito', sans-serif"],
      body: ['"Nunito, sans-serif"']
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
