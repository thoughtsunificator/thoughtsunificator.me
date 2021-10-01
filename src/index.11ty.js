const PostMeta  = require("./_includes/post/meta.11ty.js")
const PostExcerpt  = require("./_includes/post/excerpt.11ty.js")

exports.data = {
	layout: "default",
	title: "Home",
	permalink: data => data.pagination.pageNumber === 0 ? "index.html" : `posts/${ data.pagination.pageNumber + 1 }`,
	pagination: {
		data: "collections.posts",
		size: 3,
		reverse: true,
		alias: "posts"
	}
};

exports.render = function(data) {
	return `
	<h2>${data.pagination.pageNumber === 0 ? "Recent posts" : `Page ${data.pagination.pageNumber + 1}`}</h2>
	<article id="posts">
	${data.pagination.items.map((post, index) => `
		<article id="post-${index}" class="post${post.data.redirect_to ? " link" : ""}">
			${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags, categories: post.data.categories })}
			<h2 class="title">${post.data.redirect_to ? "🔗 " : ""}<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h2>
			${!post.data.redirect_to ? `
			${PostExcerpt.bind(this)({ site: data.site, post, excerpt: post.data.page.excerpt, cover: post.data.cover })}
			<a class="keep-reading" href="${post.url}#content">Continue Reading →</a>
			` : ""}
		</article>
	`).join("")}
	<div class="pagination">
		${data.pagination.href.previous ? `<a class="previous" href="${ data.pagination.href.previous}">← Previous</a>` : ""}
		<div class="indicator">${data.pagination.pageNumber + 1}</div>
		${data.pagination.href.next ? `<a class="next" href="${data.pagination.href.next}">Next →</a>` : ""}
	</div>
</article>
<script type="application/ld+json">
		{
				"@context": "http://schema.org",
				"@type": "ItemList",
				"name": "Recent Articles",
				"numberOfItems": ${data.pagination.items.length},
				"itemListOrder": "Descending",
				"itemListElement": [
					${data.pagination.items.map(post => `
						{
							"@type": "Article",
							"@id": "${data.site.url}${ post.url }",
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
									"url": "${data.site.url}/image/me.jpg",
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
