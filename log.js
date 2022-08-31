const chalk = require("chalk"); //npm install chalk@4.1.2

const log = {
  info: function (content) {
    console.log(`${chalk.blueBright("INFO:")} ${content}`);
  },
  error: function (content) {
    console.log(`${chalk.redBright("ERROR:")} ${content}`);
  },
  success: function (content) {
    console.log(`${chalk.greenBright("SUCCESS:")} ${content}`);
  },
  log: function (content) {
    console.log(`${chalk.gray("LOG:")} ${content}`);
  },
};

module.exports = log;
