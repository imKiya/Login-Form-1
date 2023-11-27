$(function () {

    let number = 0;

    $('#submit').click(function () {
        if ($('#name-input').val() != "" && $('#password-input').val() != "") {
            location.reload();
        }
        else {
            $('#error').text("لطفا فرم را به درستی پر کنید");
            number = 1;
        }
    });


    $("input").keyup(function () {
        if (number != 0) {
            if ($('#name-input').val() != "" && $('#password-input').val() != "") {
                $('#error').text("");
            }
            else {
                $('#error').text("لطفا فرم را به درستی پر کنید");
            }
        }
    });

});
