$(document).ready(function(){

    $('.submit').click(function(){
        validateForm();   
    });

    function validateForm(){

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var names = $('#contact-name').val();
        var email = $('#contact-email').val();
        var message = $('#contact-message').val();

        var input = new Array(names, email, message);

        $('.contact-error').hide();

        if(input[0] == ""){
            $('#contact-name').after('<span class="error">Required field</span>');
        }

        if(inputVal[1] == ""){
            $('#contact-email').after('<span class="error">Required field</span>');
        } 
        else if(!emailReg.test(email)){
            $('#contact-email').after('<span class="error">Invalid email addresss</span>');
        }

        if(inputVal[2] == ""){
            $('#contact-message').after('<span class="error">Required field</span>');
        }       
    }   

});