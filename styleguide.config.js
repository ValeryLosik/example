const path = require('path');
module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './lib/components/**/*.tsx',
	propsParser: require('react-docgen-typescript').parse,
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.js$/,
					loaders: ["react-hot", "babel-loader"],
					exclude: '/node_modules/',
					include: path.join(__dirname, "..", "client")
				},
				{
					test: /\.(ts|tsx)$/,
					loaders: ['react-hot', 'ts-loader']
				}]
		}
	},
};
