exports.data = {
	layout: "page",
	title: "About me",
	permalink: "/about-me/",
	description: "About me",
	class: "about"
}

exports.render = function(data) {
	return `<div class="intro">

	<img src="/image/me.jpg">
	<div>
	<p>Well, hello there!<br>My name is <b>Romain Lebesle</b>.</p>
	<br>
	<p>I am a self taught web developer with <b>5+ years experiences</b>, what I do range from:</p>
	<ul>
		<li>JavaScript Libraries</li>
		<li>Parsers</li>
		<li>Web Applications</li>
		<li>Chrome Extensions</li>
		<li>Code Reviews</li>
		<li>Code fixes</li>
		<li>Mockup to Template/CMS</li>
		<li>Electron Applications</li>
		<li>Android WebView</li>
		<li>Node.js Applications</li>
	</ul>
	<br>
	<p>I have a deep knowledge of JavaScript and Web APIs and know how to make best use of them so that what I deliver is fast and scales.</p>
	<br>
	<p>I also had the occasion to work on numerous PHP projects some using either Laravel or Symfony.</p>
	<br>
	<p>I am based in <b>Rennes</b>, France.</p>
	<br>
	<h2>Links</h2>
	<ul class="links">
		<li><a target="_blank" href="/resume-en.html">Resume</a></li>
		<li><a target="_blank" href="https://github.com/thoughtsunificator">Github</a></li>
		<li><a target="_blank" href="https://www.npmjs.com/~thoughtsunificator">npm</a></li>
		<li><a target="_blank" href="https://play.google.com/store/apps/developer?id=thoughtsunificator">Play Store</a></li>
		<li><a target="_blank" href="https://addons.mozilla.org/en-US/firefox/user/15968837">AMO</a></li>
		<li><a target="_blank" href="https://snapstats.org/publishers/thoughtsunificator">Snapcraft</a></li>
		<li><a target="_blank" href="https://twitter.com/thoughtsunifier">Twitter	</a></li>
	</ul>
	<h2>Contact</h2>
		I am currently available for hire.
		<br>
		<a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>
	</div>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"email": "oss@thoughtsunificator.me",
		"image": "${data.site.url}/image/me.jpg",
		"jobTitle": "Web Developer",
		"name": "Romain Lebesle",
		"url": "https://romain-lebesle.fr"
	}
	</script>
	`
}
