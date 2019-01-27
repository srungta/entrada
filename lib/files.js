const fs = require('fs')
const path = require('path')

function getCurrentDirectBase() {
    return path.basename(process.cwd());
}

function directExists(filePath) {
    try {
        return fs.statSync(filePath).isDirectory();
    } catch (err) {
        return false;
    }
}

module.exports = {
    getCurrentDirectBase: getCurrentDirectBase,
    directExists : directExists
}