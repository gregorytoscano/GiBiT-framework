$(document).ready(function(){
	$('#nav-mobile').html($('#nav-main').html());
	$('.toggle-menu, .toggle-menu-close, #nav-trigger span').click(function(){
		$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");
		if($('nav#nav-mobile ul').hasClass('expanded')){
			$('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(400);
			$(this).removeClass('open');
		}
		else{
			$('nav#nav-mobile ul').addClass('expanded').slideDown(400);
			$(this).addClass('open');
		}
	});
});