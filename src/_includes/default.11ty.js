exports.render = function(data) {
	return `<!doctype html>
<html lang="en">
	<head>
	<!-- A real motherfucking head just like we planned, let see: -->
		<title>${ data.title === "Home" ? data.site.name : `${data.headTitle || data.title} | ${data.site.name}` }</title>
		<!-- Used mostly for emojis -->
		<meta charset="UTF-8">
		<!-- Because it sucks to read as if you're reading from ten feets away when in reality your smartphone is glued to your face -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Just a few millions of lines, mostly useless and pathetic "aesthetics" black magick kind of stuff -->
		<link rel="stylesheet" type="text/css" href="/main.css">
		<!-- Used for syntax highlighting inside posts -->
		<link rel="stylesheet" type="text/css" href="/okaida.css">
		<!-- https://w3c.github.io/manifest/ -->
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
