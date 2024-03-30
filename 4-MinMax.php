<?php
// 4/100
// https://www.codewars.com/kata/577a98a6ae28071780000989

// function maximum($array)
// {
//    $max = $array[0];

//    for ($i = 1; $i < count($array); $i++) {
//       if ($max < $array[$i]) {
//          $max = $array[$i];
//       }
//    }

//    return $max;
// }

// function minimum($array)
// {
//    $min = $array[0];

//    for ($i = 1; $i < count($array); $i++) {
//       if($min > $array[$i]){
//          $min = $array[$i];
//       }
//    }

//    return $min;
// }


function maximum(array $array)
{
   return max(array_map(fn ($e) => $e, $array));
}

function minimum($array)
{
   return min(array_map(fn ($e) => $e, $array));
}

echo maximum([222, 333, 444]);
echo minimum(array(1, 2, 3, 4, 5));
