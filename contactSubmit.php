<?php 

try {

    $PDO = new PDO("mysql:host=localhost;dbname=peterjar_portfolio","peterjar_admin","jjDiFGPvKY0i");
    
} catch(PDOException $e){
    echo $e->getMessage();
}  


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

                    $sql = $PDO->prepare("INSERT INTO contact(first_name,last_name,email,subject,message,date)
                                        VALUES('$first','$last','$email','$subject','$message','$date')");
                    $sql->execute();

                   echo json_encode(
                       array(
                           'sent' => true
                       )
                       );
                } else {
                    echo json_encode(
                        array(
                            'sent' => false
                        )
                        );
                    }

                } else {
                    echo json_encode(
                        array(
                            'sent' => false
                        )
                        );
                }
            } else {
                echo json_encode(
                    array(
                        'sent' => false
                    )
                    );
            }

        } else {
            echo json_encode(
                array(
                    'sent' => false
                )
                );
        }
} else {
    echo json_encode(
        array(
            'sent' => false
        )
        );
} 

if (empty($_POST['first'])) {
    echo json_encode(
        array(
            'sent' => false
        )
        );
}


?>