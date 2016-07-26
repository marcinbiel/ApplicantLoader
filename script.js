function onSubmit() {
	var url = document.getElementById('url');
	var processedURL = processURL(url.value);
	openInNewTab(processedURL);
}

function processURL(url) {
	var tildeIndex = url.indexOf('~');
	var slash = '';
	if (url.substring(url.length - 1) != '/') slash = '/';
	var underscoreIndex = tildeIndex - 1;
	if (url.charAt(tildeIndex - 1) != '_') {
		underscoreIndex = tildeIndex;
	}
	var newURL = url.substring(0, underscoreIndex) + url.substring(tildeIndex) + slash + 'applicants';
	return newURL;
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
