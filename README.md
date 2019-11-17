## Webpack 4 Starter

This is a simple Webpack 4 Starter Kit including Webpack-Dev-Server and TypeScript and SCSS support.

### How to use this starter kit

#### Installation

Clone this repository and run `yarn install` to install all dependencies.

#### Development

Run `yarn start` to start the Webpack-Dev-Server which opens the index html file and the corresponding transpiled JavaScript and CSS files on `localhost:8080`.

The Webpack-Dev-Server detects any changes on the source files which can be found in `src/ts/` for Typescript, `src/sass` for SCSS and `src/templates` for HTML, compiles the files again and reloads the site on `localhost:8080` accordingly.

#### Build

Running `yarn build` will compile all files and move them in a minified and compressed version to the folder `public`.

#### Linting

Run `yarn lint` to detect (and auto-fix) TypeScript and JavaScript errors.

Run `yarn stylelint` to detect (and auto-fix) SCSS errors.
