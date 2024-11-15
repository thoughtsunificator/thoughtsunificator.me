exports.data = {
	layout: "page",
	title: "About Romain Lebesle",
	headTitle: "About",
	permalink: "/about/",
	description: "About"
}

exports.render = function(data) {
	return `<div class="intro">
	<div>
	<section>
	<h3>Profile</h3>
	<p>Open 🧙 at thoughtsunificator.me D2D and Web specs is all I care about.</p>
	<p>And if you ever happen to like my sorcery I kindly ask that you consider <a target="_blank" rel="noreferrer" href="https://github.com/sponsors/thoughtsunificator">becoming a sponsor</a>.</p>
	<p><a href="/pgp_key.asc">My PGP key.</a></p>
	</section>
	<section>
			<h3>Links</h3>
			<p>
			<nav class="links">
			<div><a rel="noreferrer" target="_blank" href="https://github.com/thoughtsunificator">Github</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://www.npmjs.com/~thoughtsunificator">npm</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://addons.mozilla.org/en-US/firefox/user/15968837">AMO</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://snapcraft.io/publisher/thoughtsunificator">Snapcraft</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://mastodon.social/@thoughtsunifcator">Mastodon</a></div>
			<div><a rel="noreferrer" target="_blank" href="https://twitter.com/thoughtsunifier">Twitter</a></div>
		</nav>
			</p>
	</section>
	<section>
	<h3>Contact</h3>
	<p>
		<div>For general questions or open source stuff drop me a message at <a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>.</div>
		<div>For job related inquiries you can contact me at <a href="mailto:job@thoughtsunificator.me">job@thoughtsunificator.me</a>.</div>
	</p>
	</section>
	</div>
	</div>
	`
}
