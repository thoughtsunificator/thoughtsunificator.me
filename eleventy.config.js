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
