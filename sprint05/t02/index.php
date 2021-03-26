<?php
function checkDivision($beginrange = 1, $endrange = 60){
     for ($number = $beginrange ; $number <= $endrange ; $number++) {

        if($number % 2 === 0 && $number % 3 === 0 && $number % 10 === 0  ){
            echo "The number ${number} is divisible by 2 , is divisible by 3, is divisible by 10\n";
         }
        else if ($number % 2 ==0 && $number % 3 ==0){
            echo "The number ${number} is divisible by 2 , is divisible by 3\n";
         }
        else if ( $number % 10 == 0){
           echo "The number ${number} is divisible by 10\n";
         }
        else if( $number % 3 == 0){
           echo "The number ${number} is divisible by 3\n";
         }
        else if($number % 2 == 0){
        echo "The number ${number} is divisible by 2\n";
         }
        else{
        echo "The number ${number} -\n";

         }
     }
   }
   ?>