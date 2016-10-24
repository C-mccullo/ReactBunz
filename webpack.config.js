module.exports = {
  entry: "./entry.js",
  output: {
      path: "dist",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: ['es2015','react']
        } 
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
