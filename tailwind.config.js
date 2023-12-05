// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#050816",
//         secondary: "#aaa6c3",
//         tertiary: "#151030",
//         "black-100": "#100d25",
//         "black-200": "#090325",
//         "white-100": "#f3f3f3",
//       },
//       boxShadow: {
//         card: "0px 35px 120px -15px #211e35",
//       },
//       screens: {
//         xs: "450px",
//       },
//       backgroundImage: {
//         "hero-pattern": "url('/src/assets/herobg.png')",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      spacing: {
        '72': '8rem', // Equivalent to 72 * 1rem (assuming 1rem = 16px)
        '96': '84rem', // Equivalent to 96 * 1rem
        // Add more custom spacing values as needed
      },
    },
  },
  plugins: [],
};



// module.exports = {
//   content: [
      
//       "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: { },
//   plugins: [
//   require('tailwind-scrollbar')
// ],
// };



// module.exports = {
//   theme: {
//     extend: {
//       scrollbar: ['rounded']
//     },
//   },
//   plugins: [
//     require('tailwind-scrollbar'),
//   ],
// }
// tailwind.config.js



