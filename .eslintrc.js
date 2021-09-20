// See: https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node
module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  env: {
    node: true,
    es2021: true,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
      },
    },
  },
  rules: {},
}
