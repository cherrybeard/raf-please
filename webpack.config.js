const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
	entry: APP_DIR + '/app.js',
	devServer: {
    historyApiFallback: true,
		contentBase: BUILD_DIR
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ template: APP_DIR + '/templates/app.pug' }),
		new webpack.DefinePlugin({
			'PRODUCTION': JSON.stringify(false)
		}),
	],
	output: {
		filename: 'bundle.js',
		path: BUILD_DIR,
    publicPath: '/'
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
				test: /\.(png|svg|jpg|gif)$/,
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

module.exports = config
