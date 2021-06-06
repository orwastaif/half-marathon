<?php
  setcookie('form', $input);
  setcookie('pass1', $_POST['pswd']);
  setcookie('pass2', $_POST['check']);
  if($_POST['pswd']){
      $_COOKIE['pass1'] = $_POST['pswd'];
  }
  if($_POST['pswrd']){
      $_COOKIE['pass2'] = $_POST['check'];
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hack it !</title>
</head>
<body>
 
  <h1>Password</h1>
<form action="index.php" method="POST" id="form1">
<p>Password not saved at session</p>
Password for saving to session <input type="text" name="pswd" placeholder="password to session"><br><br>
Salt for saving to session <input type="text" name="salt" placeholder="salt to session"><br><br>

<input type="submit" value="save">
</form>
 <?php 
 if(isset($_POST['pswd'])){
   $input = 
     "<form  action='index.php' method='POST' id='form2'>
        <style>#form1{display: none;}#form2{display: block;}</style>
        <p>Password saved at session</p>
        Hash is " . $_POST['pswd'] . $_POST['salt'] . "<br><br>Try to guess 
      <input type='text' name='check' placeholder='salt to session'>
      <input type='submit' value='Check password'><br><br>
      <input type='submit' value='clear'></form>";
 
 $_COOKIE['pass1'] = $_POST['pswd'];
 $_COOKIE['pass2'] = $_POST['check'];
 print($input);


 
 }if(isset($_COOKIE['pass2']) && isset($_COOKIE['pass1']) && $_COOKIE['pass2'] == $_COOKIE['pass1']){
  echo "Hacked<br>" . $input;
 }

   ?>
</body>
</html>