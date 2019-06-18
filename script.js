$('.nav__item').mouseenter(function(){
    var title = $(this).data('title');
    
    $('.nav__item').hide();
    $(this).show();
    
    $('.corner__' + title).addClass('active')
    console.log(title  + ' mouseentered');
});

$('.nav__item').mouseleave(function(){

    $('.nav__item').show();
    $('.corner').removeClass('active')

    console.log(' mouseleft');
});
