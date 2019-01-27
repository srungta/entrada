//  module requires.
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
//  user requires.
const files = require('./lib/files')

// main
clear();
console.log(
    chalk.yellow(
        figlet.textSync(
            'Entrada',
            { horizontalLayout: 'full' }
        )
    )
);