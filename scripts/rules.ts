import fs from 'fs'

import {
  CODELYZER_REPLACEMENTS,
  CORE_REPLACEMENTS,
  DisabledRules,
  NG_TSLINT_REPLACEMENTS,
  RuleReplacements,
  SONARJS_REPLACEMENTS,
  SONAR_REPLACEMENTS,
  TS_REPLACEMENTS,
} from '../rules'

const getDisabledRules = (rules: RuleReplacements | string[]) =>
  (Array.isArray(rules) ? rules : Object.keys(rules)).reduce<DisabledRules>(
    (acc, rule) =>
      Object.assign(acc, {
        [rule]: false,
      }),
    {},
  )

const SUB_CONFIG_META = {
  $schema: 'http://json.schemastore.org/tslint',
  extends: './base.json',
} as const

const writeConfig = (config: string, rules: DisabledRules) =>
  fs.writeFileSync(
    config + '.json',
    JSON.stringify(
      config === 'base' ? { rules } : { ...SUB_CONFIG_META, rules },
      null,
      2,
    ) + '\n',
  )

writeConfig(
  'base',
  getDisabledRules({ ...CORE_REPLACEMENTS, ...TS_REPLACEMENTS }),
)

writeConfig('angular', {
  ...getDisabledRules(CODELYZER_REPLACEMENTS),
  ...getDisabledRules(NG_TSLINT_REPLACEMENTS),
})
writeConfig('sonarjs', getDisabledRules(SONARJS_REPLACEMENTS))
writeConfig('sonar', getDisabledRules(SONAR_REPLACEMENTS))
