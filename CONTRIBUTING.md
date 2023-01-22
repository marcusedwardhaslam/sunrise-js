# Contributing to sunrise-js

Thanks for checking out sunrise-js. I especially don't anticipate anyone to read this let alone contribute, but it's here just in case.

:warning: **Before making any code changes**: Please ensure that you have checked out develop and base your new branch from develop!

## Getting started

1. Run `nvm use`. sunrise-js provides a [.nvmrc](https://github.com/marcusedwardhaslam/sunrise-js/blob/develop/.nvmrc) which instructs the specific node version to use.
2. Install developer dependencies with `yarn`

You can now start working with the code. Check out [package.json:39](https://github.com/marcusedwardhaslam/sunrise-js/blob/develop/package.json#L39-L47) to see a list of helpful scripts

## Submitting a change to sunrise-js

When submitting a pull request please ensure that your target is `develop`. A GitHub action will run pretty checks, linting checks and test your submission.

## Releasing a new version of sunrise-js to npm

sunrise-js uses Github actions to publish itself. Any merge to `main` will automatically trigger a Github action. This Github action will **fail** if the version is not updated in [package.json:3](https://github.com/marcusedwardhaslam/sunrise-js/blob/develop/package.json#L3) and the version number has already been published.
