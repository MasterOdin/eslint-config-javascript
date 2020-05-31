module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
  ],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"],
  },
};
