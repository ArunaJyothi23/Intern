$(document).ready(function(){
    $('#contact-us').on('click', function(){
        window.location.href = 'contact.html';
    });

    $('#contact-form').on('submit', function(e){
        e.preventDefault();
        alert('Form submitted!');
    });
});