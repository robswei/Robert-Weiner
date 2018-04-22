$(document).ready(function() {
    $(window).scroll(function(){
        if($(document).scrollTop() > 680) {
            $('nav').addClass('shrink');
        }
        else{
            $('nav').removeClass('shrink');
        }
    });
});