/** @type {import("eslint").ESLint.Options} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "./index.js",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/self-closing-comp": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "react/display-name": ["off", "always"],
    "react/react-in-jsx-scope": ["off", "always"],
    "react/jsx-no-useless-fragment": "warn",
  },
};
