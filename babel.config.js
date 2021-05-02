const plugins = [
	'@babel/plugin-proposal-optional-chaining',
	['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }],
]
if (process.env.NODE_ENV === 'production') {
	plugins.push('transform-remove-console')
}

module.exports = {
	// presets: [
	// 	['@babel/preset-react', { // install "@babel/preset-react"
	// 		pragma: 'h',
	// 		pragmaFrag: 'Fragment',
	// 	}],
	// ],
	plugins: plugins
}