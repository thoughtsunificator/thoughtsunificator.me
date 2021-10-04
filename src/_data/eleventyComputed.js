module.exports = {
	permalink: data => data.page.filePathStem.startsWith("/post") ? `/${data.page.fileSlug}/` : data.permalink,
	title: data => {
		if(data.page.url.startsWith("/tags/") && data.page.url.length > "/tags/".length) {
			return `Tag #${data.tag}`
		} else if(data.page.url.startsWith("/categories/") && data.page.url.length > "/categories/".length) {
			return `Category "${data.category}"`
		} else if(data.page.url.startsWith("/archive/") && data.page.url.length > "/archive/".length) {
			return `Archive ${data.archive}`
		} else {
			return data.title
		}
	},
}
