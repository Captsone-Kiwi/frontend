const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		'./pages/index.js',
	],

	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
            { test: /\.js$/, exclude: [/node_modules/], use: ['babel-loader'] },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.scss$/, exclude: [/src/], use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader' },
            { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, use: 'file-loader' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'pages/index.ejs',
						title: "React Drop-down Time Picker"
        })
    ]

}
