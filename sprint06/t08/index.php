<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>What about forms?</title>
</head>
<body>
    <h1>who is the magician in "Lord Of The Rings"?</h1>
    <form action="index.php" method="POST">
        <input type="radio" name="choice" value="we recommend to watch the movie again !_!">Aragon<br>
        <input type="radio" name="choice" value="we recommend to watch the movie again !_!">Legolas<br>
        <input type="radio" name="choice" value="ohh yeahhh ^_^">Gandalf<br>
        <p>
        <input type="submit" value="Check the answer">
        </p>
    </form>
   
    <?php
        $choice = $_POST["choice"];
        echo $choice;
    ?>
</body>
</html>