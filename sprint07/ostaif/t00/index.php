<?php 

setcookie('count', isset($_COOKIE['count']) ? ++$_COOKIE['count'] : 1, time()+60);
session_start();
   
   echo "<h1>Cookies counter</h1>";   
   if (!$_COOKIE['count'])
    echo"this page was loaded 1 time in last minute";
    
   
   else 
        echo"this page was loaded " .$_COOKIE['count'], " time(s) in last minute";
   
?>