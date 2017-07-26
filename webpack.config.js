const BaseConfig = require('./webpack.base.js');

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');

const BUILD_DIR = BaseConfig.BUILD_DIR;

const config = {
	output: {
    publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			ROOT_DIRECTORY: JSON.stringify('/')
		})
	],
	devServer: {
    historyApiFallback: true,
		contentBase: BUILD_DIR
	}
}

module.exports = Merge(BaseConfig.config, config);
