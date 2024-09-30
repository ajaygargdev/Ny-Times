module.exports = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  oduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "^axios$": "axios/dist/node/axios.cjs",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
  },
};
