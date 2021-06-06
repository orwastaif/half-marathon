<html>
    <head>
    <meta charset="utf-8">
        <title>Make square image</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>Make square image</h1>
            <form action="index.php" method="post" enctype="multipart/form-data">
                <input name="url" placeholder="Image url..." size="50">
                <input type="submit" value="GO">
            </form>
        </div>
        <?php
            if($_POST["url"]) {
                $url = $_POST["url"];
                $source = "source.jpg";
                $curl = curl_init($url);
                $file = fopen("source.jpg", "wb");
                curl_setopt($curl, CURLOPT_FILE, $file);
                curl_setopt($curl, CURLOPT_HEADER, 0);
                curl_exec($curl);
                curl_close($curl);
                fclose($file);
                $image = imagecreatefromjpeg($source);
                imagefilter($image, IMG_FILTER_COLORIZE, 255, 0 , 0);
                imagejpeg($image, "red.jpg");
                $image = imagecreatefromjpeg($source);
                imagefilter($image, IMG_FILTER_COLORIZE, 0, 255 , 0);
                imagejpeg($image, "green.jpg");
                $image = imagecreatefromjpeg($source);
                imagefilter($image, IMG_FILTER_COLORIZE, 0, 0 , 255);
                imagejpeg($image, "blue.jpg");
                echo "<div class=\"grid\"><img src=\"source.jpg\"><img src=\"red.jpg\"><img src=\"green.jpg\"><img src=\"blue.jpg\"></div>";
            }
        ?>
    </body>
</html>
