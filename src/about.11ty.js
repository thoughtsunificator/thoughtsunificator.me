export const data = {
	layout: "page",
	title: "About Romain Lebesle",
	headTitle: "About",
	permalink: "/about/",
	description: "About"
}

export function render(data) {
	return `<div class="intro">
	<div>
	<section>
	<div>I am <a href="/pgp_key.txt">D9CC8358645231E616E1F3DA<b>C11B5CF0A7856B6D</b></a>.<br>An open 🧙 who lives aspiring to master D2D, DX and UX mostly within the Web and its ecosystems.</div><p>I love Unix and OSS and have released and maintain <a href="https://www.npmjs.com/~thoughtsunificator">several Node.js packages</a> and work on <a href="https://github.com/thoughtsunificator?tab=repositories&q=&type=source&language=&sort=">various OSS projects</a>.</p>
	</section>
	<section>
			<b>Links</b>
			<p>
			<nav class="links">
			<div><a rel="noreferrer" target="_blank" href="https://github.com/thoughtsunificator">Github</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://www.npmjs.com/~thoughtsunificator">npm</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://addons.mozilla.org/en-US/firefox/user/15968837">AMO</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://snapcraft.io/publisher/thoughtsunificator">Snapcraft</a></div>
		</nav>
			</p>
	</section>
	<section>
	<b>Contact</b>
	<p>
	<div>For general questions or open source stuff drop me a message at <a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>.</div>
	<div>For job related inquiries you can contact me at <a href="mailto:job@thoughtsunificator.me">job@thoughtsunificator.me</a>.</div>
	</p>
	`
}
