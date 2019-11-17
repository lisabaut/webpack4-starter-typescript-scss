// iterates over each html file within the templates folder
// and creates HtmlWebpackPlugin

const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templatesFolder = './src/templates/';

const createPlugins = isProductionMode => {
  return fs.readdirSync(templatesFolder).map(file => {
    const name = path.parse(file).name;
    return new HtmlWebpackPlugin({
      title: `${name} | Static Site Template`,
      template: `./src/templates/${file}`,
      filename: `${name}.html`,
      minify: isProductionMode,
      hash: !isProductionMode // adds hashes to injected file names
    });
  });
};

module.exports = {
  createPlugins
};
