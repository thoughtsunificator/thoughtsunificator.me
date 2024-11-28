exports.data = {
	layout: "default",
};

exports.render = function(data) {
	return `
<h1>${data.title}</h1>
<div>
	${ data.content }
</div>
`
}
