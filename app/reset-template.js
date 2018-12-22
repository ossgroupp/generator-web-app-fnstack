var ncp = require('ncp').ncp;
const replaceInFiles = require('replace-in-files');
const chalk = require('chalk');

ncp.limit = 100;

const options = {
  files: 'app/templates/src/layout/app.tsx',

  // See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // Replacement
  from: 'Web Starter kit', // string or regex
  to: '<%= title %>', // string or fn  (fn: carrying last argument - path to replaced file)

  // See more: https://www.npmjs.com/package/glob
  optionsForFiles: {
    // default
    ignore: ['**/node_modules/**']
  }
};

ncp('./node_modules/webapp-starter-kit', './app/templates', function(err) {
  if (err) {
    return console.error(chalk.red(err));
  }
  console.error(chalk.green('Reinitialisation of template succeeded 👌'));

  addTemplateSyntax();
});

async function addTemplateSyntax() {
  try {
    await replaceInFiles(options);

    console.error(chalk.green('Set tittle templating 👌'));
  } catch (error) {
    console.error(chalk.red('🛑 Error occurred:', error));
  }
}
