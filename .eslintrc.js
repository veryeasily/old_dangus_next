// See: https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node
module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  env: {
    node: true,
  },
  rules: {},
}
