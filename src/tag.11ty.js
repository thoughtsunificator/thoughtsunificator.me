import PostMeta from "./_includes/post/meta.11ty.js"

export const data = {
	layout: "default",
	pagination: {
		data: "collections.tagsList",
		size: 1,
		alias: "tag"
	},
	permalink: data => `/tags/${data.tag.replace(" ", "-").toLowerCase()}/index.html`,
};

export function render(data) {
	const posts = data.collections.posts.filter(post => post.data.tags && post.data.tags.includes(data.tag) && post.data.type !== "idea")
	return `
	<div id="posts">
	${posts.map((post, index) => `
		<div id="post-${index}" class="post">
			<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a>
		</div>
	`).join("")}
	</div>
	`;
};
