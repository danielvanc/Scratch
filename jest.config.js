module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `.cache`,
    `<rootDir>.*/public`,
    `e2e-tests/tests`,
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/jest/loadershim.js`,
  ],
};
