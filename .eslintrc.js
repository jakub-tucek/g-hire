module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    '@typescript-eslint/indent': 2,
    'react/jsx-tag-spacing': 1,
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'object-curly-spacing': 1,
    'arrow-parens': 1,
    'comma-dangle': 1,
    'array-callback-return': 'off',
    'max-len': [
      'error',
      {
        'code': 140
      }
    ],
    'consistent-return': 'off',
  }
};
