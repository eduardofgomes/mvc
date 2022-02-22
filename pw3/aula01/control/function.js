$(document).ready(function(){

    $('.btn-sent').click(function(e){
        e.preventDefault();

        let date = $('#form').serialize();

        console.log(date);
    });



});

/*
var form = document.getElementById('form');
var date = new FormData(form);

console.log(date);
*/