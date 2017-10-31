const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var JsDocPlugin = require('jsdoc-webpack-plugin-v2');




module.exports = {
  entry: {
	  app: './src/js/app.js'
  },
  output: {
    filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'dist')
	// publicPath: '/dist'
  },
  module:{
	rules:[
		{ 
			test: /\.js$/,
			use:[
				{
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			]
		},
		{
			test: /\.scss$/,
			use: extractPlugin.extract({
				use: ['css-loader', 'sass-loader']
			})
		},	
		{ 
			test: /\.html$/,
			loader: 'mustache-loader?{ minify: { removeComments: false } }',// If you're using Mustache.js, leave the mustache loader
			loader:['html-loader'] // In order to use pure html, uncomment this loader and comment out the line above.
		},
		{ 
			test: /\.(jpg|png)$/,
			use:[
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img/'
					}
				}
			]
		},
		{ 
			test: /\.html$/,
			use:[
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					}
				}
			],
			exclude: path.resolve(__dirname, 'src/index.html')
		},
		{ 
			test: /\.(woff2?|svg)$/,
			loader: 'url-loader?limit=10000',
			options: {
				name: '[name].[ext]',
				outputPath: 'fonts/'
			} 
		},
		{ 
			test: /\.(ttf|eot)$/, 
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'fonts/'
			}
		},
	]
  },
  plugins:[
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery : 'jquery'

	}),  
	new webpack.optimize.UglifyJsPlugin({
		// ...
	}),
	extractPlugin,
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'src/index.html'
	}),
	new CleanWebpackPlugin(['dist', 'docs']),
	new JsDocPlugin({
		conf: path.resolve(__dirname, 'jsdoc.json'),
	})
  ]
};