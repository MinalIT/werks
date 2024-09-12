module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Courgette: ["Courgette", "cursive"], // Correct casing
        Caveat: ["Caveat", "cursive"],      // Correct casing
      },
      fontWeight: {
        extraheavy: 1000, // Custom weight
      },
    },
  },
  plugins: [],
}
