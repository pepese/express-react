const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',
  /* トランスパイル対象ディレクトリ */
  context: path.join(__dirname, 'src'),
  /* トランスパイルの起点ファイル */
  entry: './app.js',
  /* 出力先 */
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  /* トランスパイル対象拡張子 */
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: [
              // プリセットを指定することで、ES2019 を ES5 に変換
              '@babel/preset-env',
              // React の JSX を解釈
              '@babel/preset-react'
            ]
          }
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      }),
    ],
  }
};