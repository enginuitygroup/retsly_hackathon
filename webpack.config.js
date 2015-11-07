var webpack = require("webpack");

module.exports = {
  entry: "./index.js"
, output: {
    path: __dirname + "/build"
  , publicPath: "/assets/"
  , filename: "bundle.js"
  }
, devtool: "source-map"
, resolve: {
    extensions: [
      ""
    , ".js"
    ]
  }
, module: {
    loaders: [
      {
        test: /\.js$/
      , exclude: /node_modules/
      , loader: "babel-loader"
      }
    , {
        test: /\.less$/
      , loader: "style-loader!css-loader!less-loader"
      }
    , {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/
      , loader: "url?limit=73728"
      }
    , {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
      , loader: "file"
      }
    , {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
      , loader: "file"
      }
    , {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
      , loader: "url?limit=102400"
      }
    , {
        test: /\.(jpe?g|png)(\?v=\d+\.\d+\.\d+)?$/
      , loader: "url?limit=102400"
      }
    ]
  }
, plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true)
  , new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      , HOODQ_TOKEN: JSON.stringify(process.env.HOODQ_TOKEN)
      , RETSLY_TOKEN: JSON.stringify(process.env.RETSLY_TOKEN)
      }
    })
  ]
}
