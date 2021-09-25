// C/P from https://thefrugaldeveloper.life/posts/building-an-eleventy-boilerplate-pt-2

const robotstxt = require("generate-robotstxt");

exports.data = {
	permalink: 'robots.txt',
	 sitemap: {
		ignore: true
	 },
	 robots: {
		ignore: true
	 },
}

exports.render = async function (data) {
	const allowedPages = data.collections.all.filter((page) => { return (!page.data.robots || !page.data.robots.ignore); }).map((page) => { return page.url; });
	const disallowedPages = data.collections.all.filter((page) => { return (page.data.robots && page.data.robots.ignore); }).map((page) => { return page.url; });
	const robots = {
		policy: [{
			userAgent: "*",
			allow: allowedPages,
			disallow: disallowedPages
		}],
		sitemap: new URL("/sitemap.xml", data.site.url).toString(),
		host: data.site.url
	};
	return await robotstxt(robots);
}
