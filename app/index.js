"use strict";

const Generator = require("yeoman-generator");
const utils = require("./utils");


// const baseRootPath = path.resolve(__dirname, 'app/templates');

module.exports = class extends Generator {
  // constructor(args, opts) {
  //   super(args, opts);
  //   // Make options available
  //   this.option("skip-welcome-message", {
  //     desc: "Skip the welcome message",
  //     type: Boolean,
  //     defaults: false
  //   });

  //   this.config.save();
  // }

  // initializing() {
  //   if (!this.options["skip-welcome-message"]) {
  //     this.log(require("yeoman-welcome"));
  //     this.log(
  //       "The template is about to initialize web application using react, react-apollo, antd and webpack.\n"
  //     );
  //   }
  // }

  // async prompting() {
  //   const answers = await this.prompt([
  //     {
  //       type: "input",
  //       appName: "name",
  //       message: "Please enter your project name",
  //       default: utils.getAppName()
  //     }
  //   ]);

  //   if (answers.appName !== utils.getAppName()) {
  //     answers.appName = utils.getAppName(answers.appName);
  //   }

  //   this.log("project name", answers.name);

  //   // Set needed global vars for yo
  //   this.appName = answers.appName;

  //   // Set needed keys into config
  //   this.config.set("appName", this.appName);
  //   this.config.set("appPath", this.appPath);
  //   this.config.set("generatedWithVersion", this.generatedWithVersion);
  // }

  writing() {
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath()
    );
  }


};


