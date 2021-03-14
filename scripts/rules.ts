import fs from 'fs'

import {
  CORE_REPLACEMENTS,
  DisabledRules,
  RuleReplacements,
  SONARJS_REPLACEMENTS,
  SONAR_REPLACEMENTS,
  TS_REPLACEMENTS,
} from '../rules'

const getDisabledRules = (rules: string[] | RuleReplacements) =>
  (Array.isArray(rules) ? rules : Object.keys(rules)).reduce<DisabledRules>(
    (acc, rule) =>
      Object.assign(acc, {
        [rule]: false,
      }),
    {},
  )

const writeConfig = (config: string, rules: DisabledRules) =>
  fs.writeFileSync(
    config + '.json',
    JSON.stringify(
      {
        rules,
      },
      null,
      2,
    ) + '\n',
  )

writeConfig(
  'base',
  getDisabledRules({ ...CORE_REPLACEMENTS, ...TS_REPLACEMENTS }),
)
writeConfig('sonarjs', getDisabledRules(SONARJS_REPLACEMENTS))
writeConfig('sonar', getDisabledRules(SONAR_REPLACEMENTS))
