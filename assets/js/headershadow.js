var header = $('.header-container');
var container = $('.image-container');

$(window).scroll(function(e){
    if(header.offset().top > container.height()-93){
        if(!header.hasClass('shadow')){
            header.addClass('shadow');
        }
    }else{
        header.removeClass('shadow');
    }
});