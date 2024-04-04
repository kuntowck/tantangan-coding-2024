<?php
// 9/100
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// function smash(array $words)
// {
//    $result = '';
//    for ($i = 0; $i < count($words); $i++) {
//       $result .= $words[$i];

//       if ($i != count($words) - 1) 
//          $result .= ' ';
      
//    }
   

//    return $result;
// }

function smash(array $words)
{
   return join(" ", $words);
}

var_dump(smash(["hello", "world"]));
