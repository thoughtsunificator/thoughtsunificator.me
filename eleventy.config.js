import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
// For some reason one cannot override/supplement options that are passed to markdown-it by eleventy, one needs to re-import the module and override the default markdown library entirely.
import markdownIt from "markdown-it"
import { IdAttributePlugin } from "@11ty/eleventy"
import siteData from "./src/_data/site.js"


export default function(config) {

	config.addPlugin(syntaxHighlight)
	// Add Id attribute to markdown tags
	config.addPlugin(IdAttributePlugin)

	config.addPassthroughCopy({ public: './' })
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	config.setLibrary("md", markdownIt(options));

	// Shuffle everything that has a date
	// The intent is to erase the concept of date
	config.addDateParsing(function(dateValue) {
		const hypotheticalDate = new Date("10000/01/01")
		const hypotheticalDateTime = hypotheticalDate.getTime()
		const pseudoRandom = Math.random
		const pseudoRandomNumber = Math.round(pseudoRandom() * hypotheticalDateTime)
		return new Date(pseudoRandomNumber)
	});

	// Create a tag collections from all the posts
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
