$(document).ready(function() {
    $(window).scroll(function(){
        if($(document).scrollTop() > 790) {
            $('nav').addClass('shrink');
        }
        else{
            $('nav').removeClass('shrink');
        }
    });
});