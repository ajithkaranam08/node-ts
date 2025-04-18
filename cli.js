#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectName = process.argv[2] || 'my-app';

console.log(`🚀 Scaffolding new project in ./${projectName}...`);

try {
  execSync(
    `git clone https://github.com/ajithkaranam08/node-ts.git ${projectName}`,
    {
      stdio: 'inherit',
    }
  );

  // Optional: Remove .git to avoid confusion
  execSync(`rm -rf ${projectName}/.git`, { stdio: 'inherit' });

  console.log(`\n✅ Done! To get started:\n`);
  console.log(`   cd ${projectName}`);
  console.log(`   npm install`);
  console.log(`   npm run dev`);
} catch (err) {
  console.error('❌ Something went wrong:', err.message);
}
