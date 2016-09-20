'use strict';
var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry:{
    	main: path.join(__dirname, '/src/css/main.styl')
	},
    output: {
        filename: "[name].js",
		library: 'webpack',
		path: path.join(__dirname, 'public', 'assets'),
		publicPath: '/assets/'
    },
	
	
	watchOptions:{
		aggregateTimeout: 100
	},
	
	resolve:{
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js', 'styl']
	},
	resolveLoaders:{
		root: [path.resolve('./node_modules')],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders:[
			{
				test: /\.styl$/i,
				loader: extractTextPlugin.extract('css!stylus')
			}
		]
	},
	devtool: 'sourcemap'
};


config.plugins = [
	new extractTextPlugin('[name].css', {allChunks: true}),
	new CleanWebpackPlugin(['public/assets/webpack'], {
		root: __dirname,
		verbose: false,
		exclude: []
	})
];


module.exports = config;
