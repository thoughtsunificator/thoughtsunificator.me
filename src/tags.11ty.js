exports.data = {
	layout: "page",
	class: "categories",
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
			<h3 id="${key.replace(" ", "-").toLowerCase()}"><a href="/tags/${key.replace(" ", "-").toLowerCase()}/">#${key}</a></h3>
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
	"name": "List of tags",
	"itemListOrder": "https://schema.org/ItemListOrderDescending",
	"itemListElement": ${JSON.stringify(keys.map((key, index) => ({
		"@id": key,
		"@type": "ListItem",
		"position": index + 1,
		"url": `${data.site.url}/tags/${key.replace(" ", "-").toLowerCase()}`
	})), null, "\t")}
}
</script>
`;
};
