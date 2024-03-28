<?php
// 1/100
// https://www.codewars.com/kata/515e271a311df0350d00000f

function square_sum($numbers) {
   $result = 0;
   foreach ($numbers as $number){
      $result += $number * $number;
   }

   return $result;
}

// function square_sum($numbers) {
//    $x = array_map(function($e) {
//       return $e * $e;
//    }, $numbers);

//    $result = array_sum($x);

//    return $result;
// }

// function square_sum($numbers)
// {
//    return array_sum(array_map(function($e){return $e * $e;}, $numbers));
// }

echo square_sum([0, 3, 4, 5]);
