/**
 * Challenge 1 
 */

let a = 10;
let b = "20";
let c = 80;


// // // // console.log( [++a] [+] [+b++] [+] [c++] [-] [a++] )
// // // // console.log(11 + 20 +80 - 11 ); // -> 100
// // console.log(++a + -b + +c++ - -a++ + +a );
// // // // console.log( [++a] - [b] + [c++] + [a++] + [a])
// // // // console.log(10 -20 + 80 + 10 + 10 ); // -> 100
// // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// // // // console.log( [--c] + [b] + [(--a*b++)] - [(b*a)]  + [--a] - [1])
// // // // console.log(80 + 20 + (9*20) - ((20*10) + 9) - 1 ); // -> 100



// console.log(a + b++ + c++ - a++  );
// /**
//  * [++a] [+] [+b++] [+] [c++] [-] [a++]
//  * Value   => [ 11 + 20 +80 - 11 ] -> 100
//  * Explane => preencrement [a] + postencremnet [b] + preencrement [c]- postencrement [a]
//  * 
//  */


// console.log(++a + -b + +c++ - -a++ + +a );
// /**
//  * [++a] - [b] + [c++] + [a++] + [a]
//  * Value   => (10 -20 + 80 + 10 + 10 ); // -> 100
//  * Explane => 
//  * 
//  */

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// /**
//  * [--c] + [b] + [(--a*b++)] - [(b*a)]  + [--a] - [1] )
//  * Value   => 80 + 20 + (9*20) - ((20*10) + 9) - 1 ); // -> 100
//  * Explane => 
//  * 
// */



// /**
//  * Challenge 2
//  */

// let d = "-100" ;
// let e = "20" ;
// let f =30 ;
// let g = true ;

// // close.log();    // 2000
// // close.log();    // 173

// console.log( -d * e  ) // 2000  Done!
// console.log(-d + ++f + ++e * ++g )  // => 173 DONE TOO 
