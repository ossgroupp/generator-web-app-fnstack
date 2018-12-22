# generator-web-app-fnstack
> [Yeoman](https://yeoman.io/) generator for [ReactJS](http://facebook.github.io/react/) that will help you to quickly set up a [ReactJS](http://facebook.github.io/react/) project using [ant design](https://ant.design/), [react-apollo](https://www.apollographql.com/docs/react/) and [Webpack 4](http://webpack.github.io/).

# About
Generator-web-app-fnstack will help you build new React projects using modern technologies.

Out of the box it comes with support for:
- Webpack 4
- Typescript
- Graphql vi react-apollo
- Ant design
- Babel
- Different supported style languages (scss, less)
- Automatic code linting via tslint, esLint and lint-staged

## Installation
```bash
# Make sure both is installed globally
npm install -g yo
npm install -g generator-web-app-fnstack
```

## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo web-app-fnstack
```


## Usage
The following commands are available in your project:
```bash
# Start for development
yarn start

# Build production version and start dist server
yarn build

# Lint all files in src (also automatically done AFTER tests are run)
yarn lint

# Clean up the dist directory
yarn clean-dist
```
## License
[MIT license](licence.md)
