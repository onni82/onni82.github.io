$(document).ready(function () {
	// Handles the span#menu-icon open/close event
	$('span#menu-icon').click(function () {
		// Toggles the class "open" on the span element
		$('nav#menu').toggleClass('open');
	});

	// Handles the click event on an a element that has the class "clickable"
	$('a.clickable').click(function () {
		// Toggles the class "open" on the span element
		$('nav#menu').removeClass('open');
	});
});