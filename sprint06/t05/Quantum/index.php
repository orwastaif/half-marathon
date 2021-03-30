<?php
    namespace Space\Quantum;
    use DateTime;
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
?>