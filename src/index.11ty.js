import PostMeta from "./_includes/post/meta.11ty.js"

export const data = {
	layout: "default",
	title: "Home",
	permalink: "index.html"
}

export function render(data) {
	const posts = data.collections.posts
	return `
	<div id="posts">
	${posts.map((post, index) => `
		<div><a class="title" ${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${post.data.redirect_to ? post.data.redirect_to : post.url}">${post.data.redirect_to ? post.data.redirect_to : post.data.title}</a></div>
	`).join("")}
</div>
`;
};
