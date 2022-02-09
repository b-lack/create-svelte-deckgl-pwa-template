#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/b-lack/create-svelte-deckgl-pwa-template ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`;
const startServerCommand = `cd ${repoName} && npm run dev`;

console.log(`Cloning the repository width name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if(!installDeps) process.exit(-1);

console.log('Starting Server! Ready for take off...');
const startServer = runCommand(startServerCommand);
if(!startServer) process.exit(-1);

console.log('Stop Server: Control+C');
console.log('Restart Server: "npm run dev"');