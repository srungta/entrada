module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 8
    },
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")]
    }
};