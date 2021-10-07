const { JSDOM } = require("jsdom")
const { render } = require("./_includes/redirect.11ty.js")

const virtualDOM = new JSDOM()
const window = virtualDOM.window
const { document } = window

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
		"title": data.site.name,
		"home_page_url": data.site.url,
		"feed_url": data.site.url + "/feed.json",
		"description": data.site.description,
		"author": {
			"name": data.site.author.name,
			"url": data.site.url
		},
		"items": data.collections.posts.map(post => {
			return {
				"id": post.id,
				"url": `${data.site.url}${post.url}`,
				"title": post.data.title,
				"updated": post.date
			}
		})
	})
}
