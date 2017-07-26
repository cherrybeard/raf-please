const BaseConfig = require('./webpack.base.js');

const webpack = require('webpack');
const Merge = require('webpack-merge');

const SERVER_SUBDIRECTORY = '/rafplease';

const config = {
	output: {
		publicPath: (SERVER_SUBDIRECTORY + '/')
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			},
			ROOT_DIRECTORY: JSON.stringify(SERVER_SUBDIRECTORY)
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify:false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		})
	]
};

module.exports = Merge(BaseConfig.config, config);
