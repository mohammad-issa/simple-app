'use strict';

const path = require('path');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard',
    'standard-react',
    'prettier',
  ],

  plugins: ['react', 'react-hooks', 'prettier', 'eslint-plugin-import-helpers'],

  env: {
    browser: true,
    es6: true,
  },

  globals: {
    React: 'writable',
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },

  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^(constants|helpers|hooks|utils)/',
          '/^pages/',
          '/^components/',
          '/^images/',
          '/^styles/',
          '/^public/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: false },
      },
    ],

    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-sort-props': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
  },

  settings: {
    'import/resolver': {
      node: {
        paths: [
          path.resolve(__dirname, 'src'),
        ],
      },
    },
    react: {
      // Automatically detect the react version.
      version: 'detect',
    },
  },
};
