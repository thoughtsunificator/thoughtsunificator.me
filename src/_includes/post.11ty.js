const PostMeta  = require("./post/meta.11ty.js")
const Image = require("@11ty/eleventy-img")

exports.data = {
	layout: "default"
};

exports.render = function(data) {
	return `
	<h2 class="title">${ data.title }</h2>
	<article class="post full">
		${PostMeta.bind(this)({ site: data.site, post: data.page, tags: data.tags })}
		<div id="post-content">${data.content}</div>
	</article>`
}
