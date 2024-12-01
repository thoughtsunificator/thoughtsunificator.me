exports.data = {
	layout: "page",
	title: "Archive",
	permalink: "/archive/",
	description: "Post archives"
};

exports.render = function(data) {

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
			<h3 id="${key.replace(" ", "-").toLowerCase()}"><a href="/archive/${key.replace(" ", "-").toLowerCase()}/">${key}</a></h1>
			<div class="posts">
			${groups[key].map(post => `
				<h1><a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></h1>
			`).join("")}
			</div>
		</section>
	`).join("")}
</div>
`;
};
