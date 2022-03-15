<?php

$NAME = $_REQUEST['NAME'];
$NASC = $_REQUEST['IDADE'];
$BEBIDA = $_REQUEST['BEBIDA'];
$hoje = date("Y-m-d");
$IDADE = date_diff(date_create($NASC), date_create($hoje));

if(empty($NAME)){
    $data = array(
        "type" => 'error',
        "message" => 'Há algum campo vazio'
    );
}else{

    if($IDADE->format('%y') >= 18){
        $data = array(
            "type" => 'cachaca.jpg',
            "message" => "Olá $NAME, você é maior de idade e pode consumir bebida alcoólica, e sua preferida é $BEBIDA!"
        );
    } else {
        $data = array(
            "type" => 'proibida.jpg',
            "message" => "Olá $NAME, você é menor de idade e não está autorizado a consumir bebida alcoólica!"
        );
    }
}

echo json_encode($data);