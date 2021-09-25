// C/P from https://thefrugaldeveloper.life/posts/building-an-eleventy-boilerplate-pt-2

const xml = require("xml");

exports.data = {
	permalink: 'opensearch.xml',
	sitemap: {
		ignore: true
	},
	robots: {
		ignore: true
	}
}

exports.render = function (data) {
		const search = [
			{
				OpenSearchDescription: [
					{ _attr: { xmlns: "http://a9.com/-/spec/opensearch/1.1/" } },
					{ ShortName: data.site.shortname },
					{ Description: `Use Google to search ${data.site.name}` },
					{
						Url:
						{
							_attr: {
								type: "application/rss+xml",
								template: `http://www.google.com/search?q=site:${data.site.url} {searchTerms}`
							}
						}

					}
				]
			}
		];
	return xml(search, { declaration: true });
}
