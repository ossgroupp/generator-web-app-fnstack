"use strict";

const Generator = require("yeoman-generator");
const utils = require("./utils");

// const baseRootPath = path.resolve(__dirname, 'app/templates');

module.exports = class extends Generator {
  // async prompting2() {
  //   const answers = await this.prompt([{
  //     type    : 'input',
  //     name    : 'name',
  //     message : 'Your project name',
  //     default : this.appname // Default to current folder name
  //   }, {
  //     type    : 'confirm',
  //     name    : 'cool',
  //     message : 'Would you like to enable the Cool feature?'
  //   }]);

  //   this.log('app name', answers.name);
  //   this.log('cool feature', answers.cool);
  // }

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your project name",
        default: this.appname
      }
    ]);

    // Make sure to get the correct app name if it is not the default
    if (answers.name !== utils.getAppName()) {
      answers.name = utils.getAppName(answers.appName);
    }
    this.log("project name", answers.name);
    // // Set needed global vars for yo
    this.appname = answers.appName;
    // // Set needed keys into config
    // this.config.set("appName", this.appName);
    // this.config.set("appPath", this.appPath);
    // this.config.set("generatedWithVersion", this.generatedWithVersion);
  }

  writing() {
    this.fs.copyTpl(this.templatePath("**"), this.destinationPath(), {
      title: "Templating with Yeoman"
    });
  }
};
