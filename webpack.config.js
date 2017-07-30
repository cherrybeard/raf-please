const BaseConfig = require('./webpack.base.js');

const webpack = require('webpack');
const Merge = require('webpack-merge');

const BUILD_DIR = BaseConfig.BUILD_DIR;

const config = {
	output: {
    publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			ROOT_DIRECTORY: JSON.stringify('/'),
			ASSETS_DIRECTORY: JSON.stringify('http://cherrybeard.ru/rafplease/assets')
		})
	],
	devServer: {
    historyApiFallback: true,
		contentBase: BUILD_DIR
	}
}

module.exports = Merge(BaseConfig.config, config);
