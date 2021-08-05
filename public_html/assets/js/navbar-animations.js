$(function() {
	var navbar = $("#mainNav");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			navbar.addClass("nav-height");
		} else {
			navbar.removeClass("nav-height");
		}
	});
});

