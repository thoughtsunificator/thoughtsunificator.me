const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require("html-minifier")
const xmlmin = require("minify-xml")

module.exports = config => {


	config.addPlugin(syntaxHighlight)

	const markdownIt = new require('markdown-it')({
		typographer: true,
		linkify: true,
		html: true
	})

	markdownIt.linkify.set({ fuzzyLink: false })

	const markdownItAnchor = require('markdown-it-anchor')
	markdownIt.use(markdownItAnchor)
	markdownIt.use(require("markdown-it-external-anchor"), {
			domain: "thoughtsunificator.me",
			class: "external"
	});
	config.setLibrary('md', markdownIt)

	config.addPlugin(require('eleventy-plugin-nesting-toc'), {
		tags: ['h3', 'h4', 'h5'],
		ul: false
	})

	config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
	config.addPlugin(require("@11ty/eleventy-plugin-rss"))

	config.addPassthroughCopy({ public: './' })

	config.addTransform("minifier", function(content, outputPath) {
		if( outputPath && outputPath.endsWith(".html") ) {
			const config = {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				decodeEntities: true,
				html5: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeEmptyElements: false,
				sortAttributes: true,
				sortClassName: true,
				useShortDoctype: true
			}
			return htmlmin.minify(content, config)
		} else if (outputPath.endsWith(".json")) {
			return JSON.stringify(JSON.parse(content))
		} else if (outputPath && outputPath.endsWith(".xml")) {
			return xmlmin.minify(content)
		}
		return content
 })

	config.addCollection('tagsList', (collectionApi) => {
		const tagsSet = new Set()
		collectionApi.getAll().forEach((item) => {
			if (!item.data.tags) return
			item.data.tags
				.forEach((tag) => tagsSet.add(tag))
		})
		return [...tagsSet].sort((a, b) => b.localeCompare(a))
	})

	config.addCollection('archiveList', (collectionApi) => {
		const posts = collectionApi.getAll().filter(data => data.filePathStem.startsWith("/posts/") && !data.redirect_to)
		const groups = {}

		for(const post of posts) {
			const date = new Intl.DateTimeFormat('en-GB', { month: "long", year: 'numeric',}).format(post.date)
			if(!groups[date]) {
				groups[date] = []
			}
		}
		const keys = Object.keys(groups)
		for(const key of keys) {
			groups[key].sort((a, b) => new Date(a.date) - new Date(b.date))
			groups[key].reverse()
		}
		keys.sort((a, b) => {
			return new Date(a) - new Date(b)
		})
		keys.reverse()
		return keys
	})

	config.setBrowserSyncConfig({
		files: ['dist/**/*'],
		injectChanges: false, // force reload instead of live-inject
		ghostMode: false, // do not mirror clicks, etc.
		codeSync: false // turn off any reload or live-inject
	})

	config.setDataDeepMerge(true)

	return {
		pathPrefix: require('./src/_data/site.json').baseUrl,
		dir: {
			input: 'src',
			output: 'dist',
		},
	}
}
