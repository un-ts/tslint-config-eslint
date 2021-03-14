import fs from 'fs'

import prettier from 'prettier'

import {
  CORE_REPLACEMENTS,
  RuleReplacements,
  SONARJS_REPLACEMENTS,
  SONAR_REPLACEMENTS,
  TS_REPLACEMENTS,
  arrayify,
} from '../rules'

const readmePath = 'README.md'
const readmeContent = fs.readFileSync(readmePath, 'utf8')

const prefixPlaceholder = '<!-- prefix placeholder -->'
const suffixPlaceholder = '<!-- suffix placeholder -->'

const prefix = readmeContent.slice(
  0,
  readmeContent.indexOf(prefixPlaceholder) + prefixPlaceholder.length,
)

const suffix = readmeContent.slice(readmeContent.lastIndexOf(suffixPlaceholder))

const printReplacements = (replacements: RuleReplacements) =>
  `
| old rule | new rule |
| -------- | -------- |
${Object.entries(replacements)
  .map(
    ([oldRule, newRule]) =>
      '| `' +
      oldRule +
      '` | ' +
      arrayify(newRule)
        .map(rule => '`' + rule + '`')
        .join('<br>'),
  )
  .join('\n')}|
  `

fs.writeFileSync(
  readmePath,

  prettier.format(
    `${prefix}
### tslint core

${printReplacements({ ...CORE_REPLACEMENTS, ...TS_REPLACEMENTS })}

### tslint-sonarts

${printReplacements({ ...SONARJS_REPLACEMENTS, ...SONAR_REPLACEMENTS })}

${suffix}`,
    {
      ...prettier.resolveConfig.sync(readmePath),
      parser: 'markdown',
    },
  ),
)
