import PostMeta from "./_includes/post/meta.11ty.js"

export const data = {
	layout: "default",
	title: "Home",
	permalink: "index.html"
}

export function render(data) {
	const posts = data.collections.posts
	posts.reverse()
	return `
	<h1>Recent posts</h1>
	<section id="posts">
	${posts.map((post, index) => `
		<section id="post-${index}" class="post">
		<h3><time datetime="${new Date(post.date).toISOString()}">${new Intl.DateTimeFormat('en-GB', { month: "long", day: 'numeric' , year: 'numeric',}).format(post.date)}</time></h3>
		<a class="title" ${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }"><h1>${post.data.redirect_to ? "🔗" : ""} ${ post.data.title }</h1></a>
		</section>
	`).join("")}
</section>`;
};
