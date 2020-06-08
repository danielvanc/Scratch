module.exports = {
  roots: ['../unit/'],
  testMatch: [
    '**/tests/unit/?(*.)+(spec|test).[jt]s?(x)',
  ],
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `.cache`,
    `<rootDir>.*/public`,
    `tests/e2e/integrations`,
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/loadershim.js`,
  ],
};
