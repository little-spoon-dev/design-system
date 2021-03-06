const { readdirSync } = require('fs')

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 100],
    'footer-max-line-length': [1, 'always', 80],
    'header-max-length': [1, 'always', 72],
    'scope-enum': [
      2,
      'always',
      [
        'all',
        'deps',
        'deps-dev',
        'github',
        'packages',
        'release',
        'root',
        'scripts',
        'templates',
        ...readdirSync('./packages'),
        ...readdirSync('./templates'),
      ],
    ],
    'scope-empty': [1, 'never'],
  },
}
