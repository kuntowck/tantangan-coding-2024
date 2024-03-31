<?php
// 5/100
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// function string_to_array($s){
//    return explode(" ", $s);
//  }

$string_to_array = fn ($s) => explode(" ", $s);

echo $string_to_array("then it hit me,");

