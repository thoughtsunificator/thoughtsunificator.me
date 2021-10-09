const PostMeta  = require("./_includes/post/meta.11ty.js")

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
		<article id="post-${index}" class="post">
			${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags }) }
			<h3 class="title"><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h3>
		</article>
	`).join("")}
</article>`;
};
