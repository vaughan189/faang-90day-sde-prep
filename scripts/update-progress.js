import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readmePath = path.resolve(__dirname, '../README.md');

if (!fs.existsSync(readmePath)) {
  console.error('README.md not found!');
  process.exit(1);
}

const content = fs.readFileSync(readmePath, 'utf8');

// Match all checklist items [x] vs [ ]
const checkedMatches = content.match(/- \[[xX]\]/g) || [];
const uncheckedMatches = content.match(/- \[ \]/g) || [];

const completed = checkedMatches.length;
const total = completed + uncheckedMatches.length;
const percentage = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

console.log(`\n📊 Tracking Update:`);
console.log(`- Tasks Completed: ${completed}/${total} (${percentage}%)`);

// Generate ASCII Progress Bar (40 chars)
const barLength = 40;
const filledLength = Math.round((completed / (total || 1)) * barLength);
const emptyLength = barLength - filledLength;
const progressBar = '█'.repeat(filledLength) + '░'.repeat(emptyLength);

// Update Progress Badges and Bar in README
let updated = content;

// Replace badge
updated = updated.replace(
  /!\[Progress\]\(https:\/\/img\.shields\.io\/badge\/Progress-[^)]+\)/,
  `![Progress](https://img.shields.io/badge/Progress-${completed}%2F${total}%20Tasks%20(${percentage}%25)-brightgreen.svg)`
);

// Replace progress bar line
updated = updated.replace(
  /`\[[█░]+\]` \*\*\d+(\.\d+)?% Completed\*\*/,
  `\`[${progressBar}]\` **${percentage}% Completed**`
);

fs.writeFileSync(readmePath, updated, 'utf8');
console.log('✅ README.md progress bar and badge updated successfully!\n');
