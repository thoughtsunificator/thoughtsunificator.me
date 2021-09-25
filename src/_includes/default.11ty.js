exports.render = function(data) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${ data.page.name === "Home" ? data.site.name : `${data.title} &middot; ${data.site.name}` }</title>
		<link rel="icon" type="image/jpeg" href="/favicon.ico">
		<link rel="stylesheet" type="text/css" href="/main.bundle.css">
		<link rel="canonical" href="${data.site.url}${data.page.url}">
		<link rel="apple-touch-icon-precomposed" href="/image/apple-touch-icon-iphone-60x60.png">
		<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/image/apple-touch-icon-ipad-76x76.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/image/apple-touch-icon-iphone-retina-120x120.png">
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/image/apple-touch-icon-ipad-retina-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png">
		<link rel="manifest" href="/data.site.webmanifest">
		<link rel="mask-icon" href="/image/safari-pinned-tab.svg" color="#141a2d">
		<link rel="alternate" type="application/rss+xml" title="${ data.site.name }" href="/feed.xml" />
		<link rel="alternate" type="application/json" title="${ data.site.name }" href="/feed.json" />
		<link rel="search" type="application/opensearchdescription+xml" title="Search ${ data.site.name }" href="/search.xml"/>
		<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
		<link type="text/plain" rel="author" href="/humans.txt"/>
		<meta name="msapplication-TileColor" content="#141a2d">
		<meta name="theme-color" content="#353f5b">
		${data.description ? `<meta content="${ data.description }" property="description">` : `<meta content="${ data.site.description }" property="description">`}
		<meta content="${ [...(data.tags || []), ...data.site.keywords].join(", ") }" property="keywords">
		<meta content="${ data.site.name }" property="og:site_name">
		<meta content="${ data.page.name === "Home" ? data.site.name : `${data.title} &middot; ${data.site.name}` }" property="og:title">
		${data.page.title ? `<meta content="article" property="og:type">` : `<meta content="website" property="og:type">`}
		${data.description ? `<meta content="${ data.description }" property="og:description">` : `<meta content="${ data.site.description }" property="og:description">`}
		${data.page.url ? `<meta content="${ data.site.url }${ data.page.url }" property="og:url">` : ``}
		${data.page.date ? `
			<meta content="${ data.page.date }" property="article:published_time">
		` : ``}
		${data.categories ? `<meta content="${ data.categories[0] }" property="article:section">`: ""}
		${data.tags ? data.tags.map(tag => `<meta content="${ tag }" property="article:tag">`).join("") : ""}
	</head>
	<body class="wrap padding${data.class ? ` page-${data.class}` : ""}">
		<button id="toggle-header">Navigation</button>
		<header id="header">
			<h1>
				${ data.site.tagline }
			</h1>
			<nav>
				${data.site.menu.map(item => `<a class="${ item.url === data.page.url ? "active" : ""}" href="${ item.url }">${ item.title }</a>`).join("")}
			</nav>
		</header>
		<main id="main">
			${ data.content }
		</main>
		<footer id="footer">
			<small style="grid-row: 1;grid-column: 1;justify-self: start;">Built using <a href="https://www.11ty.dev/">Eleventy</a></small>
			<small class="copyright">© Romain Lebesle</small>
			<div class="icons">
				<a title="View source code on Github" target="_blank" rel="noopener" href="https://github.com/thoughtsunificator/thoughtsunificator.me"><img alt="View source code on Github" width="32" src="/image/github.svg"></a>
			</div>
		</footer>
	</body>
</html>`
}
