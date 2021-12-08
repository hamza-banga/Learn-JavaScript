/**
 * Arrow Function Challenge 
 * 
 */

// [ 1 ] One Statment I Function 
// [ 2 ] Convert To Arrow Function 
// [ 3 ] Print The Output [ Argument May Change ]

let names = function ( ...names){
    return  ` String [${names.join("],[")}] => Done ` ;
};
console.log(names("Osama","Moohamed", "Ali", "Ibrahim"))
// =========================================================
let names2 = ( ...name2 ) => ` String [${name2.join("],[")}] => Done ` ;
console.log(names2("Osama","Moohamed", "Ali", "Ibrahim"))
// =========================================================

// [1] Replace ??? In Return Statment To Get The Output 
// [2] Creat The Same Function With Regular Syntax 
// [3] Use Array Inside The Arguments To Get The Output 

// let myNumbers = [ 20, 50, 10, 60 ];
// let calc = (one, tow, ...nums) = "???";

let myNumbers = [ 20, 50, 10, 60 ];

// Arrow Function
let calc = (one, tow, ...nums) => one + tow + +nums /** We Put Plus Befor nums To Conver To Number */
console.log( calc( 10,20, 50));// 80
// =========================================================
// Regular Function
function calc2(one, tow, ...nums){
    return one + tow + +nums;
};
console.log( calc2(10,myNumbers[0],myNumbers[2])); // 80

// =========================================================