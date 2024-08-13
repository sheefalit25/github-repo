module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest" // Use babel-jest to transpile JS, TS, JSX, TSX files
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Recognize these file extensions
  testEnvironment: "jsdom", // Use jsdom as the test environment for React components
};
