const dev = process.env.MODE_ENV !== 'production';
const MiniCss = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({}), 
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  mode: dev ? 'development' : 'production',
  entry: './index.js',
  output: {
    filename: 'js/liz.min.js',
    path: __dirname + '/assets'
  },
  plugins: [
    new MiniCss({ filename: 'css/liz.min.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.l?[ec]ss$/,
        use: [
          MiniCss.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}
