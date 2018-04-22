$(document).ready(function() {
    $(window).scroll(function(){
        if($(document).scrollTop() > 740) {
            $('nav').addClass('shrink');
        }
        else{
            $('nav').removeClass('shrink');
        }
    });
});