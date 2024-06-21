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
	<p>Open 🧙 at thoughtsunificator.me D2D and Web specs is all I care about.</p>
	<p><a href="/pgp_key.asc">My PGP key.</a></p>
	</section>
	<section>
	<h3>Links</h3>
	<ul class="links">
			<li><a target="_blank" href="/resume-en.html"><b>Resume</b></a></li>
			<li><a target="_blank" href="/timeline-en.html">Timeline</a></li>
			<li><a target="_blank" href="https://github.com/thoughtsunificator">Github</a></li>
			<li><a target="_blank" href="https://www.npmjs.com/~thoughtsunificator">npm</a></li>
			<li><a target="_blank" href="https://addons.mozilla.org/en-US/firefox/user/15968837">AMO</a></li>
			<li><a target="_blank" href="https://snapcraft.io/publisher/thoughtsunificator">Snapcraft</a></li>
			<li><a target="_blank" href="https://mastodon.social/@thoughtsunifcator">Mastodon</a></li>
			<li><a target="_blank" href="https://twitter.com/thoughtsunifier">Twitter</a></li>
			</ul>
			</section>
	<section>
	<h3>Contact</h3>
	<p>
		<ul>
			<li>For general questions or open source stuff drop me a message at <a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>.</li>
			<li>For job related inquiries you can contact me at <a href="mailto:job@thoughtsunificator.me">job@thoughtsunificator.me</a>.</li>
		</ul>
	</p>
	</section>
	</div>
	</div>
	`
}
