<?php

if($_POST){
    $name = $_REQUEST['name'];
    $mobile = $_REQUEST['mobile'];
    $phone = $_REQUEST['phone'];
    $adress = $_REQUEST['adress'];
    $email = $_REQUEST['email'];
    $comment = $_REQUEST['comment'];

    $to = "info@pazosinmobiliaria.com.ar";

    $mensaje =
		"Nombre: " .$name ."\r\n"
        ."Email: " .$email ."\r\n" ."\r\n"
        ."Teléfono Celular: " .$mobile ."\r\n"
        ."Teléfono Fijo: " .$phone ."\r\n"
        ."Dirección: " .$adress ."\r\n" ."\r\n"
        ."Comentario: " .$comment ."\r\n"
    ;

	$subject = "PAZOS AIRBNB Web - Consulta de: " .$email;

	$header = "From: " .$email ."\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

    mail($to,$subject,$mensaje,$header);
}

?>
