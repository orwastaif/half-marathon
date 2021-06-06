
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Superhero Form</title>
</head>
<body>
    <h1>Session for new</h1>
    <form action="index.php" method="post" id="form1">
        <fieldset>
    <fieldset>
    <legend>About HERO</legend>
  
      
      Real name :<input   type="text" name="rname" required>
      Current Alias :<input  name="alias" required>
      Age :<input  type ="number" min = "1" max ="100" name="age" required><br><br>
      About :<textarea placeholder="Information about the superhero, max 500 symbols" id="about" rows="5" cols="33" maxlength="500" name="about" required></textarea><br><br>
      photo :<input type="file" id="myFile" name="filename" required>
  
</fieldset>
<fieldset>
    <legend>Powers</legend>  
    <input type="checkbox" name="powers[]"> 
    <label >Strength</label>
    <input type="checkbox" name="powers[]"> 
    <label >Speed</label>
    <input type="checkbox" name="powers[]"> 
    <label >Intelligence</label>
    <input type="checkbox" name="powers[]"> 
    <label >Teleportaion</label>
    <input type="checkbox" name="powers[]"> 
    <label >Immortal</label>
    <input type="checkbox" name="powers[]"> 
    <label >Another</label><br><br>
    <label >Level of control:</label>
    <input type="range" min=1 max=100 name="level">

</fieldset>
<fieldset>
    <legend>Publicity</legend>

    <input type="radio" name="checkbox[]" value="1" required>
    <label >UNKNOWN</label>
    <input type="radio" name="checkbox[]" value="2" required>
    <label >LIKE A GHOST</label>
    <input type="radio" name="checkbox[]" value="3" required>
    <label >I AM IN COMIC</label>
    <input type="radio" name="checkbox[]" value="4" required>
    <label >I HAVE FUN CLUB</label>
    <input type="radio" name="checkbox[]" value="5" required>
    <label >SUPER STAR</label>
 
</fieldset>
 
</fieldset> 
 <p>
<input type="submit" value="CLEAR" >
<input type="submit" value="SEND">
</p>
</form>
<?php
echo "<form action=\"index.php\" method=\"post\" id=\"form2\"><style>#form2{display:none;}</style>";
echo "name:  " .$_POST["rname"] ."<br>";
echo "Alias:  " .$_POST["alias"] . "<br>";
echo "Age:  " . $_POST["age"] . "<br>";
echo "description :  " . $_POST["about"]. "<br>";
echo "photo:   " . $_POST["filename"]. "<br>";
$checked_arr = $_POST['powers'];
$count = count($checked_arr);
echo  "experience : " . $count ."<br>";
echo "level : " . $_POST["level"] . "<br>";


if(isset($_POST['checkbox'])){
    
   foreach($_POST['checkbox'] as $value){
            echo "<style>#form1 {display: none;}#form2{display:block;}</style>";
            $valuefinal = $value; 
        }
echo "purpose : ".$valuefinal.'<br/></form>';
}

?>
<br>
<fieldset>
<form action="forget" method="POST">
    <input type="submit" value="FORGET">
</form>

</fieldset>

</body>
</html>