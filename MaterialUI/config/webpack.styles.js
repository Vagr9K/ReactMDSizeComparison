/* eslint import/no-extraneous-dependencies: 0 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let DEBUG = false;

function PluginWrap(styleconfig) {
  const newStyleConfig = Object.assign({}, styleconfig);
  const newUse = newStyleConfig.use.slice();
  newUse.shift();
  newStyleConfig.use = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: newUse,
  });
  return newStyleConfig;
}

function PluginAppend(config) {
  const newConfig = Object.assign({}, config);
  newConfig.plugins.push(new ExtractTextPlugin('styles.css'));
  return newConfig;
}

function Styles(debug) {
  DEBUG = debug;
  let styleConfig = {
    module: {
      rules: [],
    },
    plugins: [],
  };
  const styleLoaders = [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
    },
  ];
  if (!DEBUG) {
    styleConfig.module.rules.push(PluginWrap(styleLoaders[0]));
    styleConfig = PluginAppend(styleConfig);
  } else {
    styleConfig.module.rules.push(...styleLoaders);
  }
  return styleConfig;
}

module.exports = Styles;
