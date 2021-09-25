exports.data = {
	eleventyExcludeFromCollections: true,
	permalink: "/feed.json",
	robots: {
		ignore: true
	}
}

exports.render = function(data) {
	return JSON.stringify({
		"version": "https://jsonfeed.org/version/1",
		"title": "{{ site.name }}",
		"home_page_url": data.site.url,
		"feed_url": data.site.url + "/feed/feed.json",
		"description": data.site.description,
		"author": {
			"name": data.site.author.name,
			"url": data.site.url
		},
		"items": [
			data.collections.posts.map(post => ({
				"id": data.site.url + "/feed/feed.json",
				"url": data.site.url + "/feed/feed.json",
				"title": post.data.title,
				"content_html": post.templateContent,
				"date_published": post.date
			})).join("")
		]
	})
}
