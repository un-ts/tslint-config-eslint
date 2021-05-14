# tslint-config-eslint

> Yet another TSLint Configuration which disables all rules which has been handled by [`eslint`](https://github.com/eslint/eslint), [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs) or [`eslint-plugin-sonar`](https://github.com/rx-ts/eslint-plugin-sonar).

[![GitHub Workflow Status](https://github.com/rx-ts/tslint-config-eslint/workflows/CI/badge.svg)](https://github.com/rx-ts/tslint-config-eslint/actions/workflows/ci.yml)
[![Codacy Grade](https://img.shields.io/codacy/grade/5c70cd4efc864eb3b344e32be9aecce8)](https://www.codacy.com/app/JounQin/tslint-config-eslint)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Ftslint-config-eslint%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/tslint-config-eslint.svg)](https://www.npmjs.com/package/tslint-config-eslint)
[![GitHub release](https://img.shields.io/github/release/rx-ts/tslint-config-eslint)](https://github.com/rx-ts/tslint-config-eslint/releases)

[![David Peer](https://img.shields.io/david/peer/rx-ts/tslint-config-eslint.svg)](https://david-dm.org/rx-ts/tslint-config-eslint?type=peer)
[![David](https://img.shields.io/david/rx-ts/tslint-config-eslint.svg)](https://david-dm.org/rx-ts/tslint-config-eslint)
[![David Dev](https://img.shields.io/david/dev/rx-ts/tslint-config-eslint.svg)](https://david-dm.org/rx-ts/tslint-config-eslint?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/atlassian/changesets)

[TSLint][] will be [deprecated](https://github.com/palantir/tslint/issues/4534) some time in 2019, but it has not been finished. So maybe you're using [ESLint][] with it together, then it would be terrible to lint codes twice, especially for those rules which has equivalent rules from [`eslint`](https://github.com/eslint/eslint), [`@typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint), [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs) or [`eslint-plugin-sonar`](https://github.com/rx-ts/eslint-plugin-sonar).

And also [`@angular-eslint`](https://github.com/angular-eslint/angular-eslint) for Angular.

You may tried something like [tslint-to-eslint-config](https://github.com/typescript-eslint/tslint-to-eslint-config) to help you to migrate, while this package/configuration will help you to use [ESLint][] quickly without remove or refactor your original `tslint.json` heavily.

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [Configuration](#configuration)
    - [Basic config](#basic-config)
    - [Additional configs](#additional-configs)
  - [JS API](#js-api)
- [Rules List](#rules-list)
  - [tslint core](#tslint-core)
  - [tslint-sonarts](#tslint-sonarts)
  - [codelyzer](#codelyzer)
  - [ng-tslint](#ng-tslint)
- [Forthcoming](#forthcoming)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# yarn
yarn add -D tslint-config-eslint

# npm
npm i -D tslint-config-eslint
```

### Configuration

#### Basic config

> For `ESLint` core and `@typescript-eslint/eslint-plugin`

```jsonc
{
  // put this config at the last, so it will take highest priority
  "extends": ["your original configs", "tslint-config-eslint"]
}
```

#### Additional configs

```jsonc
{
  "extends": [
    "your original configs",
    // if you're using tslint with `prettier`
    "tslint-config-eslint/prettier",
    // if you're using tslint with `eslint-plugin-sonarjs`
    "tslint-config-eslint/sonarjs",
    // if you're using tslint with `eslint-plugin-sonar`
    "tslint-config-eslint/sonar"
  ]
}
```

### JS API

```js
const {
  CORE_REPLACEMENTS,
  TS_REPLACEMENTS,
  SONARJS_REPLACEMENTS,
  SONAR_REPLACEMENTS,
} = require('tslint-config-eslint/rules')
```

## Rules List

<!-- prefix placeholder -->

### tslint core

| old rule                           | new rule                                                                               |
| ---------------------------------- | -------------------------------------------------------------------------------------- |
| `no-for-in`                        | `guard-for-in`                                                                         |
| `no-param-reassign`                | `no-parameter-reassignment`                                                            |
| `ban-comma-operator`               | `no-sequences`                                                                         |
| `forin`                            | `guard-for-in`                                                                         |
| `function-constructor`             | `no-new-func`                                                                          |
| `import-blacklist`                 | `no-restricted-imports`                                                                |
| `label-position`                   | `no-extra-label`                                                                       |
| `no-arg`                           | `no-caller`                                                                            |
| `no-conditional-assignment`        | `no-cond-assign`                                                                       |
| `no-duplicate-super`               | `constructor-super`                                                                    |
| `no-duplicate-switch-case`         | `no-duplicate-case`                                                                    |
| `no-duplicate-variable`            | `no-redeclare`<br>`no-dupe-args`                                                       |
| `no-invalid-template-strings`      | `no-template-curly-in-string`                                                          |
| `no-shadowed-variable`             | `no-shadow`                                                                            |
| `no-string-throw`                  | `no-throw-literal`                                                                     |
| `no-submodule-imports`             | `no-restricted-imports`                                                                |
| `no-switch-case-fall-through`      | `no-fallthrough`                                                                       |
| `no-unused-expression`             | `no-unused-expressions`                                                                |
| `no-var-keyword`                   | `no-var`                                                                               |
| `prefer-conditional-expression`    | `no-cond-assign`                                                                       |
| `switch-default`                   | `default-case`                                                                         |
| `triple-equals`                    | `eqeqeq`                                                                               |
| `typeof-compare`                   | `valid-typeof`                                                                         |
| `completed-docs`                   | `valid-jsdoc`                                                                          |
| `cyclomatic-complexity`            | `complexity`                                                                           |
| `max-file-line-count`              | `max-lines`                                                                            |
| `object-literal-sort-keys`         | `sort-keys`                                                                            |
| `object-literal-key-quotes`        | `quote-props`                                                                          |
| `object-literal-shorthand`         | `object-shorthand`                                                                     |
| `one-variable-per-declaration`     | `one-var`                                                                              |
| `prefer-default-last`              | `default-case-last`                                                                    |
| `prefer-function-over-method`      | `class-methods-use-this`                                                               |
| `space-within-parens`              | `space-in-parens`                                                                      |
| `unnecessary-else`                 | `no-else-return`                                                                       |
| `max-line-length`                  | `max-len`                                                                              |
| `no-consecutive-blank-lines`       | `no-multiple-empty-lines`                                                              |
| `no-trailing-whitespace`           | `no-trailing-spaces`                                                                   |
| `quotemark`                        | `quotes`                                                                               |
| `trailing-comma`                   | `comma-dangle`                                                                         |
| `curly`                            | `curly`                                                                                |
| `no-bitwise`                       | `no-bitwise`                                                                           |
| `no-console`                       | `no-console`                                                                           |
| `no-empty`                         | `no-empty`                                                                             |
| `no-eval`                          | `no-eval`                                                                              |
| `no-invalid-this`                  | `no-invalid-this`                                                                      |
| `no-restricted-globals`            | `no-restricted-globals`                                                                |
| `no-return-await`                  | `no-return-await`                                                                      |
| `no-sparse-arrays`                 | `no-sparse-arrays`                                                                     |
| `no-unsafe-finally`                | `no-unsafe-finally`                                                                    |
| `prefer-object-spread`             | `prefer-object-spread`                                                                 |
| `radix`                            | `radix`                                                                                |
| `max-classes-per-file`             | `max-classes-per-file`                                                                 |
| `no-duplicate-imports`             | `no-duplicate-imports`                                                                 |
| `no-magic-numbers`                 | `@typescript-eslint/no-magic-numbers`                                                  |
| `prefer-const`                     | `prefer-const`                                                                         |
| `newline-per-chained-call`         | `newline-per-chained-call`                                                             |
| `prefer-template`                  | `prefer-template`                                                                      |
| `space-before-function-paren`      | `space-before-function-paren`                                                          |
| `arrow-parens`                     | `arrow-parens`                                                                         |
| `indent`                           | `indent`                                                                               |
| `linebreak-style`                  | `linebreak-style`                                                                      |
| `newline-before-return`            | `newline-before-return`                                                                |
| `new-parens`                       | `new-parens`                                                                           |
| `no-irregular-whitespace`          | `no-irregular-whitespace`                                                              |
| `use-isnan`                        | `use-isnan`                                                                            |
| `await-promise`                    | `@typescript-eslint/await-thenable`                                                    |
| `class-name`                       | `@typescript-eslint/class-name-casing`                                                 |
| `no-angle-bracket-type-assertion`  | `@typescript-eslint/consistent-type-assertions`                                        |
| `no-object-literal-type-assertion` | `@typescript-eslint/consistent-type-assertions`                                        |
| `interface-over-type-literal`      | `@typescript-eslint/consistent-type-definitions`<br>`@typescript-eslint/no-type-alias` |
| `member-access`                    | `@typescript-eslint/explicit-member-accessibility`                                     |
| `interface-name`                   | `@typescript-eslint/interface-name-prefix`                                             |
| `no-any`                           | `@typescript-eslint/no-explicit-any`                                                   |
| `no-floating-promises`             | `@typescript-eslint/no-floating-promises`<br>`@typescript-eslint/no-misused-promises`  |
| `no-unnecessary-class`             | `@typescript-eslint/no-extraneous-class`                                               |
| `no-this-assignment`               | `@typescript-eslint/no-this-alias`                                                     |
| `use-default-type-parameter`       | `@typescript-eslint/no-unnecessary-type-arguments`                                     |
| `no-unused-variable`               | `@typescript-eslint/no-unused-vars`                                                    |
| `no-use-before-declare`            | `@typescript-eslint/no-use-before-define`                                              |
| `unnecessary-constructor`          | `@typescript-eslint/no-useless-constructor`                                            |
| `callable-types`                   | `@typescript-eslint/prefer-function-type`                                              |
| `no-internal-module`               | `@typescript-eslint/prefer-namespace-keyword`                                          |
| `no-async-without-await`           | `@typescript-eslint/require-await`                                                     |
| `semicolon`                        | `@typescript-eslint/semi`                                                              |
| `no-reference`                     | `@typescript-eslint/triple-slash-reference`                                            |
| `no-reference-import`              | `@typescript-eslint/triple-slash-reference`                                            |
| `typedef-whitespace`               | `@typescript-eslint/type-annotation-spacing`                                           |
| `no-unbound-method`                | `@typescript-eslint/unbound-method`                                                    |
| `adjacent-overload-signatures`     | `@typescript-eslint/adjacent-overload-signatures`                                      |
| `array-type`                       | `@typescript-eslint/array-type`                                                        |
| `ban-ts-ignore`                    | `@typescript-eslint/ban-ts-ignore`                                                     |
| `ban-types`                        | `@typescript-eslint/ban-types`                                                         |
| `member-ordering`                  | `@typescript-eslint/member-ordering`                                                   |
| `no-empty-interface`               | `@typescript-eslint/no-empty-interface`                                                |
| `no-for-in-array`                  | `@typescript-eslint/no-for-in-array`                                                   |
| `no-inferrable-types`              | `@typescript-eslint/no-inferrable-types`                                               |
| `no-misused-new`                   | `@typescript-eslint/no-misused-new`                                                    |
| `no-namespace`                     | `@typescript-eslint/no-namespace`                                                      |
| `no-non-null-assertion`            | `@typescript-eslint/no-non-null-assertion`                                             |
| `no-parameter-properties`          | `@typescript-eslint/no-parameter-properties`                                           |
| `no-require-imports`               | `@typescript-eslint/no-require-imports`                                                |
| `no-unnecessary-qualifier`         | `@typescript-eslint/no-unnecessary-qualifier`                                          |
| `no-unnecessary-type-assertion`    | `@typescript-eslint/no-unnecessary-type-assertion`                                     |
| `no-var-requires`                  | `@typescript-eslint/no-var-requires`                                                   |
| `prefer-for-of`                    | `@typescript-eslint/prefer-for-of`                                                     |
| `prefer-readonly`                  | `@typescript-eslint/prefer-readonly`                                                   |
| `promise-function-async`           | `@typescript-eslint/promise-function-async`                                            |
| `restrict-plus-operands`           | `@typescript-eslint/restrict-plus-operands`                                            |
| `strict-boolean-expressions`       | `@typescript-eslint/strict-boolean-expressions`                                        |
| `typedef`                          | `@typescript-eslint/typedef`                                                           |
| `unified-signatures`               | `@typescript-eslint/unified-signatures`                                                |

### tslint-sonarts

| old rule                               | new rule                                              |
| -------------------------------------- | ----------------------------------------------------- |
| `no-big-function`                      | `sonar/sonar-max-lines-per-function`                  |
| `no-empty-destructuring`               | `no-empty-pattern`                                    |
| `no-empty-nested-blocks`               | `no-empty`                                            |
| `no-multiline-string-literals`         | `no-multi-str`                                        |
| `no-self-assignment`                   | `no-self-assign`                                      |
| `no-statements-same-line`              | `no-same-line-conditional`                            |
| `no-unconditional-jump`                | `no-redundant-jump`                                   |
| `no-unused-array`                      | `no-unused-collection`                                |
| `parameters-max-number`                | `max-params`                                          |
| `prefer-optional`                      | `no-redundant-optional`                               |
| `consecutive-overloads`                | `@typescript-eslint/adjacent-overload-signatures`     |
| `no-useless-cast`                      | `@typescript-eslint/no-unnecessary-type-assertion`    |
| `no-extra-semicolon`                   | `no-extra-semi`<br>`@typescript-eslint/no-extra-semi` |
| `no-all-duplicated-branches`           | `sonarjs/no-all-duplicated-branches`                  |
| `cognitive-complexity`                 | `sonarjs/cognitive-complexity`                        |
| `max-switch-cases`                     | `sonarjs/max-switch-cases`                            |
| `no-collapsible-if`                    | `sonarjs/no-collapsible-if`                           |
| `no-collection-size-mischeck`          | `sonarjs/no-collection-size-mischeck`                 |
| `no-duplicate-string`                  | `sonarjs/no-duplicate-string`                         |
| `no-duplicated-branches`               | `sonarjs/no-duplicated-branches`                      |
| `no-element-overwrite`                 | `sonarjs/no-element-overwrite`                        |
| `no-gratuitous-expressions`            | `sonar/no-gratuitous-expressions`                     |
| `no-identical-conditions`              | `sonarjs/no-identical-conditions`                     |
| `no-identical-expressions`             | `sonarjs/no-identical-expressions`                    |
| `no-identical-functions`               | `sonarjs/no-identical-functions`                      |
| `no-inverted-boolean-check`            | `sonarjs/no-inverted-boolean-check`                   |
| `no-redundant-boolean`                 | `sonarjs/no-redundant-boolean`                        |
| `no-redundant-jump`                    | `sonarjs/no-redundant-jump`                           |
| `no-small-switch`                      | `sonarjs/no-small-switch`                             |
| `no-same-line-conditional`             | `sonarjs/no-same-line-conditional`                    |
| `no-use-of-empty-return-value`         | `sonarjs/no-use-of-empty-return-value`                |
| `no-useless-catch`                     | `sonarjs/no-useless-catch`                            |
| `prefer-immediate-return`              | `sonarjs/prefer-immediate-return`                     |
| `prefer-promise-shorthand`             | `sonarjs/prefer-promise-shorthand`                    |
| `prefer-type-guard`                    | `sonarjs/prefer-type-guard`                           |
| `mccabe-complexity`                    | `sonar/cyclomatic-complexity`                         |
| `no-empty-array`                       | `sonar/no-empty-collection`                           |
| `no-ignored-initial-value`             | `sonar/no-parameter-reassignment`                     |
| `no-inconsistent-return`               | `sonar/no-inconsistent-returns`                       |
| `no-invariant-return`                  | `sonar/no-invariant-returns`                          |
| `no-misspelled-operator`               | `sonar/non-existent-operator`                         |
| `use-primitive-type`                   | `sonar/no-primitive-wrappers`                         |
| `arguments-order`                      | `sonar/arguments-order`                               |
| `bool-param-default`                   | `sonar/bool-param-default`                            |
| `deprecation`                          | `sonar/deprecation`                                   |
| `max-union-size`                       | `sonar/max-union-size`                                |
| `no-accessor-field-mismatch`           | `sonar/no-accessor-field-mismatch`                    |
| `no-alphabetical-sort`                 | `sonar/no-alphabetical-sort`                          |
| `no-array-delete`                      | `sonar/no-array-delete`                               |
| `no-commented-code`                    | `sonar/no-commented-code`                             |
| `no-dead-store`                        | `sonar/no-dead-store`                                 |
| `no-duplicate-in-composite`            | `sonar/no-duplicate-in-composite`                     |
| `no-hardcoded-credentials`             | `sonar/no-hardcoded-credentials`                      |
| `no-ignored-return`                    | `sonar/no-ignored-return`                             |
| `no-in-misuse`                         | `sonar/no-in-misuse`                                  |
| `no-invalid-await`                     | `sonar/no-invalid-await`                              |
| `no-misleading-array-reverse`          | `sonar/no-misleading-array-reverse`                   |
| `no-nested-incdec`                     | `sonar/no-nested-incdec`                              |
| `no-nested-switch`                     | `sonar/no-nested-switch`                              |
| `no-nested-template-literals`          | `sonar/no-nested-template-literals`                   |
| `no-redundant-parentheses`             | `sonar/no-redundant-parentheses`                      |
| `no-return-type-any`                   | `sonar/no-return-type-any`                            |
| `no-try-promise`                       | `sonar/no-try-promise`                                |
| `no-undefined-argument`                | `sonar/no-undefined-argument`                         |
| `no-unenclosed-multiline-block`        | `sonar/no-unenclosed-multiline-block`                 |
| `no-unthrown-error`                    | `sonar/no-unthrown-error`                             |
| `no-useless-increment`                 | `sonar/no-useless-increment`                          |
| `no-useless-intersection`              | `sonar/no-useless-intersection`                       |
| `no-variable-usage-before-declaration` | `sonar/no-variable-usage-before-declaration`          |
| `use-type-alias`                       | `sonar/use-type-alias`                                |

### codelyzer

| old rule                                      | new rule                                                      |
| --------------------------------------------- | ------------------------------------------------------------- |
| `template-accessibility-alt-text`             | `@angular-eslint/template/accessibility-alt-text`             |
| `template-accessibility-elements-content`     | `@angular-eslint/template/accessibility-elements-content`     |
| `template-accessibility-label-for`            | `@angular-eslint/template/accessibility-label-for`            |
| `template-accessibility-tabindex-no-positive` | `@angular-eslint/template/accessibility-tabindex-no-positive` |
| `template-accessibility-table-scope`          | `@angular-eslint/template/accessibility-table-scope`          |
| `template-accessibility-valid-aria`           | `@angular-eslint/template/accessibility-valid-aria`           |
| `template-banana-in-box`                      | `@angular-eslint/template/banana-in-box`                      |
| `template-click-events-have-key-events`       | `@angular-eslint/template/click-events-have-key-events`       |
| `template-conditional-complexity`             | `@angular-eslint/template/conditional-complexity`             |
| `template-cyclomatic-complexity`              | `@angular-eslint/template/cyclomatic-complexity`              |
| `template-i18n`                               | `@angular-eslint/template/i18n`                               |
| `template-mouse-events-have-key-events`       | `@angular-eslint/template/mouse-events-have-key-events`       |
| `template-no-any`                             | `@angular-eslint/template/no-any`                             |
| `template-no-autofocus`                       | `@angular-eslint/template/no-autofocus`                       |
| `template-no-call-expression`                 | `@angular-eslint/template/no-call-expression`                 |
| `template-no-distracting-elements`            | `@angular-eslint/template/no-distracting-elements`            |
| `template-no-negated-async`                   | `@angular-eslint/template/no-negated-async`                   |
| `template-use-track-by-function`              | `@angular-eslint/template/use-track-by-function`              |
| `import-destructuring-spacing`                | `object-curly-spacing`                                        |
| `use-pipe-decorator`                          | `N/A`                                                         |
| `component-class-suffix`                      | `@angular-eslint/component-class-suffix`                      |
| `component-max-inline-declarations`           | `@angular-eslint/component-max-inline-declarations`           |
| `component-selector`                          | `@angular-eslint/component-selector`                          |
| `contextual-decorator`                        | `@angular-eslint/contextual-decorator`                        |
| `contextual-lifecycle`                        | `@angular-eslint/contextual-lifecycle`                        |
| `directive-class-suffix`                      | `@angular-eslint/directive-class-suffix`                      |
| `directive-selector`                          | `@angular-eslint/directive-selector`                          |
| `no-attribute-decorator`                      | `@angular-eslint/no-attribute-decorator`                      |
| `no-conflicting-lifecycle`                    | `@angular-eslint/no-conflicting-lifecycle`                    |
| `no-forward-ref`                              | `@angular-eslint/no-forward-ref`                              |
| `no-host-metadata-property`                   | `@angular-eslint/no-host-metadata-property`                   |
| `no-input-prefix`                             | `@angular-eslint/no-input-prefix`                             |
| `no-input-rename`                             | `@angular-eslint/no-input-rename`                             |
| `no-inputs-metadata-property`                 | `@angular-eslint/no-inputs-metadata-property`                 |
| `no-lifecycle-call`                           | `@angular-eslint/no-lifecycle-call`                           |
| `no-output-native`                            | `@angular-eslint/no-output-native`                            |
| `no-output-on-prefix`                         | `@angular-eslint/no-output-on-prefix`                         |
| `no-output-rename`                            | `@angular-eslint/no-output-rename`                            |
| `no-outputs-metadata-property`                | `@angular-eslint/no-outputs-metadata-property`                |
| `no-pipe-impure`                              | `@angular-eslint/no-pipe-impure`                              |
| `no-queries-metadata-property`                | `@angular-eslint/no-queries-metadata-property`                |
| `pipe-prefix`                                 | `@angular-eslint/pipe-prefix`                                 |
| `prefer-on-push-component-change-detection`   | `@angular-eslint/prefer-on-push-component-change-detection`   |
| `prefer-output-readonly`                      | `@angular-eslint/prefer-output-readonly`                      |
| `relative-url-prefix`                         | `@angular-eslint/relative-url-prefix`                         |
| `use-component-selector`                      | `@angular-eslint/use-component-selector`                      |
| `use-component-view-encapsulation`            | `@angular-eslint/use-component-view-encapsulation`            |
| `use-injectable-provided-in`                  | `@angular-eslint/use-injectable-provided-in`                  |
| `use-lifecycle-interface`                     | `@angular-eslint/use-lifecycle-interface`                     |
| `use-pipe-transform-interface`                | `@angular-eslint/use-pipe-transform-interface`                |

### ng-tslint

| old rule        | new rule                               |
| --------------- | -------------------------------------- |
| `member-naming` | `@typescript-eslint/naming-convention` |

<!-- suffix placeholder -->

## Forthcoming

Forthcoming configs include:

- [ ] React, disable replaceable [tslint-react](https://github.com/palantir/tslint-react) rules in favor of [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[eslint]: https://eslint.org
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
[tslint]: https://github.com/palantir/tslint
