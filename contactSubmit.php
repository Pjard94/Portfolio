<?php 

$wasSent = false;
$failedSend = false;

try {

$PDO = new PDO(dsn:"mysql:host=localhost;dbname=peterjar_portfolio", username:"peterjar_admin", password:"jjDiFGPvKY0i");

if(isset($_POST['first']) && $_POST['first'] != ' '){
    $first = $_POST['first'];
    $last = $_POST['last'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    if(isset($last) && $last != ' '){
        if(isset($email) && $email != ' ' && $email = filter_var($email, FILTER_VALIDATE_EMAIL)){
            if(isset($subject) && $subject != ' '){
                if(isset($message) &&  $message != ' ') {
                    
                    $date = date("Y/m/d");

                    $sql = $PDO->prepare(query:"INSERT INTO contact(first_name,last_name,email,subject,message,date)
                                        VALUES('$first','$last','$email','$subject','$message','$date')");
                    $sql->execute();

                    $wasSent = true;
                } else {
                    $failedSend = true;
                }
            } else {
                $failedSend = true;
            }

        } else {
            $failedSend = true;
        }
    } else {
        $failedSend = true;
    }
} else {
    $failedSend = true;
}


} catch(PDOException $e){
echo $e->getMessage();
}  


?>