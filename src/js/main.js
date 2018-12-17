$('.wrap_burger_item').click(function(){
    $('.burger_menu_items').toggle();
    if($(this).hasClass('burger_style')){
        $(this).removeClass('burger_style');
    }
    else{
        $(this).addClass('burger_style');
    }

    
        
    console.log('work');
})