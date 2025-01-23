import PostMeta from "./_includes/post/meta.11ty.js"

export const data = {
	layout: "default",
	pagination: {
		data: "collections.archiveList",
		size: 1,
		alias: "archive"
	},
	permalink: data => `/archive/${data.archive.replace(" ", "-").toLowerCase()}/index.html`,
};

export function render(data) {
	const posts = data.collections.posts.filter(post => new Intl.DateTimeFormat('en-GB', { month: "long", year: 'numeric',}).format(post.date) === data.archive)
	return `
	<section id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post">
			<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a>
		</article>
	`).join("")}`;
};
