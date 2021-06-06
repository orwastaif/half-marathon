<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
        body{
            text-align: center;
        }
    </style>
    
</head>
<body>
   <h2>Welcome <?php echo $_SESSION['LOGIN'] . "\x20\x20\x20" ; 
   $LOGIN = $_POST['LOGIN'];
   $password = $_POST['password'];
   $select = mysqli_query($conn, "SELECT * FROM users WHERE LOGIN = '$LOGIN' AND password = '$password' ");
   $row = mysqli_fetch_array($select);
   $_SESSION["status"] = $row ['status'];
   echo "you are " . $_SESSION['status'];
   ?></h2>
   CLICK HERE TO <a href="logout.php">Logout</a>
   
</body>
</html>