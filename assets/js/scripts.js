$('.btn-menu, .overlay').click(function() {
	var overlay = $('.overlay');
	var sidemenu = $('.side-menu');
	var html = $('html');
	var btnMenu = $('.btn-menu');

	btnMenu.toggleClass('active');
	sidemenu.toggleClass('active');
	overlay.toggleClass('active');
	html.toggleClass('no-scroll');
});