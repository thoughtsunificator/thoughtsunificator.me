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
		<h3><a class="title" ${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a> ${post.data.redirect_to ? "🔗" : ""}</h3>
		<div class="metas">
			<small><time datetime="${new Date(post.date).toISOString()}">${new Intl.DateTimeFormat('en-GB', { month: "long", day: 'numeric' , year: 'numeric',}).format(post.date)}</time></small>
		</div>
		</article>
	`).join("")}
</div>`;
};
