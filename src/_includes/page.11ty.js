exports.data = {
	layout: "default",
};

exports.render = function(data) {
	return `
<h2>${data.title}</h2>
<div class="page">
	${ data.content }
</div>
`
}
