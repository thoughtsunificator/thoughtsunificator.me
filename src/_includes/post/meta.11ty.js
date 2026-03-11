export default function(data) {
	return `
		<div class="metas">
			${!data.redirect_to ? `
				${data.tags ? data.tags.filter(tag => tag !== "posts").map(tag => `<div><a class="tag" href="/tags/${tag.replace(" ", "-").toLowerCase()}/">#${tag}</a></div>`).join("") : ""}
			` : "<div># External</div>" }
		</div>
		`
}
