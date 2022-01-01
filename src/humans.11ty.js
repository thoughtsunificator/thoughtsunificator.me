const humans = require('humans-generator');

exports.data = {
	permalink: 'humans.txt',
	sitemap: {
		ignore: true
	},
	robots: {
		ignore: true
	}
}

exports.render = async function(data) {
	return await new Promise((resolve, reject) => {
		humans(data.other.human, (error, humans) => {
			if (error) {
				reject(error);
			} else {
				resolve(humans.join('\n'));
			}
		})
	});
}
