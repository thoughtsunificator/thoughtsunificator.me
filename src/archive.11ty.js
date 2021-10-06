exports.data = {
	layout: "page",
	class: "archive",
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

	return `<div id="archive">
	${keys.map((key, index) => `
		<section id="archive-${index}" class="archive">
			<h3 id="${key.replace(" ", "-").toLowerCase()}"><a href="/archive/${key.replace(" ", "-").toLowerCase()}/">${key}</a></h3>
			<div class="posts">
			${groups[key].map(post => `
				<div>${post.data.redirect_to ? "🔗 " : ""}<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a></div>
			`).join("")}
			</div>
		</section>
	`).join("")}
</div>
<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "ItemList",
	"name": "Archive",
	"itemListOrder": "https://schema.org/ItemListOrderDescending",
	"itemListElement": ${JSON.stringify(keys.map((key, index) => ({
		"@id": key,
		"@type": "ListItem",
		"position": index + 1,
		"url": `${data.site.url}/archive/${key.replace(" ", "-").toLowerCase()}`
	})), null, "\t")}
}
</script>
`;
};
