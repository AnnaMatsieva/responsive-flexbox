$(document).on('ready', function() {
    $(".lazy").slick({
    	dots: true,
	    lazyLoad: 'ondemand',
        infinite: true
    });
});