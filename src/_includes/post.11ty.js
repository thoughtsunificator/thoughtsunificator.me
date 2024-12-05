import PostMeta from "./post/meta.11ty.js"
import Image from "@11ty/eleventy-img"

export const data = {
	layout: "default"
};

export function render(data) {
	return `
	<h1 class="title">${ data.title }</h1>
	<article class="post full">
		${PostMeta.bind(this)({ site: data.site, post: data.page, tags: data.tags })}
		<div id="post-content">${data.content}</div>
	</article>`
}
