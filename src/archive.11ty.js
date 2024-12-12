export const data = {
	layout: "page",
	title: "Archive",
	permalink: "/archive/",
	description: "Post archives"
};

export function render(data) {

	const groups = {}

	const posts = data.collections.posts.filter(post => post.data.tags)

	for(const post of posts) {
		const date = new Intl.DateTimeFormat('en-GB', { month: "long", year: 'numeric',}).format(post.date)
		if(!groups[date]) {
			groups[date] = []
		}
		groups[date].push(post)
	}
	const keys = Object.keys(groups)
	for(const key of keys) {
		groups[key].sort((a, b) => new Date(a.date) - new Date(b.date))
		groups[key].reverse()
	}
	keys.sort((a, b) => {
		return new Date(a) - new Date(b)
	})
	keys.reverse()

	return `<div id="archive">
	${keys.map((key, index) => `
		<section id="archive-${index}" class="archive">
			<b id="${key.replace(" ", "-").toLowerCase()}"><a href="/archive/${key.replace(" ", "-").toLowerCase()}/">${key}</a></b>
			<div class="posts">
			${groups[key].map(post => `
				<article><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></article>
			`).join("")}
			</div>
		</section>
	`).join("")}
</div>
`;
};
