module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'gatsby-resolve.js',
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['postcss.config.js'],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
  globals: {},
}
