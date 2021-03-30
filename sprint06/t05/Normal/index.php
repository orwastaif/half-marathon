<?php
namespace space\Normal;
use DateTime;

  function calculate_time(){
      $startDate = new DateTime("1939-january-01");
      $currentDate = new DateTime("now");
      return date_diff($currentDate, $startDate);

  }