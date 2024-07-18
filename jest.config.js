module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "backend/**/*.js",
    "!**/node_modules/**"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"]
};
