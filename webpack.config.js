const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLTemplates = require('./scripts/html-templates.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const publicPath = './public/assets';

module.exports = (env, argv) => {
  const isProductionMode = argv.mode === 'production';

  return {
    mode: isProductionMode ? argv.mode : 'development',
    ...(!isProductionMode ? { devtool: 'inline-source-map' } : {}),
    ...(!isProductionMode
      ? {
          devServer: {
            static: './',
          },
        }
      : {}),
    entry: ['./src/ts/index.ts', './src/sass/index.scss'],
    output: {
      filename: isProductionMode ? 'js/bundle.[hash].js' : 'js/bundle.js',
      path: path.resolve(__dirname, publicPath),
    },
    module: {
      // Rules are read from right to left
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../', // enable relative paths for images and fonts
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: () => [
                    postcssPresetEnv({
                      autoprefixer: { grid: true },
                    }),
                  ],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: isProductionMode ? 'css/[name].[hash].css' : 'css/[name].css',
      }),
      // creates HTMLPlugins from each HTML file in folder "templates"
      ...HTMLTemplates.createPlugins(isProductionMode),
    ],
  };
};
