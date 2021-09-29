const { JSDOM } = require("jsdom")
const { render } = require("./_includes/redirect.11ty.js")

const virtualDOM = new JSDOM()
const window = virtualDOM.window
const { document } = window

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
		let div = document.createElement("div")
		div.textContent = post.data.redirect_to ? render(post.data) : post.templateContent
		return `<entry>
			<title>${ post.data.title }</title>
			<link href="${data.site.url}${post.url}"/>
			<updated>${post.date}</updated>
			<id>${data.site.url}${post.url}</id>
			<content type="html">${div.innerHTML}</content>
		</entry>`
	}).join("")}
</feed>`
}
