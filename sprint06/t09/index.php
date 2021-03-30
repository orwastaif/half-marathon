<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Avenger Application</title>
</head>
<body>
    
<form action="index.php" method="post">
        <fieldset>
            <legend>About candidate</legend>
                <p>
                    <label>Name <input type="text" name="name" placeholder="Tell your name"  required></label>
                    <label>E-mail <input type="text" name="email" placeholder="Tell your e-mail"  required></label>
                    <label>Age <input type="number" name="age" required></label>
                    <br><br>
                    <span>About</span>
                    <textarea name="about" placeholder="Tell about yourself, max 500 symbols" required></textarea>
                    <br>
                </p>
                <p>
                    <span>Your photo:</span>
                    <input type="file" name="photo" required>
                </p>
        </fieldset>
        <input type="reset" name="clear" value="clear">
        <input type="submit" name="send" value="send">
    </form>
</body>
</html>