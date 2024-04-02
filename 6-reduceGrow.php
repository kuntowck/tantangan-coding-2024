<?php
// 6/100
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow($a)
// {
//    $result = $a[0];

//    for ($i = 1; $i < count($a); $i++) {
//       $result *= $a[$i];
//    }

//    return $result;
// }


// function grow($a)
// {
//    $result = 1;

//    foreach ($a as $x) {
//       $result *= $x;
//    }

//    return $result;
// }


function grow($a)
{
   return array_reduce($a, fn ($acc, $item) => $acc * $item, 1);
}


// $grow = fn ($a) => array_reduce($a, fn ($acc, $item) => $acc * $item, 1);




var_dump(grow([1, 2, 3]));
