// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: { directory: path.join(__dirname, './') },
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 8080,
    hot: true,
  },
  resolve: {
    fallback: {
      // Polyfill Node's 'path' for the browser:
      path: require.resolve('path-browserify'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
