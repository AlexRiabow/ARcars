<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','PHPMailer-master/language/');
    $mail->IsHTML(true);

    $mail->setFrom('info@arcars-samara.ru','ARCars');
    $mail->addAddress('taurus-ra@yandex.ru');
    $mail->Subject = 'Заявка с сайта';

    $body = '<h1>Новая заявка с сайта!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Почта:</strong>'.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Телефон:</strong>'.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['comment']))){
        $body.='<p><strong>Комментарий:</strong>'.$_POST['comment'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка!';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message'=>$message];

    header('Content-type: application/json');
    echo json_encode($response);
?>