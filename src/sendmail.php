<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

// От кого письмо 
$mail->setFrom('buzz.sisters@gmail.com', 'YaFayna');
// кому отправить
$mail->addAddress('yafayna8@gmail.com');
// Тема письма 
$mail->Subject = 'Запись на консультацию';

// Тело письма 
$body = '<h1>Запись на консультацию</h1>';

// проверка на пустое поле
if(!empty(trim($_POST['name']))){
    $body .= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
// проверка на номер телефона
if(!empty(trim($_POST['tel']))){
    $body .= '<p><strong>Номер телефона:</strong> '.$_POST['tel'].'</p>';
}

$mail->Body = $body;

// Отправляем 
if (!$mail->send()){
    $message = 'Error';
} else { 
    $message = 'Запись оформлена';
}
$response = ['message' => $message];

header('Content-Type: application/json');
echo json_encode($response);
?>