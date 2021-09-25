const PostMeta  = require("./post-metas.11ty.js")
const markdownIt = require("markdown-it")

exports.data = {
	layout: "default",
	class: "post"
};

exports.render = function(data) {
	return `
	<div class="post full">
		${PostMeta({ site: data.site, post: data.page, tags: data.tags, categories: data.categories })}
		<div>
			<h2 class="title">${ data.title }</h2>
			<div class="excerpt">
			${ markdownIt({ html: true }).render(data.page.excerpt) }
			</div>
		</div>
		<div id="content">${ data.content.slice(data.content.indexOf('${EXCERPT_SEPARATOR}') + '${EXCERPT_SEPARATOR}'.length) }</div>
	</div>
`
}
