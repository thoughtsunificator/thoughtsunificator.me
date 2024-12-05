export const data = {
	layout: "default",
};

export function render(data) {
	return `
<h1>${data.title}</h1>
<div>
	${ data.content }
</div>
`
}
