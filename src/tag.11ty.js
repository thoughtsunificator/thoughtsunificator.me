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
	const posts = data.collections.posts.filter(post => post.data.tags && post.data.tags.includes(data.tag))
	return `
	<h1>Tag "<u>#${data.tag}</u>"</h1>
	<section id="posts">
	${posts.map((post, index) => `
		<article id="post-${index}" class="post">
		${PostMeta.bind(this)({ site: data.site, post, tags: post.data.tags }) }
			<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }"><h1 class="title">${ post.data.title }</h1></a>
		</article>
	`).join("")}`;
};
