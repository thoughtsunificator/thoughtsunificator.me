import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { IdAttributePlugin } from "@11ty/eleventy"
import siteData from "./src/_data/site.js"


export default function(config) {

	config.addPlugin(syntaxHighlight)
	config.addPlugin(IdAttributePlugin)

	config.addPassthroughCopy({ public: './' })

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
		pathPrefix: siteData.baseUrl,
		dir: {
			input: 'src',
			output: 'dist',
		},
	}
}
