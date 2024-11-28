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
	<h1>Recent posts</h1>
	<div id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post">
		<a class="title" ${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }"><h1>${post.data.redirect_to ? "🔗" : ""} ${ post.data.title }</h1></a>
		<div class="metas">
			<small><time datetime="${new Date(post.date).toISOString()}">${new Intl.DateTimeFormat('en-GB', { month: "long", day: 'numeric' , year: 'numeric',}).format(post.date)}</time></small>
		</div>
		</article>
	`).join("")}
</div>`;
};
