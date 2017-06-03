module.exports = {
	entry: 'src/app.js',
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	module: {
		loaders: [
			{
			loader:'babel-loader',
			test: /\.jsx?$/,
			query:{
				presets:  ['react', 'es2015', 'stage-0']
			},
			exclude: /(node_modules)/
			}
		]
	}
}
