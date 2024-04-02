const { getFilePath } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: getFilePath('src/index.js'),
  output: {
    filename: '[name]-[contenthash:8].js',
    path: getFilePath('dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getFilePath('public/index.html'),
      title: 'vue2 DEMO | webpack5',
      favicon: getFilePath('public/favicon.png'),
      inject: 'body'
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': getFilePath('src')
    }
  }
};
