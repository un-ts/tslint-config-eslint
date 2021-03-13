import fs from 'fs'

export interface RuleReplacement {
  [rule: string]: string | string[]
}

export interface DisabledRules {
  [rule: string]: false
}

const CORE_AS_IS_REPLACEMENTS = [
  'curly',
  'no-bitwise',
  'no-console',
  'no-console',
  'no-empty',
  'no-eval',
  'no-invalid-this',
  'no-restricted-globals',
  'no-return-await',
  'no-sparse-arrays',
  'no-unsafe-finally',
  'prefer-object-spread',
  'radix',
  'max-classes-per-file',
  'no-duplicate-imports',
  'prefer-const',
  'newline-per-chained-call',
  'prefer-template',
  'space-before-function-paren',
  'arrow-parens',
  'indent',
  'linebreak-style',
  'newline-before-return',
  'new-parens',
  'no-irregular-whitespace',
]

const CORE_REPLACEMENTS = CORE_AS_IS_REPLACEMENTS.reduce<RuleReplacement>(
  (rules, rule) => Object.assign(rules, { [rule]: rule }),
  {
    'no-for-in': 'guard-for-in',
    'no-param-reassign': 'no-parameter-reassignment',
    'ban-comma-operator': 'no-sequences',
    forin: 'guard-for-in',
    'function-constructor': 'no-new-func',
    'import-blacklist': 'no-restricted-imports',
    'label-position': 'no-extra-label',
    'no-arg': 'no-caller',
    'no-conditional-assignment': 'no-cond-assign',
    'no-duplicate-super': 'constructor-super',
    'no-duplicate-switch-case': 'no-duplicate-case',
    'no-duplicate-variable': ['no-redeclare', 'no-dupe-args'],
    'no-invalid-template-strings': 'no-template-curly-in-string',
    'no-shadowed-variable': 'no-shadow',
    'no-string-throw': 'no-throw-literal',
    'no-submodule-imports': 'no-restricted-imports',
    'no-switch-case-fall-through': 'no-fallthrough',
    'no-unused-expression': 'no-unused-expressions',
    'no-var-keyword': 'no-var',
    'prefer-conditional-expression': 'no-cond-assign',
    'switch-default': 'default-case',
    'triple-equals': 'eqeqeq',
    'typeof-compare': 'valid-typeof',
    'completed-docs': 'valid-jsdoc',
    'cyclomatic-complexity': 'complexity',
    'max-file-line-count': 'max-lines',
    'object-literal-sort-keys': 'sort-keys',
    'object-literal-key-quotes': 'quote-props',
    'object-literal-shorthand': 'object-shorthand',
    'one-variable-per-declaration': 'one-var',
    'prefer-default-last': 'default-case-last',
    'prefer-function-over-method': 'class-methods-use-this',
    'space-within-parens': 'space-in-parens',
    'unnecessary-else': 'no-else-return',
    'max-line-length': 'max-len',
    'no-consecutive-blank-lines': 'no-multiple-empty-lines',
    'no-trailing-whitespace': 'no-trailing-spaces',
    quotemark: 'quotes',
    'trailing-comma': 'comma-dangle',
  },
)

// from `@typescript-eslint/eslint-plugin`
const TS_AS_IS_REPLACEMENTS = [
  'adjacent-overload-signatures',
  'array-type',
  'ban-ts-ignore',
  'ban-types',
  'member-ordering',
  'no-empty-interface',
  'no-for-in-array',
  'no-inferrable-types',
  'no-magic-numbers',
  'no-misused-new',
  'no-namespace',
  'no-non-null-assertion',
  'no-parameter-properties',
  'no-require-imports',
  'no-unnecessary-qualifier',
  'no-unnecessary-type-assertion',
  'no-var-requires',
  'prefer-for-of',
  'prefer-readonly',
  'promise-function-async',
  'restrict-plus-operands',
  'strict-boolean-expressions',
  'typedef',
  'unified-signatures',
  'use-isnan',
]

const TS_REPLACEMENTS = TS_AS_IS_REPLACEMENTS.reduce<RuleReplacement>(
  (rules, rule) =>
    Object.assign(rules, { [rule]: '@typescript-eslint/' + rule }),
  {
    'await-promise': 'await-thenable',
    'class-name': 'class-name-casing',
    'no-angle-bracket-type-assertion': 'consistent-type-assertions',
    'no-object-literal-type-assertion': 'consistent-type-assertions',
    'interface-over-type-literal': [
      'consistent-type-definitions',
      'no-type-alias',
    ],
    'member-access': 'explicit-member-accessibility',
    'interface-name': 'interface-name-prefix',
    'no-any': 'no-explicit-any',
    'no-floating-promises': ['no-floating-promises', 'no-misused-promises'],
    'no-unnecessary-class': 'no-extraneous-class',
    'no-this-assignment': 'no-this-alias',
    'use-default-type-parameter': 'no-unnecessary-type-arguments',
    'no-unused-variable': 'no-unused-vars',
    'no-use-before-declare': 'no-use-before-define',
    'unnecessary-constructor': 'no-useless-constructor',
    'callable-types': 'prefer-function-type',
    'no-internal-module': 'prefer-namespace-keyword',
    'no-async-without-await': 'require-await',
    semicolon: 'semi',
    'no-reference': '',
    'no-reference-import': 'triple-slash-reference',
    'typedef-whitespace': 'type-annotation-spacing',
    'no-unbound-method': 'unbound-method',
  },
)

const SONARJS_AS_IS_REPLACEMENTS = [
  'no-all-duplicated-branches',
  'cognitive-complexity',
  'max-switch-cases',
  'no-collapsible-if',
  'no-collection-size-mischeck',
  'no-duplicate-string',
  'no-duplicated-branches',
  'no-element-overwrite',
  'no-gratuitous-expressions',
  'no-identical-conditions',
  'no-identical-expressions',
  'no-identical-functions',
  'no-inverted-boolean-check',
  'no-redundant-boolean',
  'no-redundant-jump',
  'no-small-switch',
  'no-same-line-conditional',
  'no-use-of-empty-return-value',
  'no-useless-catch',
  'prefer-immediate-return',
  'prefer-promise-shorthand',
  'prefer-type-guard',
]

const SONARJS_REPLACEMENTS = SONARJS_AS_IS_REPLACEMENTS.reduce<RuleReplacement>(
  (rules, rule) => Object.assign(rules, { [rule]: 'sonarjs/' + rule }),
  {
    'no-big-function': [
      'max-lines-per-function',
      'sonarjs/sonar-max-lines-per-function',
    ],
    'parameters-max-number': 'max-params',

    // core
    'no-empty-destructuring': 'no-empty-pattern',
    'no-empty-nested-blocks': 'no-empty',
    'no-extra-semicolon': 'no-extra-semi',
    'no-multiline-string-literals': 'no-multi-str',
    'no-self-assignment': 'no-self-assign',
    'no-statements-same-line': 'no-same-line-conditional',
    'no-unconditional-jump': 'no-redundant-jump',
    'no-unused-array': 'no-unused-collection',
    'prefer-optional': 'no-redundant-optional',

    // typescript
    'consecutive-overloads': 'adjacent-overload-signatures',
    'no-useless-cast': 'no-unnecessary-type-assertion',
  },
)

// form `eslint-plugin-sonar`
const SONAR_AS_IS_REPLACEMENTS = [
  'arguments-order',
  'bool-param-default',
  'deprecation',
  'max-union-size',
  'no-accessor-field-mismatch',
  'no-alphabetical-sort',
  'no-array-delete',
  'no-commented-code',
  'no-dead-store',
  'no-duplicate-in-composite',
  'no-hardcoded-credentials',
  'no-gratuitous-expressions',
  'no-ignored-return',
  'no-in-misuse',
  'no-invalid-await',
  'no-misleading-array-reverse',
  'no-nested-incdec',
  'no-nested-switch',
  'no-nested-template-literals',
  'no-redundant-parentheses',
  'no-return-type-any',
  'no-try-promise',
  'no-undefined-argument',
  'no-unenclosed-multiline-block',
  'no-unthrown-error',
  'no-useless-increment',
  'no-useless-intersection',
  'no-variable-usage-before-declaration',
  'use-type-alias',
]

const SONAR_REPLACEMENTS = SONAR_AS_IS_REPLACEMENTS.reduce<RuleReplacement>(
  (rules, rule) => Object.assign(rules, { [rule]: 'sonar/' + rule }),
  {
    'mccabe-complexity': 'cyclomatic-complexity',
    'no-empty-array': 'no-empty-collection',
    'no-ignored-initial-value': 'no-parameter-reassignment',
    'no-inconsistent-return': 'no-inconsistent-returns',
    'no-invariant-return': 'no-invariant-returns',
    'no-misspelled-operator': 'non-existent-operator',
    'use-primitive-type': 'no-primitive-wrappers',
  },
)

const getDisabledRules = (rules: string[] | RuleReplacement) =>
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
