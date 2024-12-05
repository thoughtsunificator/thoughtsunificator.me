// C/P from https://thefrugaldeveloper.life/posts/building-an-eleventy-boilerplate-pt-2

import xml from "xml"

export const data = {
	permalink: 'opensearch.xml',
	sitemap: {
		ignore: true
	},
	robots: {
		ignore: true
	}
}

export function render(data) {
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
