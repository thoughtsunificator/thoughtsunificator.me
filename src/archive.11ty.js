exports.data = {
	layout: "page",
	title: "Archive",
	permalink: "/archive/",
	description: "Post archives"
};

exports.render = function(data) {

	const groups = {}

	for(const post of data.collections.posts) {
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

	return `<div id="archive" style="display: grid; grid-gap: 20px;">
	${keys.map(key => `
		<div>
			<h3 id="${key.replace(" ", "-").toLowerCase()}"><small>${key}</small></h3>
			${groups[key].map(post => `
				${post.data.redirect_to ? "🔗 " : ""}<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a>
			`).join("<br>")}
		</div>
	`).join("")}
</div>`;
};
