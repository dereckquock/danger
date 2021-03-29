import { danger, message, warn } from 'danger';

// Warns if there are changes to package.json
const packageChanged = danger.git.modified_files.includes('package.json');
if (packageChanged) {
  const title = ':lock: package.json';
  const idea = 'Changes were made to `package.json.`';
  warn(`${title} - <i>${idea}</i>`);
}

const bigPRThreshold = 0;
if (danger.github.pr.additions > bigPRThreshold) {
  warn(':exclamation: Massive PR :cry:');
  markdown(
    `> Pull Request size seems relatively large. Is it possible to separate this into smaller PRs to help with faster, easier review?`
  );
}

if (danger.github.pr.deletions > danger.github.pr.additions) {
  message(':100: Nice! You deleted more code than you added :100:');
}
