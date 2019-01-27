//  module requires.
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
//  user requires.
const files = require('./lib/files');
const github = require('./lib/github');

// Introduction
clear();
console.log(
    chalk.yellow(figlet.textSync('Entrada', {horizontalLayout: 'full'}))
);

if (files.directExists('.git')) {
  console.log(chalk.red('Already a git repository'));
}

const main = async () => {
  await github.login();
};

main();
