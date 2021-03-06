import path from 'path';

export default {
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, 'src/protocol.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'protocol.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loader: 'css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
    ]
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: {
    electron: 'electron',
    crypto: 'crypto',
    '@maidsafe/safe-node-app': '@maidsafe/safe-node-app'
  }
};
