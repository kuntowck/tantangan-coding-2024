<?php
// 2/100
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy($x, $n)
// {
//    $z = [];

//    for ($i = 1; $i <= $n; $i++) {
//       // array_push($z, $i * $x);
//       $z[] = $i * $x;
//    }

//    return $z;
// }

function countBy($x, $n) {
   return range($x, $x * $n, $x);
}


echo implode(countBy(2, 5));
