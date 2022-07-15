module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Nunito', sans-serif"],
      body: ['"Nunito, sans-serif"']
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 750ms ease-in",
        slideTop: "slideTop 750ms ease-in",
        slideRight: "slideRight 750ms ease-in",
        tilt: "tilt 10s infinite linear"
      },
      keyframes: theme => ({
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        slideTop: {
          from: {
            opacity: 0,
            transform: "translateY(-20px)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
        slideRight: {
          from: {
            opacity: 0,
            transform: "translateX(-20px)"
          },
          to: {
            opacity: 1,
            transform: "translateX(0)"
          }
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg) scale(1)"
          },
          "25%": {
            transform: "rotate(5deg) scale(1.025)"
          },
          "75%": {
            transform: "rotate(-5deg) scale(0.925)"
          }
        }
      })
    }
  },
  plugins: []
};
