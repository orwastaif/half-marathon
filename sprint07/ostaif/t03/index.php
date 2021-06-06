<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Charet</title>
</head>
<body>
    <form action="index.php" method="POST">
    <h1>Charset</h1>
    Change charset: <input type="text" placeholder="Input string" name="input"><br><br>
    Select charset or several charsets:  <select multiple name="select[]">
    <option>UTF-8</option>
    <option>ISO-8859-1</option>
    <option>Windows-1252</option>
    </select>
    <input type="submit" value="Change charset" name="submit"> 
    <input type="submit" value="Clear" >

  

    </form>
    <?php
        $input = $_POST['input'];
        if($_POST['submit']){
            echo "Input string:". " <textarea>$input</textarea><br>";
        }
        if (isset($_POST["select"])){
            foreach ((array)$_POST['select'] as $chosen) {
                    $convert = iconv('UTF-8',$chosen, $input);
                    echo $chosen . " :" . "<textarea>$convert</textarea><br>";
                }
             }
    ?>
</body>
</html>