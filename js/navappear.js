$(document).ready(function() {
    $(window).scroll(function(){
        if($(document).scrollTop() > 550) {
            $('nav').addClass('shrink');
        }
        else{
            $('nav').removeClass('shrink');
        }
    });
});