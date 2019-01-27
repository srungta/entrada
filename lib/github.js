const Octokit = require('@octokit/rest');
const inquirer = require('./inquirer');

let octokit = null;

/**
 * Logs in to Github
 */
async function login() {
  const credentials = await inquirer.askGitHubUsernamePassword();
  octokit = new Octokit({
    auth: {
      username: credentials.username,
      password: credentials.password,
      on2fa: async () => {
        // example: ask the user
        const code = await inquirer.askGitHub2FAuthCode();
        return code['2faCode'];
      },
    },
  });
  const repos = await octokit.repos.get({
    owner: credentials.username,
    repo: 'socks',
  });
  console.log(repos);
}

module.exports = {
  login: login,
};
