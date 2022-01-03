module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 6,
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'build/**/*',
    'dist/**/*',
    'node_modules/**/*',
    'node_modules',
    'cdk.out',
    'dist',
  ],
  plugins: [
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'error',
    'no-alert': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'no-restricted-globals': 'off',
    'no-undef': 'off',
    'no-mixed-operators': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react/jsx-curly-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'never', prev: ['import'], next: ['import'] },
      {
        blankLine: 'never',
        prev: ['expression'],
        next: ['expression', 'multiline-expression'],
      },
      {
        blankLine: 'never',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['function', 'expression', 'const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['multiline-const', 'multiline-let', 'multiline-var'],
        next: ['function', 'expression', 'const', 'let', 'var', 'block-like'],
      },
      {
        blankLine: 'always',
        prev: ['multiline-expression'],
        next: ['expression', 'multiline-expression'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['return', 'block'],
      },
      {
        blankLine: 'always',
        prev: ['block-like'],
        next: ['const', 'let', 'var', 'block-like'],
      },
      { blankLine: 'always', prev: ['if'], next: ['if', 'expression'] },
      { blankLine: 'always', prev: ['*'], next: ['case', 'default'] },
    ],
  },
};
