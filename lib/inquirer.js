//  module requires.
const inquirer = require('inquirer');
//  user requires.
// const files = require('./files');

// Private methods
/**
 * Validates the username
 * @param {string} username
 * @return {any}
 */
function validateUsername(username) {
  if (username && username.length) {
    return true;
  } else {
    return 'Please enter your username or e-mail address.';
  }
}

/**
 * Asks the user for github credentials
 * @return {any}
 */
function askGitHubCredentials() {
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your GitHub username or e-mail address:',
      validate: validateUsername,
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: validateUsername,
    },
  ];
  return inquirer.prompt(questions);
}

module.exports = {
  askGitHubCredentials: askGitHubCredentials,
};
