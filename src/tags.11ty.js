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
	delete groups["posts"]
	const keys = Object.keys(groups)
	for(const key of keys) {
		groups[key].sort((a, b) => new Date(a.date) - new Date(b.date))
		groups[key].reverse()
	}
	keys.sort()

	return `<div id="tags">
	${keys.map((key, index) => `
		<section id="tag-${index}" class="tag">
			<h3 id="${key.replace(" ", "-").toLowerCase()}"><a href="/tags/${key.replace(" ", "-").toLowerCase()}/">#${key}</a></h3>
			<div class="posts">
			${groups[key].map(post => `
				<article><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }"><h1>${ post.data.title }</h1></a></article>
			`).join("")}
			</div>
		</section>
	`).join("")}
</div>`;
};
