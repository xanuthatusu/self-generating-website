caption = `
/*
 * This is a project of self-generating webpages.
 * Luckily for you, I'm self aware and will design myself.
 * Just sit back, relax, and enjoy.
 */

body {
	color: red;
}

#main {
	font-family: sans-serif;
	text-align: center;
	font-size: 20px;
}
`;
var captionLength = 0;

$(document).ready(function(){
	type = function type() {
		$("#main").text(caption.substr(0, captionLength++));
		if (captionLength < caption.length + 1) {
			setTimeout('type()', 25);
		} else {
			captionLength = 0;
		}
	}
	type();
	console.log(document.styleSheets[0]);
	addStyles = function addStyles(rule) {
		document.styleSheets[0].insertRule(rule, 1);
	}
	setTimeout('addStyles("body {color: red;}")', 4500);
	setTimeout('addStyles("#main {font-family: sans-serif;}")', 5500);
	setTimeout('addStyles("#main {margin: 0 auto;}")', 6000);
});
