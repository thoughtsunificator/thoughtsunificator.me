import removeMarkdown from "markdown-to-text"

export const data = {
	eleventyExcludeFromCollections: true,
	permalink: "/feed.json",
	robots: {
		ignore: true
	}
}

export function render(data) {
	return JSON.stringify({
		"version": "https://jsonfeed.org/version/1",
		"title": data.site.name,
		"home_page_url": data.site.url,
		"feed_url": data.site.url + "/feed.json",
		"description": data.site.description,
		"author": {
			"name": data.site.author.name,
			"url": data.site.url
		},
		"items": data.collections.posts.map(post => {
			const item = {
				"id": post.id,
				"url": `${data.site.url}${post.url}`,
				"title": post.data.title,
			}
			return item
		})
	})
}
