exports.render = function(data) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${ data.title === "Home" ? data.site.name : `${data.headTitle || data.title} | ${data.site.name}` }</title>
		<link rel="stylesheet" type="text/css" href="/main.bundle.css">
		<link rel="manifest" href="/manifest.webmanifest">
	</head>
	<body class="${data.class ? ` page-${data.class}` : ""}">
		<main id="main">
			${data.content}
		</main>
		<footer id="footer">
			<nav>
				${data.site.menu.map(item => `<a ${ (item.url === data.page.url || item.title === "Home" && data.title === "Home") ? `class="active" ` : ""}href="${ item.url }">${ item.title }</a>`).join("")}
			</nav>
			<span>Built using <a rel="noreferrer" target="_blank" href="https://www.11ty.dev/">Eleventy</a><br>Inspired by <a rel="noreferrer" target="_blank" href="http://motherfuckingwebsite.com">motherfuckingwebsite.com</a></span>
			<span class="tagline">${data.site.tagline}</span>
			<div class="icons">
				<a title="Github" target="_blank" rel="noopener" href="https://github.com/thoughtsunificator"><img width="32" alt="View source code on Github" src="/image/github.svg"></a>
			</div>
		</footer>
	</body>
</html>`
}
