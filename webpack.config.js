const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'client/components/'),
      containers: path.resolve(__dirname, 'client/containers/'),
      utils: path.resolve(__dirname, 'client/utils/'),
      central: path.resolve(__dirname, 'client/central/'),
      actions: path.resolve(__dirname, 'client/central/actions/'),
      reducers: path.resolve(__dirname, 'client/central/reducers/'),
      selectors: path.resolve(__dirname, 'client/central/selectors/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/client'),
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties'],
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '/client/styles'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
};
