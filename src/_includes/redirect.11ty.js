exports.render = function(data) {
	return `<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${data.redirect_to}">
<script>location="${data.redirect_to}"</script>
<meta http-equiv="refresh" content="0; url=${data.redirect_to}">
<meta name="robots" content="noindex">
<h1>Redirecting…</h1>
<a href="${data.redirect_to}" target="_blank" rel="noopener noreferrer">Click here if you are not redirected.</a>`
}
