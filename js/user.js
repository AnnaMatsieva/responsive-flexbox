$(document).on('ready', function() {
    $(".lazy").slick({
    	dots: true,
	    lazyLoad: 'ondemand',
        infinite: true
    });
});

/*just a test of work "load more button"*/
$(document).ready(function () {
    
    $("div").each(function (index) {
        $(this).find('.b-model li:lt(' + $(this).attr('viewChild') + ')').show();
    });   

    $('.loadMore').click(function () {
        var $myWrapper= $(this).closest('div');
        var x= parseInt($myWrapper.attr('viewChild'),10);
        var liSize=$myWrapper.find('.b-model li').size();        
        x = (x + 5 <= liSize) ? x + 5 : liSize;
        $myWrapper.attr('viewChild',x)
        $myWrapper.find('.b-model li:lt(' + x + ')').show();
        $myWrapper.find('.showLess').show();
        if (x == liSize) {
            $myWrapper.find('.loadMore').hide();
        }
    });
});