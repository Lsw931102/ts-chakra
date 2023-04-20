/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
const webpack = require('webpack')

/**
 * @param {{env: string}} param
 */
module.exports = function () {
	return {
		devServer: {
			proxy: {
				'/': {
					target: 'http://43.154.35.197:1317',
					changeOrigin: true,
					ws: false,
					secure: false,
				},
			},
		},
		webpack: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
			configure: {
				// devtool: false,
				resolve: {
					fallback: {
						// 配置需要使用的依赖
						stream: require.resolve('stream-browserify'),
						crypto: require.resolve('crypto-browserify'),
						buffer: require.resolve('buffer'),
					},
				},
			},
			plugins: {
				add: [
					new webpack.ProvidePlugin({
						Buffer: ['buffer', 'Buffer'],
					}),
				],
			},
		},
	}
}
