var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
	entry: APP_DIR + '/app.js',
	devServer: {
    historyApiFallback: true,
		contentBase: BUILD_DIR
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ template: APP_DIR + '/templates/app.pug' })
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
