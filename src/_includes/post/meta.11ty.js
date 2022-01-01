module.exports = data => `
<div class="metas">
	${!data.redirect_to ? `
	<time datetime="${new Date(data.post.date).toISOString()}">${new Intl.DateTimeFormat('en-GB', { month: "long", day: 'numeric' , year: 'numeric',}).format(data.post.date)}</time>
	<div class="tags">
		${data.tags ? data.tags.filter(tag => tag !== "posts").map(tag => `<a class="tag" href="/tags/${tag.replace(" ", "-").toLowerCase()}/">#${tag}</a>`).join("") : ""}
	</div>` : "<div>External</div>" }
</div>
`
