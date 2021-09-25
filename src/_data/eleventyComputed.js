module.exports = {
	permalink: data => data.page.filePathStem.startsWith("/post") ? `/${data.page.fileSlug}/` : data.permalink
}
