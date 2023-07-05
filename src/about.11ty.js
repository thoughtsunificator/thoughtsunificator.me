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
	<p>Self taught full stack developer with <b>5+ years experiences</b>.</p>
	</section>
	<section>
	<h3>Links</h3>
	<ul class="links">
			<li><a target="_blank" href="/resume-en.html"><b>Resume</b></a></li>
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
	<h3>Hire me</h3>
	<p>You can either direct-hire me by sending me a mail with your project requirements (see below) or through freelancer platforms such as <a target="_blank" href="https://www.freelancer.com/u/thoughtsunificat">freelancer.com</a> and <a target="_blank" href="https://www.upwork.com/freelancers/~014b14766baa32b655">upwork.com</a>.</p>
	<p>My working hours are 7am to 3am (GMT+2).</p>
	<p>English and French speaker.</p>
	</section>
	<section>
	<h3>Contact</h3>
	<p>
		<h4>Job Inquiries</h4>
		<a href="mailto:job@thoughtsunificator.me">job@thoughtsunificator.me</a>
		<h4>OSS Inquiries</h4>
		<a href="mailto:oss@thoughtsunificator.me">oss@thoughtsunificator.me</a>
	</p>
	</section>
	</div>
	</div>
	`
}
