const markdownIt = require("markdown-it")

module.exports = function(data) {
	return `
	<div class="excerpt">
		${ markdownIt({ html: true }).render(data.excerpt) }
	</div>
	${data.cover ? `<div class="cover">
		<img src="/image/cover/${data.cover.filename}" alt="cover"${data.cover.attributes ? ` ${Object.keys(data.cover.attributes).map(attribute => `${attribute}=${data.cover.attributes[attribute]}`).join(" ")}` : ""}>
		</div>` : ""}
`
}
