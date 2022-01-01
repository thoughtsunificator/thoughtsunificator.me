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
	<body class="wrap${data.class ? ` page-${data.class}` : ""}">
		<header id="header">
			<h1>${data.site.tagline}</h1>
			<nav>
				${data.site.menu.map(item => `<a ${ (item.url === data.page.url || item.title === "Home" && data.title === "Home") ? `class="active" ` : ""}href="${ item.url }">${ item.title }</a>`).join("")}
			</nav>
		</header>
		<main id="main">
			${data.content}
		</main>
		<footer id="footer">
			<small>Built using <a target="_blank" href="https://www.11ty.dev/">Eleventy</a></small>
			<small class="copyright">© <a rel="author" target="_blank" href="https://romain-lebesle.fr">Romain Lebesle</a></small>
			<div class="icons">
				<a title="Twitter" target="_blank" rel="noopener" href="https://twitter.com/thoughtsunifier"><img width="32" alt="Twitter Profile" src="/image/twitter.svg"></a>
				<a title="Github" target="_blank" rel="noopener" href="https://github.com/thoughtsunificator"><img width="32" alt="View source code on Github" src="/image/github.svg"></a>
			</div>
		</footer>
	</body>
</html>`
}
