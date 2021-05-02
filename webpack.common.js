const path = require("path");
const fs = require("fs");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// babel or swc
const isSWC = (process.env.TRANSPILER === 'swc');
const transpileConfig = (!isSWC) ? { // babel
	test: /\.(mjs|js|jsx)$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	// options: {
	// 	plugins: [
	// 		['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }],
	// 	],
	// },
} : { // SWC
	test: /\.(mjs|js|jsx)$/,
	exclude: /(node_modules|bower_components)/,
	loader: "swc-loader",
	options: {
		jsc: {
			parser: {
				"syntax": "ecmascript",
				"jsx": true,
				"dynamicImport": true,
				"privateMethod": false,
				"functionBind": false,
				"exportDefaultFrom": false,
				"exportNamespaceFrom": false,
				"decorators": false,
				"decoratorsBeforeExport": false,
				"topLevelAwait": true,
				"importMeta": false
			},
			target: "es5", // es2015, es2020, esnext
			"transform": {
				"react": {
					"pragma": "h",
					"pragmaFrag": "Fragment",
					"throwIfNamespace": true,
					"development": false,
					"useBuiltins": false
				},
			}
		},
	},
};


module.exports = {
	context: __dirname,
	entry: path.resolve(appDirectory, "src/main.js"),
	output: {
		filename: "js/main.js",
		path: path.resolve("./dist/"),
	},
	resolve: {
		extensions: [".ts", ".js", ".jsx"],
		fallback: {
			fs: false,
			path: false, // require.resolve("path-browserify")
		},
		alias: {
			"react": "preact-compat",
			"react-dom": "preact-compat",
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				loader: "source-map-loader",
				enforce: "pre",
			},
			// {
			//     test: /\.tsx?$/,
			//     loader: "ts-loader",
			// },
			transpileConfig, // babel or swc, set by env
			{
				test: /\.(png|jpg|gif|env|glb|stl)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: false, // if true, html no need include!
			template: path.resolve(appDirectory, "public/index.html"),
		}),
	],
};
