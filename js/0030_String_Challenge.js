/**
 * String Challenge 
 * All Solutions Must Be In One Chain
 * You Can Use Concatenate 
 */

let a = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log();  // Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3,6) ); // -> Zero
 
// 8 H 
console.log(a.slice(-4,-3).toUpperCase().repeat(8) );  // -> HHHHHHHH

// Return Array -> [Elzero]
console.log(a.slice(0, 6).split(0,6));  

// Use Only "substr" Method + Template Literals In Your Solution 
// console.log();  // Elzero School 

console.log( a.substr(0,6) +" " + a.substr(11,6) ); // Elzero School

// Solution Must Be Dynamic And String May Change 
console.log(); // eLZERO WEB SCHOOl
 
console.log(a.charAt(0).toLowerCase() + a.substr(1 ,a.length-2 ).toUpperCase() + a.charAt(a.length-1).toLowerCase() );  // eLZERO WEB SCHOOl 

 