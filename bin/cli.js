#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error: ${error.status}`);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/weehongkoh/nextjs-boilerplate.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install --silent`;

console.log("Cloning repository with name " + repoName);
const checkout = runCommand(gitCheckoutCommand);

if (!checkout) {
  process.exit(-1);
}

console.log("Installing dependencies");
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  process.exit(-1);
}

console.log("Done! 🚀");
