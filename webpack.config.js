const path = require('path');
const entryFile = path.resolve(__dirname, 'src', 'client', 'app.js');
const outputDir = path.resolve(__dirname, 'public');
module.exports = {
 entry: ['babel-polyfill', entryFile],
 output: {
      filename: 'bundle.js',
      path: outputDir
 },
 devServer: {
  inline:true,
  port: 8008
 },
 module: {
      rules: [
       
        {
           test: /\.(js|jsx)$/,
           loader: 'babel-loader',
           exclude: /node_modules/
         },
         {
           test: /\.(scss|css)$/,
           use: [
              {
                loader: 'style-loader'
              }, 
              { 
                loader: 'css-loader',
              }, 
              { 
                 loader: 'sass-loader' 
              }
            ]
         }
       ]
 }
};