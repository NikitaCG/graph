const prettier = require('./.prettierrc');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },

  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['prettier', 'jest', 'react-hooks', '@typescript-eslint'],

  rules: {
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-continue': 0,
    'no-else-return': [2, { allowElseIf: true }],
    'no-loop-func': 0,
    'no-nested-ternary': 0,
    'import/no-dynamic-require': 0,
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,
    'react/destructuring-assignment': 0, // airbnb 17.0
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0, // airbnb 17.0
    'react/jsx-pascal-case': 2,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 0,
    strict: 1,

    'no-param-reassign': [
      1, // severity warning
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'result',
          'response',
          '$scope',
        ],
      },
    ],

    'react/sort-comp': [
      1, // severity warning
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'state',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,

    'prettier/prettier': [2, prettier],

    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src', './'],
      },
    },
  },

  overrides: [
    {
      files: [
        '{webpack,scripts,jest}/**/*.{js,ts}',
        '**/*stories.tsx',
        '**/stories/**/*.tsx',
        '**/*spec.{ts,tsx}',
        '**/*test.{ts,tsx}',
        'webpack.config*.js',
        'postcss.config.js',
        'prettier.config.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        'import/no-extraneous-dependencies': 0,
        'global-require': 0,
      },
    },

    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/export': 0, // messes with exporting function overloads
        'import/prefer-default-export': 0,
        'no-restricted-globals': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        camelcase: 0,
      },
    },
  ],
};
