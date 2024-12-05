import humans from 'humans-generator'

export const data = {
	permalink: 'humans.txt',
	sitemap: {
		ignore: true
	},
	robots: {
		ignore: true
	}
}

export async function render(data) {
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
