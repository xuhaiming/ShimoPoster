var path = require('path');

module.exports = {
  entry: {
    home: "./src/home.js",
    userPage: "./src/userPage.js"
  },
  output: {
    path: path.join(__dirname, "public/assets/js"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
