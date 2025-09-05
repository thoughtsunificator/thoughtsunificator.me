export default {
	permalink: data => data.page.filePathStem.startsWith("/post") ? `/${data.page.fileSlug}/` : data.permalink,
	title: data => {
		if(data.page.url.startsWith("/tags/") && data.page.url.length > "/tags/".length) {
			return `Tag #${data.tag}`
		} else {
			return data.title
		}
	},
}
