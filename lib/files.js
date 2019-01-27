const fs = require('fs');
const path = require('path');

/**
 * Gets the current directory's base path.
 * @return {string} path to base directory.
 */
function getCurrentDirectBase() {
  return path.basename(process.cwd());
}

/**
 * Checks if the directory exists.
 * @param {string} filePath
 * @return {boolean}
 */
function directExists(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
}

module.exports = {
  getCurrentDirectBase: getCurrentDirectBase,
  directExists: directExists,
};
