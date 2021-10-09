const PostMeta  = require("./_includes/post/meta.11ty.js")

exports.data = {
	layout: "default",
	pagination: {
		data: "collections.tagsList",
		size: 1,
		alias: "tag"
	},
	permalink: data => `/tags/${data.tag.replace(" ", "-").toLowerCase()}/index.html`,
};

exports.render = function(data) {
	const posts = data.collections.posts.filter(post => post.data.tags && post.data.tags.includes(data.tag))
	return `
	<h2>Tag "<u>#${data.tag}</u>"</h2>
	<article id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post">
		${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags }) }
			<h3 class="title"><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h3>
		</article>
	`).join("")}
</article>`;
};
