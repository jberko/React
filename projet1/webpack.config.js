const path = require('path');
const BUILD_DIR =path.resolve(__dirname,"src/public")
const APP_DIR =path.resolve(__dirname,"src/app")

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module : {
    // loaders : [
    //   {
    //     test : /\.js*?/,
    //     include : APP_DIR,
    //     loader : 'babel-loader'
    //   },
    //   {

    //     test: /\.(s*)css$/,
    //       loader: ['style-loader','css-loader','sass-loader']
    //   }
      
    // ]

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ,
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
  

};

module.exports = config;