const PostMeta  = require("./_includes/post/meta.11ty.js")
const PostExcerpt  = require("./_includes/post/excerpt.11ty.js")

exports.data = {
	layout: "default",
	pagination: {
		data: "collections.archiveList",
		size: 1,
		alias: "archive"
	},
	permalink: data => `/archive/${data.archive.replace(" ", "-").toLowerCase()}/index.html`,
};

exports.render = function(data) {
	const posts = data.collections.posts.filter(post => new Intl.DateTimeFormat('en-GB', { month: "long", year: 'numeric',}).format(post.date) === data.archive)
	return `
	<h2>Archive "<u>${data.archive}</u>"</h2>
	<article id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post${post.data.redirect_to ? " link" : ""}">
			${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags, categories: post.data.categories })}
			<h2 class="title">${post.data.redirect_to ? "🔗 " : ""}<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h2>
			${!post.data.redirect_to ? `
			${PostExcerpt.bind(this)({ site: data.site, post, excerpt: post.data.page.excerpt, cover: post.data.cover })}
			<a class="keep-reading" href="${post.url}#content">Continue Reading →</a>
			` : ""}
		</article>
	`).join("")}
</article>
<script type="application/ld+json">
		{
				"@context": "http://schema.org",
				"@type": "ItemList",
				"name": "Archive ${data.archive}",
				"numberOfItems": ${posts.length},
				"itemListOrder": "Descending",
				"itemListElement": [
					${posts.map((post, index) => `
						{
							"@type": "Article",
							"@id": "${data.site.url}${ post.url }",
							"position": "${index + 1}",
							"name": "${post.data.title}",
							"mainEntityOfPage": {
								"@type": "WebPage",
								"@id": "${data.site.url}${ post.url }"
							},
							"url": "${data.site.url}${ post.url }",
							"headline": "${ post.data.description }",
							"description": "${ post.data.description }",
							"audience": "web developers and front-end developers",
							${post.data.cover ? `"image": {
								"@type": "ImageObject",
								"url": "${ data.site.url }/image/cover/${ post.data.cover.filename }"
							},` : ""}
							"dateCreated": "${ post.date.toISOString() }",
							"datePublished": "${ post.date.toISOString() }",
							"dateModified": "${ post.date.toISOString() }",
							"articleSection": "Blog",
							"author": {
								"@type": "Person",
								"name": "Romain Lebesle (thoughtsunificator)",
								"image": {
									"@type": "ImageObject",
									"url": "${data.site.url}/image/me.webp",
									"height": 656,
									"width": 1121
								},
								"url": "${ data.site.url }"
							},
							"publisher": {
								"@id": "${ data.site.name }"
							}
						}
					`)}
				]

		}
</script>`;
};
