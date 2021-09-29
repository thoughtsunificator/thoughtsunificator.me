exports.data = {
	layout: "default",
};

exports.render = function(data) {
	return `
<div class="page">
	<h2 class="page-title">${data.title}</h2>
	${ data.content }
</div>
`
}
