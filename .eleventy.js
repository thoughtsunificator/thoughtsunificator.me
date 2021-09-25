const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = config => {

	config.addPlugin(syntaxHighlight)

	config.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_separator: "<!--more-->"
	});

	const markdownIt = new require('markdown-it')({
		typographer: true,
		linkify: true,
		html: true
	});

	markdownIt.linkify.set({ fuzzyLink: false });

	const markdownItAnchor = require('markdown-it-anchor');
	markdownIt.use(markdownItAnchor);

	config.setLibrary('md', markdownIt);

	config.addPlugin(require('eleventy-plugin-nesting-toc'), {
		tags: ['h3', 'h4', 'h5'],
		ul: false
	});

	config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
	config.addPlugin(require("@11ty/eleventy-plugin-rss"));

	config.addPassthroughCopy({ public: './' });

	config.setBrowserSyncConfig({
		files: ['dist/**/*'],
		injectChanges: false, // force reload instead of live-inject
		ghostMode: false, // do not mirror clicks, etc.
		codeSync: false // turn off any reload or live-inject
	});

	config.setDataDeepMerge(true);

	return {
		pathPrefix: require('./src/_data/site.json').baseUrl,
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
