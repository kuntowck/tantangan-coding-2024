<?php
// 3/100
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// function countsheep($num)
// {
//    $result = "";
//    for ($i = 1; $i <= $num; $i++) {
//       $result .= "{$i} sheep...";
//    }

//    return $result;
// }

function countsheep($num) {
   return implode("", array_map(function ($i) { return "$i sheep..."; }, range(1, $num)));

   // return implode('', array_map(function ($e) {return '$e sheep...';}, range(1, $num)));
}

echo countsheep(3);
