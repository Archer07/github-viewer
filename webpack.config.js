module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	resolve: { // what kind of files to look for and bundle
    modules:[__dirname, 'node_modules'],
    alias: {
      Tit: 'public/components/Tit.jsx',
      TitForm:'public/components/TitForm.jsx',
      TitMsg: 'public/components/TitMsg.jsx'
    },
    extensions: ['*','.js', '.jsx'] // always takes an array
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
