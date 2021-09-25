exports.data = {
	layout: "default",
};

exports.render = function(data) {
	return `
<div class="page">
	<h1 class="page-title">${data.title}</h1>
	${ data.content }
</div>
`
}
