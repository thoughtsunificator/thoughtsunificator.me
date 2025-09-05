export default function(data) {
	return `
		<div class="metas">
			${!data.redirect_to ? `
			<div class="tags">
				${data.tags ? data.tags.filter(tag => tag !== "posts").map(tag => `<a class="tag" href="/tags/${tag.replace(" ", "-").toLowerCase()}/">#${tag}</a>`).join("") : ""}
			</div>` : "<div># External</div>" }
		</div>
		`
}
