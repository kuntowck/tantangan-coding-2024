<?php
// 10/100
// https://www.codewars.com/kata/5861d28f124b35723e00005e

function zeroFuel($distanceToPump, $mpg, $fuelLeft)
{
   return $fuelLeft * $mpg >= $distanceToPump;
}

var_dump(zeroFuel(100, 50, 1));
