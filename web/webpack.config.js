const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash:8].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 9001,
  },
  module: {
    rules: [
      { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          name: 'static/js/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/medias/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'static/fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
}
