<?php
    $headers = "From: ".$_POST['email'] . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    mail(
        "info@josevicentecarratala.com", 
        "Mensaje de :".$_POST['nombre'], 
        $_POST['mensaje'],
        $headers
    );
?>