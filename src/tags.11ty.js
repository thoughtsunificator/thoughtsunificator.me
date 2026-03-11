export const data = {
	layout: "page",
	permalink: "/tags/",
	title: "Tags",
	description: "Tags"
};

export function render(data) {
	const groups = {}
	const posts = data.collections.posts.filter(post => post.data.tags)
	for(const post of posts) {
		for(const tag of post.data.tags) {
			if(!groups[tag]) {
				groups[tag] = []
			}
			groups[tag].push(post)
		}
	}
	return `<div id="tags">
	${data.collections.tagsList.map((key, index) => `
		<p id="tag-${index}" class="tag">
			<a id="${key.replace(" ", "-").toLowerCase()}" href="/tags/${key.replace(" ", "-").toLowerCase()}/"><b>#${key}</b></a>
			<div class="posts">
			${groups[key].map(post => `
				<div><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</div></a>
			`).join("")}
			</div>
		</p>
	`).join("")}
</div>`;
};
