'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    'array-bracket-newline': ['error', { 'multiline': true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-spacing': ['error'],
    'block-spacing': ['error'],
    'brace-style': ['error', 'stroustrup'],
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'all'],
    'default-case-last': 'error',
    'default-param-last': ['error'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'line-comment-position': ['error', { 'position': 'above' }],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-promise-executor-return': 'error',
    'no-trailing-spaces': ['error'],
    'no-unreachable-loop': 'error',
    'no-var': ['error'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last'],
    'strict': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yoda': ['error', 'never'],
  },
};
