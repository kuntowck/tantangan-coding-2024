<?php
// 12/100
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// function rpc($p1, $p2)
// {
//    if ($p1 === $p2) return 'Draw!';
//    if ($p1 === 'rock' && $p2 === 'scissors') {
//       return 'Player 1 won!';
//    } else if ($p1 === 'scissors' && $p2 === 'paper') {
//       return 'Player 1 won!';
//    } else if ($p1 === 'paper' && $p2 === 'rock') {
//       return 'Player 1 won!';
//    } else {
//       return 'Player 2 won!';
//    }
// }

// function rpc($p1, $p2)
// {
//    if ($p1 === $p2) return 'Draw!';
//    if ($p1 === 'rock' && $p2 === 'scissors' or $p1 === 'scissors' && $p2 === 'paper' or $p1 === 'paper' && $p2 === 'rock') {
//       return 'Player 1 won!';
//    } else {
//       return 'Player 2 won!';
//    }
// }

// function rpc($p1, $p2)
// {
//    if ($p1 === $p2) return 'Draw!';
//    return ($p1 === 'rock' && $p2 === 'scissors' or $p1 === 'scissors' && $p2 === 'paper' or $p1 === 'paper' && $p2 === 'rock') ? 'Player 1 won!' : 'Player 2 won!';
// }

function rpc($p1, $p2)
{
   $rules = [
      'rock' => 'scissors',
      'scissors' => 'paper',
      'paper' => 'rock'
   ];

   if ($p1 === $p2) {
      return 'Draw!';
   }

   return 'Player ' . ($rules[$p1] === $p2 ? '1' : '2') . ' won!';
}

var_dump(rpc("rock", "scissors"));
