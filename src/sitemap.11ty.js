// Source: https://thefrugaldeveloper.life/posts/building-an-eleventy-boilerplate-pt-2

exports.data = {
	permalink: "/sitemap.xml",
	eleventyExcludeFromCollections: true,
	robots: {
		ignore: true
	}
};

exports.render = function(data) {
	let all = data.collections.all.filter(page => !page.data.sitemap || !page.data.sitemap.ignore)
	all = all.concat(data.collections.tagsList.filter(tag => !all.find(page => page.url === `/tags/${tag.replace(" ", "-").toLowerCase()}/`)).map(tag => ({ date: new Date(), url: `/tags/${tag.replace(" ", "-").toLowerCase()}` })))
	all = all.concat(data.collections.archiveList.filter(archive => !all.find(page => page.url === `/archive/${archive.replace(" ", "-").toLowerCase()}/`)).map(archive => ({ date: new Date(), url: `/archive/${archive.replace(" ", "-").toLowerCase()}` })))
	return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${[...all, {
		url: "/resume.html",
		date: new Date()
	},{
		url: "/resume-en.html",
		date: new Date()
	},{
		url: "/timeline.html",
		date: new Date()
	},{
		url: "/timeline-en.html",
		date: new Date()
	}].map(page => `<url>
			<loc>${data.site.url}${page.url}</loc>
			<lastmod>${page.date.toISOString()}</lastmod>
		</url>`).join("")}
</urlset>`;
};
