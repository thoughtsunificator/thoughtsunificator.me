const PostMeta  = require("./post/meta.11ty.js")
const PostExcerpt  = require("./post/excerpt.11ty.js")
const Image = require("@11ty/eleventy-img")

exports.data = {
	layout: "default",
	class: "post"
};

exports.render = async function(data) {
	return `
	<div class="post full">
		${PostMeta.bind(this)({ site: data.site, post: data.page, tags: data.tags, categories: data.categories })}
		<h2 class="title">${ data.title }</h2>
		${PostExcerpt.bind(this)({ site: data.site, excerpt: data.page.excerpt, cover: data.cover })}
	<div id="content">${ data.content.slice(data.content.indexOf('${EXCERPT_SEPARATOR}') + '${EXCERPT_SEPARATOR}'.length) }</div>
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "Article",
			"@id": "${data.site.url}${ data.page.url }",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "${data.site.url}${ data.page.url }"
			},
			"url": "${data.site.url}${ data.page.url }",
			"headline": "${ data.description }",
			"description": "${ data.title }",
			"audience": "web developers and front-end developers",
			${data.cover ? `"image": {
				"@type": "ImageObject",
				"url": "${ data.site.url }/image/cover/${ data.cover.filename }"
			},` : ""}
			"dateCreated": "${ data.page.date.toISOString() }",
			"datePublished": "${ data.page.date.toISOString() }",
			"dateModified": "${ data.page.date.toISOString() }",
			"articleSection": "Blog",
			"author": {
				"@type": "Person",
				"name": "Romain Lebesle (thoughtsunificator)",
				"image": {
					"@type": "ImageObject",
					"url": "${data.site.url}/image/me.jpg",
					"height": 656,
					"width": 1121
				},
				"url": "${ data.site.url }"
			},
			"publisher": {
				"@id": "${ data.site.name }",
			}
		}
	</script>
`
}
