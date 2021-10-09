exports.data = {
	layout: "page",
	title: "About Romain Lebesle",
	headTitle: "About",
	permalink: "/about/",
	description: "About"
}

exports.render = function(data) {
	return `<div class="intro">
	<img alt="me" src="/image/me.webp">
	<div>
	<section>
	<h3>Profile</h3>
	<p>Self taught web developer with <b>5+ years experiences</b>.</p>
	<p>With a deep knowledge of JavaScript and Web APIs I know how to make best use of them so that what I deliver is fast and scales.</p>
	<p>My current focus is on making crystal clear and lightweight JavaScript libraries and tools for front-end developers to use.</p>
	</section>
	<section>
		<h3>Areas of expertise</h3>
		<ul class="areas-expertise">
			<li>JavaScript Libraries</li>
			<li>Web Applications</li>
			<li>Node.js Applications</li>
			<li>Parsers</li>
			<li>Chrome Extensions</li>
			<li>Code Reviews</li>
			<li>Code fixes</li>
			<li>Mockup to Template/CMS</li>
			<li>Electron Applications</li>
			<li>Android WebView</li>
		</ul>
	</section>
	<section>
		<h3>Links</h3>
		<ul class="links">
			<li><a target="_blank" href="/resume-en.html">Resume</a></li>
			<li><a target="_blank" href="/timeline-en.html">Timeline</a></li>
			<li><a target="_blank" href="https://github.com/thoughtsunificator">Github</a></li>
			<li><a target="_blank" href="https://www.npmjs.com/~thoughtsunificator">npm</a></li>
			<li><a target="_blank" href="https://play.google.com/store/apps/developer?id=thoughtsunificator">Play Store</a></li>
			<li><a target="_blank" href="https://addons.mozilla.org/en-US/firefox/user/15968837">AMO</a></li>
			<li><a target="_blank" href="https://snapstats.org/publishers/thoughtsunificator">Snapcraft</a></li>
			<li><a target="_blank" href="https://twitter.com/thoughtsunifier">Twitter	</a></li>
		</ul>
	</section>
	<section>
	<h3>Contact</h3>
	<p>
		Job Inquiries: <a href="mailto:job@thoughtsunificator.me">job@thoughtsunificator.me</a>
		<br>
		OSS Inquiries: <a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>
	</p>
	</section>
	</div>
	</div>
	`
}
