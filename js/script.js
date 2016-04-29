var showText = function (target, message, index, interval) {
	if (index < message.length) {
		$(target).append($(message).text()[index++]);
		setTimeout(function () { showText(target, message, index, interval); }, interval);
	};
};

$(document).ready(function() {
	$(this).click(function () {
		showText("#click", "#msg", 0, 100);
		$("h1").text($("#msg").text()[2]);
	});
	jQuery.get("data.txt", function(data) {
		alert(data);
		$("h1").text(data.replace("n", ""));
	});
});

