<?php

  function calculate_time(){
      $startDate = new DateTime("1939-january-01");
      $currentDate = new DateTime("now");
      return date_diff($currentDate, $startDate);

  }
  $time = calculate_time();
  echo "<!DOCTYPE html>\n<html>\n\n<head>\n<meta charset=\"utf-8\">\n<title>Normal space</title>\n</head>\n\n<body>\n<p>In real life you were absent for " . $time->format("%Y") . " years, " . $time->format("%m") . " months, " . $time->format("%d") . " days!</p></body>\n\n</html>\n";
  
  