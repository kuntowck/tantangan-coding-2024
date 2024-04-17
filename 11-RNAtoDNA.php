<?php
// 11/100
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function dnaToRna($str)
// {
//    $hasil = '';
//    $length = strlen($str);
//    for ($i = 0; $i < $length; $i++) {
//       if ($str[$i] === 'T') {
//          $hasil .= 'U';
//       } else {
//          $hasil .= $str[$i];
//       }
//    }
//    return $hasil;
// }

// function dnaToRna($str)
// {
//    return join('', array_map(fn ($e) => $e === 'T' ? 'U' : $e, str_split($str)));
// }

function dnaToRna($str)
{
   return str_replace('T', 'U', $str);
}

var_dump(dnaToRna("GCAU"));
