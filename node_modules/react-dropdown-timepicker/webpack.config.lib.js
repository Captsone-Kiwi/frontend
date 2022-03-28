const webpack = require("webpack")
const path = require("path")

module.exports = {
	entry: [
    './src/timepicker.js'
	],

	output: {
		path: path.join(__dirname, '/lib'),
		filename: 'index.js',
    library: "react-dropdown-timepicker",
    libraryTarget: "umd",
    umdNamedDefine: true
	},

	module: {
		loaders: [{
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader:'css-loader',
          options: {
            minimize: true,
            sourceMap: true
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]

}
