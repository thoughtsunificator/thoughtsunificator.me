// C/P from https://thefrugaldeveloper.life/posts/building-an-eleventy-boilerplate-pt-2

exports.data = {
	permalink: "/sitemap.xml",
	eleventyExcludeFromCollections: true,
	robots: {
		ignore: true
	}
};

exports.render = function(data) {
	return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${[...data.collections.all.filter(page => !page.data.sitemap || !page.data.sitemap.ignore), {
		url: "/resume.html",
		date: new Date()
	},{
		url: "/resume-en.html",
		date: new Date()
	}].map(page => `<url>
			<loc>${data.site.url}${page.url}</loc>
			<lastmod>${page.date.toISOString()}</lastmod>
		</url>`).join("")}
</urlset>`;
};
