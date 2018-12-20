var ncp = require('ncp').ncp;
var rimraf = require('rimraf');
const chalk = require('chalk');
 
ncp.limit = 100;

 
ncp('./node_modules/webapp-starter-kit', './app/templates', function (err) {
 if (err) {
   return console.error(chalk.red(err));
 }
 console.error(chalk.green('Reinitialisation of template succeeded 👌'));
});
