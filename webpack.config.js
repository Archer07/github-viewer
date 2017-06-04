module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	resolve: {
    modules:[__dirname, 'node_modules'],
    alias: {
    },
    extensions: ['*','.js', '.jsx'] 
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
