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
	<section id="posts">
	${posts.map((post, index) => `
		<section id="post-${index}" class="post">
		<div><a class="title" ${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${post.data.redirect_to ? "#" : ""} ${ post.data.title }</a></div>
		</section>
	`).join("")}
</section>
`;
};
