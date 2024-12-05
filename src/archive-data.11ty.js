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
	<h1>Archive "<u>${data.archive}</u>"</h1>
	<section id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post">
			${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags }) }
			<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }"><h1 class="title">${ post.data.title }</h1></a>
		</article>
	`).join("")}`;
};
