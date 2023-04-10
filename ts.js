/** @type {import("eslint").ESLint.Options} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["./index.js", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
