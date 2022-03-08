$(document).ready(function(){

    $('.btn-sent').click(function(e){
        e.preventDefault();

        let data = $('#form').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: data,
            url: '../model/function.php',
            success: function(){

            }
        })
    });



});
