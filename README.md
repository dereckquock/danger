<img width="942" alt="danger" src="https://user-images.githubusercontent.com/1015884/114778221-6d6cd100-9d29-11eb-86a0-8382e2ae4606.png">

# danger

Example repo that uses [Danger JS](https://danger.systems/js/) to help with automating recurring PR review chores.

## Usage

### GitHub Action

Just add a step to run danger:

```sh
 - name: Danger JS
   run: npx danger ci
   env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Testing locally

It's easy to test locally by following this guide to [Working on your Dangerfile](https://github.com/marketplace/actions/danger-js-action).

1. Set up a [personal access token](https://github.com/settings/tokens)
2. Test a PR

   ```sh
   yarn danger pr https://github.com/danger/danger-js/pull/100
   ```
