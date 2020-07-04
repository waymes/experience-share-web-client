/* eslint-disable */
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();

module.exports = withSass({
  distDir: 'build',
  cssModules: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
});
