<?php
    function calculate_time(){
        $startDate = new DateTime("1939-01-01");
        $currentDate = new DateTime("now");
        $differenceOfDates = date_diff($currentDate, $startDate);
        $quantumYear = 1;
        for($i = 7; $i < $differenceOfDates->format("%Y") ;$i+=7){
            $quantumYear++;
        }
        $quantumMonth = $differenceOfDates->format('%m') + 4;
        $quantumDay = $differenceOfDates->format('%d');
        return [$quantumYear, $quantumMonth, $quantumDay];
        
    }
    $time = calculate_time();
    echo "<!DOCTYPE html>\n<html>\n\n<head>\n<meta charset=\"utf-8\">\n<title>Quantum space</title>\n</head>\n\n<body>\n<p>In Quantum space you were absent for " . $time[0] . " years, " . $time[1] . " months, " . $time[2] . " days!</p>\n</body>\n\n</html>\n";
  
?>