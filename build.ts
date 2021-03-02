import fs from 'fs'

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

const CORE_REPLACEMENTS = CORE_AS_IS_REPLACEMENTS.reduce(
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
const ADDITIONAL_TS_AS_IS_REPLACEMENTS = [
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

const ADDITIONAL_TS_REPLACEMENTS = ADDITIONAL_TS_AS_IS_REPLACEMENTS.reduce(
  (rules, rule) => Object.assign(rules, { [rule]: rule }),
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

// form `eslint-plugin-deprecation`
const ADDITIONAL_SONAR_AS_IS_REPLACEMENTS = ['deprecation']

const ADDITIONAL_SONAR_REPLACEMENTS = ADDITIONAL_SONAR_AS_IS_REPLACEMENTS.reduce(
  (rules, rule) => Object.assign(rules, { [rule]: rule }),
  {},
)

const DISABLED_RULES = [
  ...Object.keys(CORE_REPLACEMENTS),
  ...Object.keys(ADDITIONAL_TS_REPLACEMENTS),
  ...Object.keys(ADDITIONAL_SONAR_REPLACEMENTS),
].reduce(
  (rules, rule) =>
    Object.assign(rules, {
      [rule]: false,
    }),
  {},
)

fs.writeFileSync(
  'base.json',
  JSON.stringify(
    {
      rules: DISABLED_RULES,
    },
    null,
    2,
  ) + '\n',
)
