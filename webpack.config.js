const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distPath = path.join(__dirname, 'dist');
const srcPath = path.join(__dirname, 'src');

const assetsPath = path.join(__dirname, 'static');
const indexPath = path.join(distPath, 'index.html');

const entry = path.join(srcPath, 'index.js');

module.exports = (env, opts) => {
	const dev = opts.mode === 'development';

	return {
		devtool: dev ? 'source-map' : false,
		entry,
		output: { path: distPath },
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Actions: path.join(srcPath, 'actions'),
				Components: path.join(srcPath, 'components'),
				Pages: path.join(srcPath, 'pages'),
				Reducers: path.join(srcPath, 'reducers'),
				Store$: path.join(srcPath, 'store.js'),
				Styled: path.join(srcPath, 'styled'),
			}
		},
		devServer: {
			contentBase: [distPath, assetsPath],
			host: '0.0.0.0',
			port: 3000,
			hot: true,
			index: 'index.html'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use: ['babel-loader']
				}
			]
		}
	};
};
