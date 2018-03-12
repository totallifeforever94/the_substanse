function ajaxFormSubmitClick(e) {
    if ($('#ajaxForm')[0].checkValidity());
    e.preventDefault();
    $('#loader').modal().show();
    
    $.ajax ({
        url: "https://tranquil-sierra-86540.herokuapp.com/sava.taras@gmail.com",
        method: 'POST',
        data: {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'message': $('#message').val(),
        }, 
        dataType: 'json'
    })
    .done( () => {
        $('.modal-backdrop.show').show();
        $('#loader').modal().hide();
        $("#thank-u").modal();
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        $('.modal-backdrop.show').hide();
    });
}