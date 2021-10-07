exports.render = function(data) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${ data.title === "Home" ? data.site.name : `${data.headTitle || data.title} | ${data.site.name}` }</title>
		<link rel="icon" href="/favicon.ico">
		<link rel="stylesheet" type="text/css" href="/main.bundle.css">
		<link rel="manifest" href="/manifest.webmanifest">
		<link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.webp">
		<link rel="icon" type="image/webp" sizes="32x32" href="/image/favicon-32x32.webp">
		<link rel="icon" type="image/webp" sizes="16x16" href="/image/favicon-16x16.webp">
		<link rel="mask-icon" href="/image/safari-pinned-tab.svg" color="#141a2d">
		<link rel="alternate" type="application/rss+xml" title="${ data.site.name }" href="/feed.xml">
		<link rel="alternate" type="application/json" title="${ data.site.name }" href="/feed.json">
		<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
		<link type="text/plain" rel="author" href="/humans.txt">
		<meta name="msapplication-TileColor" content="#141a2d">
		<meta name="theme-color" content="#353f5b">
		${data.description ? `<meta content="${ data.description }" property="description">` : `<meta content="${ data.site.description }" property="description">`}
		<meta content="${ [...(data.tags || []), ...data.site.keywords].join(", ") }" property="keywords">
		${data.page.excerpt ? `
			<meta content="Article" property="article:section">
			<meta content="https://thoughtsunificator.me" property="article:author">
			<meta content="${ data.page.date.toISOString() }" property="article:published_time">
			${data.tags ? data.tags.map(tag => `<meta content="${ tag }" property="article:tag">`).join("") : ""}
		` : ``}
		<script type="application/ld+json">
		{
			"@context":"http://schema.org",
			"@type": "Organization",
			"@id": "${ data.site.name }",
			"name": "${ data.site.name }",
			"url": "${ data.site.url }",
			"logo": {
				"@type": "ImageObject",
				"url": "${data.site.url}/image/me.webp",
				"height": 656,
				"width": 1121
			}
		}
		</script>
		<script type="application/ld+json" id="website-json-ld">
		{
				"@context":"http://schema.org",
				"@type":"WebSite",
				"name":"thoughtsunificator.me",
				"url":"https://thoughtsunificator.me"
		}
		</script>
		<script type="application/ld+json" id="social-json-ld">
		{
				"@context":"http://schema.org",
				"@type":"Organization",
				"name":"thoughtsunificator.me",
				"url":"https://thoughtsunificator.me",
				"sameAs":[
					"https://github.com/thoughtsunificator",
					"https://www.npmjs.com/~thoughtsunificator",
					"https://play.google.com/store/apps/developer?id=thoughtsunificator",
					"https://addons.mozilla.org/en-US/firefox/user/15968837",
					"https://twitter.com/thoughtsunifier",
					"https://www.instagram.com/romainlebesle/",
					"https://romain-lebesle.fr",
					"https://openuserjs.org/users/thoughtsunificator",
					"https://www.youtube.com/channel/UCpLQLDuSOwx74AdwPE5CGDA",
					"https://userstyles.org/users/1256582",
					"https://greasyfork.org/en/users/257151-thoughtsunificator",
					"https://www.linkedin.com/in/romain-lebesle"
				]
		}
		</script>
		<meta content="${ data.site.name }" property="og:site_name">
		<meta property="og:image" content="${data.cover ? `/image/cover/${data.cover.filename}` : "/image/cover.webp"}" />
		${data.page.excerpt ? `<meta content="article" property="og:type">` : `<meta content="website" property="og:type">`}
		<meta content="${ data.page.name === "Home" ? data.site.name : `${data.title} &middot; ${data.site.name}` }" property="og:title">
		${data.description ? `<meta content="${ data.description }" property="og:description">` : `<meta content="${ data.site.description }" property="og:description">`}
		${data.page.url ? `<meta content="${ data.site.url }${ data.page.url }" property="og:url">` : ``}
		${data.head || ""}
	</head>
	<body class="wrap${data.class ? ` page-${data.class}` : ""}">
		<header id="header">
			<h1>${ data.site.tagline }</h1>
			<nav>
				${data.site.menu.map(item => `<a ${ (item.url === data.page.url || item.title === "Home" && data.title === "Home") ? `class="active" ` : ""}href="${ item.url }">${ item.title }</a>`).join("")}
			</nav>
		</header>
		<main id="main">
			${ data.content }
		</main>
		<footer id="footer">
			<small>Built using <a target="_blank" href="https://www.11ty.dev/">Eleventy</a></small>
			<small class="copyright">© <a rel="author" target="_blank" href="https://romain-lebesle.fr">Romain Lebesle</a></small>
			<div class="icons">
				<a title="Twitter" target="_blank" rel="noopener" href="https://twitter.com/thoughtsunifier"><img width="32" alt="Twitter Profile" src="/image/twitter.svg"></a>
				<a title="Youtube" target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCpLQLDuSOwx74AdwPE5CGDA"><img width="32" alt="YouTube Channel" src="/image/youtube.svg"></a>
				<a title="Github" target="_blank" rel="noopener" href="https://github.com/thoughtsunificator"><img width="32" alt="View source code on Github" src="/image/github.svg"></a>
			</div>
		</footer>
	</body>
</html>`
}
