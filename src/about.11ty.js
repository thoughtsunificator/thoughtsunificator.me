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
	<div>I am <a href="/pgp_key.txt">D9CC8358645231E616E1F3DA<b>C11B5CF0A7856B6D</b></a>.<br>An open 🧙 who lives aspiring to master D2D, DX and UX mostly within the Web and its ecosystems. <p>I also happen to enjoy everything that sounds like freedom especially generic operating systems.
	</section>
	<section>
	<b>Contact</b>
	<p>
	<div>For open source related inquiries I am available at <a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>.</div>
	<div>For job related inquiries you can contact me at <a href="mailto:job@thoughtsunificator.me">job@thoughtsunificator.me</a>.</div>
	</p>
	`
}
