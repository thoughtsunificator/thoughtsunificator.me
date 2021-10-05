module.exports = data => `
<div class="metas">
	<time datetime="${new Date(data.post.date).toISOString()}">📅 ${new Intl.DateTimeFormat('en-GB', { month: "long", day: 'numeric' , year: 'numeric',}).format(data.post.date)}</time>
	<div>
		<section class="tags">
			<h4>Tags</h4>
			<div class="list">
				${data.tags ? data.tags.filter(tag => tag !== "posts").map(tag => `<a class="tag" href="/tags/${tag.replace(" ", "-").toLowerCase()}/">#${tag}</a>`).join("") : ""}
			</div>
		</section>
		<section class="categories">
			<h4>Categories</h4>
			<div class="list">
				${data.categories ? data.categories.map(category => `<a class="category" href="/categories/${category.replace(" ", "-").toLowerCase()}/">${category}</a>`).join("") : ""}
			</div>
		</section>
	</div>
</div>
`
