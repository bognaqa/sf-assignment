# Very Important Project

This project demonstrates my solution to QA assignment to get a job.

## Installation

To install the project dependencies, run this command in terminal in main directory:

```
npm install
```

## Run tests locally

Running tests doesn't require setting any env variables.
To execute tests you can use scripts defined in *package.json* or [PlayWright CLI](https://playwright.dev/docs/test-cli), for example:
- run the command `npx playwright test` or
- run the command `npm run assignment`

Additionaly, [PlayWright Visual Studio Code addon](https://playwright.dev/docs/getting-started-vscode) is available, allowing to run tests manually.

## View tests results

- The test report will be saved in /test-results directory
- The screenshots will be taken on error and will be saved in /test-results directory sorted by failed tests

# References

- PlayWright Guide https://playwright.dev/
