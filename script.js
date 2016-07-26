function onSubmit() {
	var url = document.getElementById('url');
	var processedURL = processURL(url.value);
	openInNewTab(processedURL);
}

function processURL(url) {
	var tildeIndex = url.indexOf('~');
	var newURL = url.substring(0, tildeIndex - 1) + url.substring(tildeIndex) + 'applicants';
	return newURL;
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
