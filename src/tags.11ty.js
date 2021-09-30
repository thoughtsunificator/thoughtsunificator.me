exports.data = {
	layout: "page",
	permalink: "/tags/",
	title: "Tags",
	description: "Tags"
};

exports.render = function(data) {

	const groups = {}

	for(const post of data.collections.posts) {
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
	${keys.map(key => `
		<div>
			<h3 id="${key.replace(" ", "-").toLowerCase()}"><small>#${key}</small></h3>
			${groups[key].map(post => `
				${post.data.redirect_to ? "🔗 " : ""}<a${post.data.redirect_to ? ` target="_blank" rel="noopener"` : ""} href="${ post.url }">${ post.data.title }</a>
			`).join("<br>")}
		</div>
	`).join("")}
</div>
<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "ItemList",
	"itemListElement": ${JSON.stringify(keys)},
	"itemListOrder": "https://schema.org/ItemListOrderDescending",
	"name": "List of categories"
}
</script>
`;
};
