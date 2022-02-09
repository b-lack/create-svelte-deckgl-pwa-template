#!/usr/bin/env node

const {execSync} = require('child_process');

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --deph 1 https://github.com/b-lack/create-svelte-deckgl-pwa-template ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository width name ${repoName}`);