<?php
error_reporting(E_ERROR | E_PARSE);
include('connection/DatabaseConnection.php');
session_start();
$conn = mysqli_connect('127.0.0.1', 'ostaif', 'securepass', 'sword') or die ('unable to connect');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    
</head>
<body>

<div class = "bg-img">
   <form action="index.php" method="POST">
   <div class="container" id="formm"> 

     <div class="row">
     <div class="col-sm-3">
       <h1>Please Login</h1>
       <hr class="mb-3">
     
       <input class="form-control" placeholder="Login" type="text" name="LOGIN" required>

 
       <input class="form-control" type="password" placeholder="Password" name="password" required>
       <hr class="mb-3">

       <input class="btn btn-primary" type="submit" name="signin" value="Sign in">
        </div>
       </div>
     </div>

  
   </form>
</div>
    

<?php
     if(isset($_POST['signin'])){
           $LOGIN = $_POST['LOGIN'];
           $password = $_POST['password'];

           $select = mysqli_query($conn, "SELECT * FROM users WHERE LOGIN = '$LOGIN' AND password = '$password' ");
           $row = mysqli_fetch_array($select);

           if(is_array($row)){
               $_SESSION["LOGIN"] = $row ['LOGIN'];
               $_SESSION["password"] = $row ['password'];

           }
           else{
               echo "Invalid username or password!";
           }
     }
     if(isset($_SESSION["LOGIN"])) {
   
       include('./login.php');
       echo "<style>#formm{display:none}</style>";
        

     }
?>

</body>
</html>