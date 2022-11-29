/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-sky": "#812FBF",
        "user-gray": "#657378",
        "user-green": "#00B761",
        "user-line": "#054169",
        "user-light-blue": "#0CB2FF",
        "user-blue": "#057BFF",
        "user-dark-blue": "#054169",
        "user-light-gray": "#E5F8FD",
      },
    },
  },
  plugins: [],
});
