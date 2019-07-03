'use strict';

module.exports = {
  bracketSpacing: true,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: false,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
};
