const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
      {
        loader: require.resolve('ts-loader')
      }
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.tsx$/,
    exclude: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('ts-loader')
      },
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
