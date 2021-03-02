const base = require('@1stg/prettier-config')

module.exports = {
  ...base,
  overrides: [
    ...base.overrides,
    {
      files: ['sonar.json', 'prettier.json'],
      options: {
        parser: 'json',
      },
    },
  ],
}
