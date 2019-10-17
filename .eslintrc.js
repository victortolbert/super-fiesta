module.exports = {
  'root': true,
  'env': {
    'jest': true,
    'node': true,
  },
  'globals': {
    '$': true,
    '_': true,
    'FB': true,
    'ga': true,
    'Vue': true,
    'axios': true,
    'Vuex': true,
    'gtag': true,
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  'rules': {
    'arrow-parens': 'off',
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'off',
    'eqeqeq': 'off',
    'indent': [ 'error', 2 ],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'object-shorthand': 'off',
    'prefer-const': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'vue/attributes-order': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': [],
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 0,
      'ignores': [],
    }],
    'vue/match-component-file-name': ['error', {
      'extensions': ['jsx'],
      'shouldMatchCase': false,
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-v-html': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/v-bind-style': ['error', 'longform'],
    'vue/v-on-style': ['error', 'longform'],
  },
  'parserOptions': {
    'parser': 'babel-eslint',
  },
  'overrides': [
    {
      'files': [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      'env': {
        'jest': true,
      },
    },
  ],
}
