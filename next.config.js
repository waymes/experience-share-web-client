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
    config.module.rules.forEach((rule) => {
      if (rule.test.toString().includes('.sass')) {
        rule.rules = rule.use.map((useRule) => {
          if (typeof useRule === 'string') {
            return { loader: useRule };
          }
          if (useRule.loader.startsWith('css-loader')) {
            return {
              oneOf: [
                {
                  test: /\.module\.sass$/,
                  loader: useRule.loader,
                  options: { ...useRule.options, modules: true },
                },
                {
                  loader: useRule.loader,
                  options: { ...useRule.options, modules: false },
                },
              ],
            };
          }

          return useRule;
        });

        delete rule.use;
      }
    });

    return config;
  },
});
