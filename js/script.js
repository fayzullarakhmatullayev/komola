$(document).ready(function () {
    $('.nav-link').click(function (e){
        e.preventDefault();
        $('.nav-link').parent().removeClass('active'); 
        $('html').animate({
            scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('.navbar').outerHeight()
        }, 800);
    });
    $(window).scroll(function(){
        var scrolled = $(this).scrollTop();  
        $('.nav-link').each(function(){
            if(scrolled >= $($(this).attr('href')).offset().top - $('.navbar').outerHeight() - 80){
                $('.nav-link').parent().removeClass('active');
                $(this).parent().addClass('active');
            }
        });  
        if(scrolled > 400){
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });  
    $('.top').click(function(){
        $('html').animate({
           scrollTop: 0 
        }, 800);
     }); 
});