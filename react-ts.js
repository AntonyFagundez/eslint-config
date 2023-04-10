/** @type {import("eslint").ESLint.Options} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "./index.js",
    "./react.js",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/prop-types": ["off", {}],
  },
};
