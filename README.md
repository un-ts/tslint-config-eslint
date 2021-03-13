# tslint-config-eslint

> Yet another TSLint Configuration which disables all rules which has been handled by [`eslint`](https://github.com/eslint/eslint), [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs) or [`eslint-plugin-sonar`](https://github.com/rx-ts/eslint-plugin-sonar).

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rx-ts/tslint-config-eslint/Publish%20package)](https://github.com/rx-ts/tslint-config-eslint/actions?query=workflow%3A%22Publish+package%22)
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
[![codechecks.io](https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true)](https://codechecks.io)

[TSLint][] will be [deprecated](https://github.com/palantir/tslint/issues/4534) some time in 2019, but it has not been finished. So maybe you're using [ESLint][] with it together, then it would be terrible to lint codes twice, especially for those rules which has equivalent rules from [`eslint`](https://github.com/eslint/eslint), [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs) or [`eslint-plugin-sonar`](https://github.com/rx-ts/eslint-plugin-sonar).

You may tried something like [tslint-to-eslint-config](https://github.com/typescript-eslint/tslint-to-eslint-config) to help you to migrate, while this package/configuration will help you to use [ESLint][] quickly without remove or refactor your original `tslint.json` heavily.

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [Configuration](#configuration)
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

```jsonc
{
  "extends": ["your original great configs", "tslint-config-eslint"] // put this config at the last, so it will take highest priority
}
```

```jsonc
{
  "extends": ["your original great configs", "tslint-config-eslint/prettier"] // if you're using tslint with prettier
}
```

```jsonc
{
  "extends": ["your original great configs", "tslint-config-eslint/sonar"] // if you're using tslint with eslint-plugin-sonarjs
}
```

## Forthcoming

Forthcoming configs include:

- [ ] Angular, disable replaceable [tslint-angular](https://github.com/mgechev/tslint-angular#readme) rules in favor of [angular-eslint](https://github.com/angular-eslint/angular-eslint)
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
