$(document).ready(function(){
    $('h1').slideUp(1000); 
    $('h1').slideDown(1000); 
//    $('li span.move').fadeTo("slow", 0.5); 

    $('.add').click(function(){
        checkInput();
    });
    
    $('#input_todo').keypress(function(e) {
    if (e.keyCode == '13') {
        checkInput();
    }
});
});


function checkInput(){
    //var input = $('#input_todo').val();
    
    if(typeof(Storage) !== "undefined"){
        var input = $('#input_todo').val().trim();
        //local storage
        localStorage.setItem('input', input);    
        
    }
    
    if(input == null || input == ''){
        alert('Please enter a todo');
        return false;
    }
   
    $('.todo-list').append("<li>\
                                <input type='checkbox' id = 'checkbox'>\
                                <laber>"+input+"</laber>\
                                <span class='glyphicon glyphicon-remove move'></span>\
                            </li>");
    $('#input_todo').val('');
    
    $('li span.move').fadeTo("slow", 0.7); 
    
    $(".content").animate({
        height: '+=70px',
    },500); 
    
}


$(document).on( "click", "li span", function() {
    
    $(this).parent().hide();
    $(".content").animate({
        height: '-=70px',
    },500); 

});


$(document).on('click','li input#checkbox', function(){
    
    if($(this).is(':checked')){
        $(this).parent().css('text-decoration','line-through');
    } else {
        $(this).parent().css('text-decoration','');
    }
})


