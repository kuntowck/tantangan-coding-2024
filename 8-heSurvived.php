<?php
// 8/100
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(int $bullets, int $dragons)
// {
//    if ($bullets / 2 >= $dragons) {
//       return true;
//    } else {
//       return false;
//    }
// }

function hero(int $bullets, int $dragons)
{
   return $bullets / 2 >= $dragons;
}

var_dump(hero(4,5));
