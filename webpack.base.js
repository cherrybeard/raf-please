const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
	entry: APP_DIR + '/app.js',
	output: {
		filename: 'bundle.js',
		path: BUILD_DIR,
	},
	plugins: [
		new CleanWebpackPlugin([BUILD_DIR]),
		new HtmlWebpackPlugin({ template: APP_DIR + '/templates/app.pug' })
	],
	resolve: {
		modules: [APP_DIR, 'node_modules']
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|ttf|eot)$/,
				use: 'file-loader'
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			},
			{
        test: /\.js$/,
      	exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
			}
		]
	}
}

module.exports = {
	config: config,
	BUILD_DIR: BUILD_DIR
}
