module.exports = {
  darkMode: ['class'],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 120px rgba(56, 189, 248, 0.12)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.14), transparent 20%)"
      },
      colors: {
        midnight: "#050816",
        ink: "#0b1120",
        cyanish: "#33d6ff",
        ocean: "#0f4b84",
      }
    },
  },
  plugins: [],
};
