<?php
// 7/100
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// function reverseSeq($n)
// {
//    $result = [];

//    for ($i = $n; $i >= 1; $i--) {
//       array_push($result, $i);
//    }

//    return $result;
// }


function reverseSeq($n)
{
   return range($n, 1);
}


var_dump(reverseSeq(5));
