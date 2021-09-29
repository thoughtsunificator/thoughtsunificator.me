const PostMeta  = require("./_includes/post/meta.11ty.js")
const PostExcerpt  = require("./_includes/post/excerpt.11ty.js")

exports.data = {
	layout: "default",
	title: "Home",
	permalink: "index.html",
	pagination: {
		data: "collections.posts",
		size: 10,
		reverse: true,
		alias: "posts"
	}
};

exports.render = function(data) {
	return `<div id="posts">
	${data.pagination.items.map(post => `
		<div class="post${post.data.redirect_to ? " link" : ""}">
			${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags, categories: post.data.categories })}
			<h2 class="title">${post.data.redirect_to ? "🔗 " : ""}<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h2>
			${!post.data.redirect_to ? `
			${PostExcerpt.bind(this)({ site: data.site, post, excerpt: post.data.page.excerpt, cover: post.data.cover })}
			<p class="keep-reading"><a href="${post.url}#content">Continue Reading →</a></p>
			` : ""}
		</div>
	`).join("")}
	<div class="pagination">
		${data.pagination.href.next ? `<a class="next" href="${data.pagination.href.next}">← Older</a>` : ""}
		${data.pagination.href.previous ? `<a class="prev" href="${ data.pagination.href.previous}">Newer →</a>` : ""}
	</div>
</div>

`;
};
