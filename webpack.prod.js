const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

let prod = {
	mode: 'production',
	// devtool: 'source-map',
	devtool: 'nosources-source-map',
};
const isEsbuild = (process.env.MINIMIZER === 'esbuild');
if (isEsbuild) prod = merge(prod, {
	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'es2015', // es2015, es2020, esnext
			}),
		],
	},
});

module.exports = merge(common, prod);
