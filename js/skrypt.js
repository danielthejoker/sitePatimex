
$(document).ready(function() {
	$('#quick-nav li a').on('mouseenter mouseleave', function(){
		$(this).next().fadeToggle("fast", 'swing');
	})
	$('#block-block-1').append("<img class='next-first absolute' src='http://www.wegieldrzewny.pl/sites/all/themes/framework/img/strzalka.png'/>");
	$('#block-block-1').append("<img class='next-second absolute' src='http://www.wegieldrzewny.pl/sites/all/themes/framework/img/strzalka.png'/>");
	$('.field-group-format-wrapper div').removeClass('clearfix');
	setInterval(function(){
		$('#mapa img').toggleClass('animation');
	}, 1000);
});