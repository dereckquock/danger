const { danger, message, schedule, warn } = require('danger');
const flow = require('danger-plugin-flow').default;
const path = require('path');
const fs = require('fs');

// Warns if there are changes to package.json
const packageChanged = danger.git.modified_files.includes('package.json');
if (packageChanged) {
  const title = ':lock: `package.json`';
  const idea = 'Changes were made to `package.json`';
  warn(`${title} - <i>${idea}</i>`);
}

const bigPRThreshold = 0;
if (danger.github.pr.additions > bigPRThreshold) {
  warn(':exclamation: Massive PR :cry:');
  markdown(
    `> Pull Request size seems relatively large. Is it possible to separate this into smaller PRs to help with faster, easier review?`
  );
}

// Check that every file touched has a corresponding test file
const correspondingTestsForAppFiles = [
  ...danger.git.modified_files,
  ...danger.git.created_files,
]
  .filter((f) => f.slice('-3') === '.js')
  .map((f) => {
    const newPath = path.dirname(f);
    const name = path.basename(f).replace('.js', '.test.js');

    return `${newPath}/${name}`;
  });

// Any updated/created files should be tested
const testFilesThatDontExist = correspondingTestsForAppFiles.filter((f) => {
  const exists = fs.existsSync(f);

  return !exists;
});

if (testFilesThatDontExist.length > 0) {
  const output = `Missing Test Files:
${testFilesThatDontExist.map((f) => `  - [ ] \`${f}\``).join('\n')}`;

  warn(output);
}

schedule(
  flow({
    modified: 'warn',
    created: 'fail',
    blacklist: ['**/__tests__/**/*.js', 'test_data/**/*.js'],
  })
);

if (danger.github.pr.deletions > danger.github.pr.additions) {
  message(':100: Nice! You deleted more code than you added :100:');
}
