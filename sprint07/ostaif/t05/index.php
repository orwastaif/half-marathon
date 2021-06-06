<?php
session_start();
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">

        <title>WhoIsWho</title>
    </head>
    <body>

    <h1>Parsing CSV data</h1>
    <form method="post">
     
            Upload file:
            <input type="file" name="file">
            <input type="submit" value="Upload">
  
    </form>
<?php
if ($_POST["file"] || $_SESSION["file"]) {
    echo '<form method="get">
        <span>Filter:</span>
        <select name="filter">';
        if ($_GET["filter"]) {   
            if ($_GET["filter"] == "not selected") echo '<option selected value="not selected">not selected</option>';
            else echo '<option value="not selected">not selected</option>';

            if ($_GET["filter"] == "good") echo '<option selected value="good">good</option>';
            else echo '<option value="good">good</option>';

            if ($_GET["filter"] == "bad") echo '<option selected value="bad">bad</option>';
            else echo '<option value="bad">bad</option>';
            
            if ($_GET["filter"] == "neutral") echo '<option selected value="neutral">neutral</option>';
            else echo '<option value="neutral">neutral</option>';
        }
        else {
            echo '<option value="not selected">not selected</option>
            <option value="good">good</option>
            <option value="bad">bad</option>
            <option value="neutral">neutral</option>';
        }
    echo   '</select>
        <input type="submit" name="apply" value="APPLY">
    </form>';

    $filter = "not selected";
    if ($_GET["filter"])
        $filter = $_GET["filter"];
    if ($_POST["file"])
        $_SESSION = Array();
    if (!$_SESSION["file"])
        $_SESSION["file"] = $_POST["file"];
    $newFile = fopen($_SESSION["file"], "r");

    echo '<table>';
    if ($str_csv = fgetcsv($newFile)) {
        echo '<tr>';
        foreach($str_csv as $line)
            echo '<th>' . $line . "</th>";
        echo '</tr>';
    }

    while ($str_csv = fgetcsv($newFile)) {
        if (($filter == "good" && $str_csv[2] != "good") ||
            ($filter == "bad" && $str_csv[2] != "bad") ||
            ($filter == "neutral" && $str_csv[2] != "neutral"))
            continue;
        echo '<tr>';
        foreach($str_csv as $line)
            echo '<td>' . $line . "</td>";
        echo '</tr>';
    }
    echo '</table>';

    fclose($newFile);
}

?>