# danger

Example repo that uses [Danger JS](https://danger.systems/js/) to help with automating recurring PR review chores.

## Usage

### GitHub Action

Using the [Danger JS GitHub Action](https://github.com/marketplace/actions/danger-js-action), it's super easy to add to any project.

### Testing locally

It's easy to test locally by following this guide to [Working on your Dangerfile](https://github.com/marketplace/actions/danger-js-action).

1. Set up a [personal access token](https://github.com/settings/tokens)
2. Test a PR

   ```sh
   yarn danger pr https://github.com/danger/danger-js/pull/100
   ```
