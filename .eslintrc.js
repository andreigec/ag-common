/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['eslint-config-e7npm'],
  rules:
  {
    'react/react-in-jsx-scope': 2,
  }
};

module.exports = config
