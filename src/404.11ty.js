exports.data = {
	layout: "page",
	title: "404: Page not found",
	permalink: "404.html",
	description: "404: Page not found",
	robots: {
		ignore: true
	},
	sitemap: {
		ignore: true
	}
}

exports.render = function(data) {
	return `<p class="lead">Sorry, either that URL has been changed or you are attempting to reach something that doesn't exist. I suppose you could go to the <a href="${ data.site.baseUrl }">home page</a> to try finding it from there or just give up completely. </p>`
}
