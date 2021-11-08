<?php 

$wasSent = false;
$failedSend = false;

try {

    $PDO = new PDO(dsn:"mysql:host=localhost;dbname=peterjar_portfolio", username:"peterjar_admin", password:"ABQdTJeV_wny/Z*d");

    if(isset($_POST['first']) && $_POST['first'] != ' '){
        if(isset($_POST['last']) && $_POST['last'] != ' '){
            if(isset($_POST['email']) && $_POST['email'] != ' '){
                if(isset($_POST['subject']) && $_POST['subject'] != ' '){
                    if(isset($_POST['message']) &&  $_POST['message'] != ' ') {
                        $first = $_POST['first'];
                        $last = $_POST['last'];
                        $email = $_POST['email'];
                        $subject = $_POST['subject'];
                        $message = $_POST['message'];
                        $date = date("Y/m/d");

                        $sql = $PDO->prepare(query:"INSERT INTO contact(first_name,last_name,email,subject,message,date)
                                            VALUES('$first','$last','$email','$subject','$message','$date')");
                        $sql->execute();

                        $wasSent = true;
                    }
                }

            }
        }
    }

 
} catch(PDOException $e){
echo $e->getMessage();
}






?>