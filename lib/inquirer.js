//  module requires.
const inquirer = require('inquirer');
//  user requires.
// const files = require('./files');

// Private methods
/**
 * Validates the value.
 * @param {string} username
 * @return {any}
 */
function validateValue(username) {
  if (username && username.length) {
    return true;
  } else {
    return 'Please enter a valid value.';
  }
}

/**
 * Asks the user for github credentials
 * @return {any}
 */
function askGitHub2FAuthCode() {
  const questions = [
    {
      name: '2faCode',
      type: 'password',
      message: 'Enter your 2FA code:',
      validate: validateValue,
    },
  ];
  return inquirer.prompt(questions);
}

/**
 * Asks the user for github credentials
 * @return {any}
 */
function askGitHubUsernamePassword() {
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your GitHub username or e-mail address:',
      validate: validateValue,
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: validateValue,
    },
  ];
  return inquirer.prompt(questions);
}

module.exports = {
  askGitHub2FAuthCode: askGitHub2FAuthCode,
  askGitHubUsernamePassword: askGitHubUsernamePassword,
};
