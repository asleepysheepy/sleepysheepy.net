module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'plugins': [
    'jest',
    'react',
    'react-hooks',
    "sort-imports-es6-autofix"
  ],
  'rules': {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'constructor-super': 'error',
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'new-parens': 'error',
    'no-console': ['error'],
    'no-extra-bind': 'error',
    'no-extra-parens': ['error', 'all', { 'ignoreJSX': 'multi-line' }],
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'quotes': ['error','single'],
    'semi': ['error','never'],
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],

    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {
      'props': 'always',
      'children': 'ignore',
    }],
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 2 }],
    'react/jsx-no-bind': ['warn', {
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowBind': false,
    }],
    'react/jsx-tag-spacing': ['error', { 'closingSlash': 'never', 'beforeSelfClosing': 'always', 'afterOpening': 'never' }],
    'react/jsx-wrap-multilines': ['error'],
    'react/no-deprecated': ['error'],
    'react/self-closing-comp': 'error',
    'react/jsx-sort-props': ['error', {
      'callbacksLast': false,
      'shorthandFirst': true,
      'ignoreCase': true,
      'noSortAlphabetically': false,
      'reservedFirst': false,
    }],
    'react/sort-prop-types': ['error', { 'ignoreCase': true }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none']
    }],
  }
}