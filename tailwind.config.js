/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        darkblue_background: "hsl(217, 28%, 15%)",
        darkblue_main: "hsl(218, 28%, 13%)",
        darkblue_footer: "hsl(216, 53%, 9%)",
        darkblue_testimonials: "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        lightred: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        raleway: ["Raleway"],
        opensans: ["Open sans"],
      },
      backgroundImage:{
        'bgdesktop': "url('../images/bg-curvy-desktop.svg')",
        'bgmobile': "url('../images/bg-curvy-mobile.svg')"
      }
    },
  },
  plugins: [],
};
