/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#070724",
      darkgrey: "#38384F",
      grey: "#838391",
      darkyellow: "#EDA249",
      lightpurple: "#6D2ED5",
      lightred: "#D14C32",
      red: "#D83A34",
      orange: "#CD5120",
      green: "#1EC1A2",
      blue: "#2D68F0",
      linebreak: "rgba(151, 151, 151,0.3)",
      mercury: "#419EBB",
      venus: "#F7CC7F",
      earth: "#545BFE",
      mars: "#FF6A45",
      jupiter: "#ECAD7A",
      saturn: "#FCCB6B",
      uranus: "#65F0D5",
      neptune: "#497EFA",
    },
  },
  plugins: [],
};
