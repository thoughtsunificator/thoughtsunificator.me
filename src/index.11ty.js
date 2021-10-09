const PostMeta  = require("./_includes/post/meta.11ty.js")

exports.data = {
	layout: "default",
	title: "Home",
	permalink: "index.html"
};

exports.render = function(data) {
	const posts = data.collections.posts
	posts.reverse()
	return `
	<h2>Recent posts</h2>
	<div id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post">
			<h3 class="title"><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h3>
			${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags, redirect_to: post.data.redirect_to })}
		</article>
	`).join("")}
</div>`;
};
