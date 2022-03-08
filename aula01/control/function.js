$(document).ready(function(){

    $('.btn-sent').click(function(e){
        e.preventDefault();

        let data = $('#form').serialize();
        $('#retorno').empty();

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: data,
            url: '../model/function.php',
            success: function(dados){
                $('#retorno').append(`
                    <div class="col-12 col-sm-8 col-md-6">
                        <div class="alert-primary">
                            <h1 class="text-center text-dark">
                                ${dados.message}
                            </h1>
                            <img src="../../img/${dados.type}" class="img-fluid">
                        </div>
                    </div>
                `)
            }
        })
    });



});
