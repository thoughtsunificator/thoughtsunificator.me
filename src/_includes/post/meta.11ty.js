module.exports = data => `
<div class="metas">
	<time class="meta post-date" datetime="${new Date(data.post.date).toISOString()}">📅 ${new Intl.DateTimeFormat('en-GB', { month: "long", day: 'numeric' , year: 'numeric',}).format(data.post.date)}</time>
	<div class="tags">
		Categories:
		<div class="list">
			${data.categories ? data.categories.map(category => `<a class="category" href="/categories/#${category.replace(" ", "-").toLowerCase()}">${category}</a>`).join(",") : ""}
		</div>
		Tags:
		<div class="list">
			${data.tags ? data.tags.filter(tag => tag !== "posts").map(tag => `<a class="tag" href="/tags/#${tag.replace(" ", "-").toLowerCase()}">#${tag}</a>`).join("") : ""}
		</div>
	</div>
</div>
`
