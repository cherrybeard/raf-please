const path = require('path');
const webpack = require('webpack')
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

const BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			},
			'PRODUCTION': JSON.stringify(true)
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
	],
	output: {
		filename: 'bundle.js',
		path: BUILD_DIR,
    publicPath: '/rafplease/'
	},
}

module.exports = Merge(CommonConfig, config);
