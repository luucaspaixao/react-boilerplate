import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: { 
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify")
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
          }
        }
      }
    ]
  },
}