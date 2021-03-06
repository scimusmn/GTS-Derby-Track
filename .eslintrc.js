const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/strict',
  ],
  env: {
    browser: true,
  },
  ignorePatterns: [
    'public/*',
    'src/Arduino/arduino-base',
    'src/html.js',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    // The SMM team doesn't write React code in .jsx files exclusively, as is suggested in the
    // Airbnb guide, so override this rule to allow .js files.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@arduino', path.resolve(__dirname, './src/Arduino')],
          ['@audio', path.resolve(__dirname, './src/audio')],
          ['@components', path.resolve(__dirname, './src/components')],
          ['@hooks', path.resolve(__dirname, './src/hooks')],
          ['@images', path.resolve(__dirname, './src/images')],
          ['@styles', path.resolve(__dirname, './src/styles')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
