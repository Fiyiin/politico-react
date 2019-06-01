const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        query: {
          presets: [
            'minify',
            ['@babel/preset-env', {
              targets: {
                node: '10',
              },
            },
            ],
            '@babel/preset-react',
          ],
        },
        test: /\.js$/,
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /plugin\.css$/,
        loaders: [
          'style-loader', 'css-loader',
        ],
      },
    ],
  },

  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map',
    publicPath: '/',
  },
  devtool: '#source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
};
