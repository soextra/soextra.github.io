$(document).ready(function(){

    $('#contact-submit').click(function(){
        validateForm();   
    });

    function validateForm(){

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var names = $('#contact-name').val();
        var email = $('#contact-email').val();
        var message = $('#contact-message').val();
        var honey = $('#contact-honey').val();

        var input = new Array(names, email, message, honey);
        var valid = true;

        $('.contact-error').hide();

        if(input[0] == ""){
            $('#contact-name').after('<small class="contact-error">Required field.</small>');
            valid = false;
        }

        if(input[1] == ""){
            $('#contact-email').after('<small class="contact-error">Required field. </small>');
            valid = false;
        } 
        else if(!emailReg.test(email)){
            $('#contact-email').after('<small class="contact-error">Invalid email address. </small>');
            valid = false;
        }

        if(input[2] == ""){
            $('#contact-message').after('<small class="contact-error">Required field.</small>');
            valid = false;
        }

        if(input[3] != ""){
            valid = false;
        }    

        if(valid) {
            $( "#contact-form" ).submit();
        }
    }   
});