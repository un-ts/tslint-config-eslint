export interface RuleReplacements {
  [rule: string]: string | string[] | null
}

export interface DisabledRules {
  [rule: string]: false
}

export const arrayify = <T, R = T extends Array<infer S> ? S : T>(
  ...args: T[]
) =>
  args.reduce<R[]>((arr, curr) => {
    arr.push(...(Array.isArray(curr) ? curr : [curr]))
    return arr
  }, [])

export const addRulePrefix = (rule: string, prefix: string) =>
  `${prefix}/${rule}`

export const addRulesPrefix = (rules: RuleReplacements, prefix: string) =>
  Object.entries(rules).reduce<RuleReplacements>(
    (acc, [oldRule, newRule]) =>
      Object.assign(acc, {
        [oldRule]: Array.isArray(newRule)
          ? newRule.map(rule => addRulePrefix(rule, prefix))
          : newRule && addRulePrefix(newRule, prefix),
      }),
    {},
  )

export const CORE_AS_IS_REPLACEMENTS = [
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
  'no-magic-numbers',
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

export const CORE_REPLACEMENTS =
  CORE_AS_IS_REPLACEMENTS.reduce<RuleReplacements>(
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
export const TS_ESLINT = '@typescript-eslint'

export const TS_AS_IS_REPLACEMENTS = [
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
]

export const TS_REPLACEMENTS = TS_AS_IS_REPLACEMENTS.reduce<RuleReplacements>(
  (rules, rule) =>
    Object.assign(rules, { [rule]: addRulePrefix(rule, TS_ESLINT) }),
  {
    // core
    'use-isnan': 'use-isnan',

    ...addRulesPrefix(
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
        'no-reference': 'triple-slash-reference',
        'no-reference-import': 'triple-slash-reference',
        'typedef-whitespace': 'type-annotation-spacing',
        'no-unbound-method': 'unbound-method',
      },
      TS_ESLINT,
    ),
  },
)

// from `eslint-plugin-sonarjs`
export const SONARJS_AS_IS_REPLACEMENTS = [
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

export const SONARJS_REPLACEMENTS =
  SONARJS_AS_IS_REPLACEMENTS.reduce<RuleReplacements>(
    (rules, rule) =>
      Object.assign(rules, { [rule]: addRulePrefix(rule, 'sonarjs') }),
    {
      // core
      'no-big-function': 'max-lines-per-function',
      'no-empty-destructuring': 'no-empty-pattern',
      'no-empty-nested-blocks': 'no-empty',
      'no-multiline-string-literals': 'no-multi-str',
      'no-self-assignment': 'no-self-assign',
      'no-statements-same-line': 'no-same-line-conditional',
      'no-unconditional-jump': 'no-redundant-jump',
      'no-unused-array': 'no-unused-collection',
      'parameters-max-number': 'max-params',
      'prefer-optional': 'no-redundant-optional',

      // typescript
      ...addRulesPrefix(
        {
          'consecutive-overloads': 'adjacent-overload-signatures',
          'no-useless-cast': 'no-unnecessary-type-assertion',
        },
        TS_ESLINT,
      ),

      // mixed
      'no-extra-semicolon': [
        'no-extra-semi',
        addRulePrefix('no-extra-semi', TS_ESLINT),
      ],
    },
  )

// from `eslint-plugin-sonar`
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

export const SONAR_REPLACEMENTS = addRulesPrefix(
  SONAR_AS_IS_REPLACEMENTS.reduce<RuleReplacements>(
    (rules, rule) => Object.assign(rules, { [rule]: rule }),
    {
      'mccabe-complexity': 'cyclomatic-complexity',
      'no-big-function': 'sonar-max-lines-per-function',
      'no-empty-array': 'no-empty-collection',
      'no-ignored-initial-value': 'no-parameter-reassignment',
      'no-inconsistent-return': 'no-inconsistent-returns',
      'no-invariant-return': 'no-invariant-returns',
      'no-misspelled-operator': 'non-existent-operator',
      'use-primitive-type': 'no-primitive-wrappers',
    },
  ),
  'sonar',
)

// from `@angular-eslint/eslint-plugin`
export const NG_ESLINT = '@angular-eslint'

export const NG_AS_IS_REPLACEMENTS = [
  'component-class-suffix',
  'component-max-inline-declarations',
  'component-selector',
  'contextual-decorator',
  'contextual-lifecycle',
  'directive-class-suffix',
  'directive-selector',
  'no-attribute-decorator',
  'no-conflicting-lifecycle',
  'no-forward-ref',
  'no-host-metadata-property',
  'no-input-prefix',
  'no-input-rename',
  'no-inputs-metadata-property',
  'no-lifecycle-call',
  'no-output-native',
  'no-output-on-prefix',
  'no-output-rename',
  'no-outputs-metadata-property',
  'no-pipe-impure',
  'no-queries-metadata-property',
  'pipe-prefix',
  'prefer-on-push-component-change-detection',
  'prefer-output-readonly',
  'relative-url-prefix',
  'use-component-selector',
  'use-component-view-encapsulation',
  'use-injectable-provided-in',
  'use-lifecycle-interface',
  'use-pipe-transform-interface',
]

export const NG_TEMPLATE_REPLACEMENTS = [
  'accessibility-alt-text',
  'accessibility-elements-content',
  'accessibility-label-for',
  'accessibility-tabindex-no-positive',
  'accessibility-table-scope',
  'accessibility-valid-aria',
  'banana-in-box',
  'click-events-have-key-events',
  'conditional-complexity',
  'cyclomatic-complexity',
  'i18n',
  'mouse-events-have-key-events',
  'no-any',
  'no-autofocus',
  'no-call-expression',
  'no-distracting-elements',
  'no-negated-async',
  'use-track-by-function',
].reduce<RuleReplacements>(
  (rules, name) =>
    Object.assign(rules, {
      [`template-${name}`]: addRulePrefix(name, '@angular-eslint/template'),
    }),
  {},
)

export const CODELYZER_REPLACEMENTS =
  NG_AS_IS_REPLACEMENTS.reduce<RuleReplacements>(
    (rules, rule) =>
      Object.assign(rules, {
        [rule]: addRulePrefix(rule, NG_ESLINT),
      }),
    {
      ...NG_TEMPLATE_REPLACEMENTS,

      // core
      'import-destructuring-spacing': 'object-curly-spacing',

      // unnecessary
      // https://github.com/angular-eslint/angular-eslint/issues/241
      'use-pipe-decorator': null,
    },
  )

export const NG_TSLINT_REPLACEMENTS = addRulesPrefix(
  {
    'member-naming': 'naming-convention',
  },
  TS_ESLINT,
)
