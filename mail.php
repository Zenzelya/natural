<?php

$recepient = "kolodas@i.ua";
$sitename = "NaturalCharm";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$phone = trim($_GET["phone"]);


$pagetitle = "Новая заявка с сайта \"$NaturalCharm\"";
$message = "Имя: $name \nEmail: $email \nТелефон: $phone "; 
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");