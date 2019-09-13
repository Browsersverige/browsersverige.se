/* global require */
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT = path.resolve(__dirname, './')
const BUILD_DIR = path.resolve(ROOT, './build')
const JS_DIR = path.resolve(ROOT, './js')
const SCSS_DIR = path.resolve(ROOT, 'scss/')
const IMAGES_DIR = path.resolve(ROOT, './images')
const FONTS_DIR = path.resolve(ROOT, './fonts')
const DATA_DIR = path.resolve(ROOT, './data')

const config = {
	context: ROOT,
	target: 'web',
	mode: 'development',
	devtool: '',
	entry: {
		app: [path.resolve(JS_DIR, 'app.js'), path.resolve(SCSS_DIR, 'main.scss')]
	},
	output: {
		path: BUILD_DIR,
		filename: 'index_bundle.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: {} },
					{ loader: 'sass-loader', options: {} }
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts/'
						}
					}
				]
			},
			{
				test: /\.(svg)$/,
				exclude: /fonts/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							noquotes: true
						}
					}
				]
			},
			{
				test: /\.(jpg|woff|woff2|eot|ttf|svg)$/,
				use: { loader: 'url-loader?limit=100000' }
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 9000,
		historyApiFallback: true,
		hot: true,
		inline: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/b.[hash].css'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html'
		}),
		new CopyWebpackPlugin([
			{ from: IMAGES_DIR, to: path.resolve(BUILD_DIR, 'images') },
			{ from: FONTS_DIR, to: path.resolve(BUILD_DIR, 'fonts') },
			{ from: DATA_DIR, to: path.resolve(BUILD_DIR, 'data') }
		])
	]
}

module.exports = config
