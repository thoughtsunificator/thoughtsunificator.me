const removeMarkdown = require("markdown-to-text").default

exports.data = {
	eleventyExcludeFromCollections: true,
	permalink: "/feed.xml",
	robots: {
		ignore: true
	}
}

exports.render = function(data) {
	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>${ data.site.name }</title>
	<subtitle>${ data.site.description }</subtitle>
	<link href="${data.site.url}/feed.xml" rel="self"/>
	<link href="${data.site.url}"/>
	<id>${data.site.feed.id}</id>
	<author>
		<name>${data.site.author.name}</name>
	</author>
	${data.collections.posts.map(post => {
		return `<entry>
			<id>${data.site.url}${post.url}</id>
			<link href="${data.site.url}${post.url}"/>
			<title>${ post.data.title }</title>
			<updated>${post.date.toISOString()}</updated>
		</entry>`
	}).join("")}
</feed>`
}
