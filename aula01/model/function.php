<?php

$NAME = $_REQUEST['name'];
$ANIMAL = $_REQUEST['animal'];

if(empty($NAME)){
    $data = array(
        "type" => 'error',
        "message" => 'There are empty fields.'
    );
}else{

    switch($ANIMAL){
        case '1': $data = array(
            "type" => 'dog.png',
            "message" => 'You are welcome, '.$NAME.', we know that your favorite animal is the dog'
        );
        break;
        case '2': $data = array(
            "type" => 'cat.jpg',
            "message" => 'You are welcome, '.$NAME.', we know that your favorite animal is the cat'
        );
        break;
        case '3': $data = array(
            "type" => 'fish.jpg',
            "message" => 'You are welcome, '.$NAME.', we know that your favorite animal is the fish'
        );
        break;
    }
}

echo json_encode($data);