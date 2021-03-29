import { message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('\n');
message(`Changed Files in this PR: \n - ${modifiedMD}`);

// Warns if there are changes to package.json, and tags the team.
const packageChanged = danger.git.modified_files.includes('package.json');
if (packageChanged) {
  const title = ':lock: package.json';
  const idea = 'Changes were made to `package.json.`';
  warn(`${title} - <i>${idea}</i>`);
}
