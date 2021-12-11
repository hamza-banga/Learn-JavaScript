/**
 * Filter
 * 
 *  Method Creat A New Array 
 *  With All Elements That pass The Test Implemented By The Provided Function.
 * 
 * Syntax filter(callBackFunction(Element,Index, Array){ }, thisArg)
 * 
 * @param Element => The Current Element Being Processid In The Array .
 * @param Index  => The Index Of The Current Element Being Processid In The Array . 
 * @param Array => TheCurrent Array .
 */

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
 */

let a = ["hamzoooz","Hassan","Moazer","Osama", "Mozamil"]; 
let myFilter =  a.filter(function(ele) {
    return ele.startsWith("H")
});
console.log(myFilter); // -> [ 'Moazer', 'Mozamil' ]

// Need Fix
// ===========================================================
console.log("=".repeat(30) )
// ===========================================================
// Try By Map
// let myMap = a.map(function(el){
//     return el.startsWith("M") === "M" ? el : "";
// });
// console.log(myMap);
// ===========================================================
let b = [11, 20, 2, 5, 17, 10];

let add = b.filter(function(ele){
    return ele % 2 === 0 ? true : false ;
});
console.log(add);
// ===========================================================
console.log("From Arrow ")
let addArrow = b.filter((ele)  => ele % 2 === 0 ? true : false );
console.log(addArrow);
// ===========================================================
console.log("=".repeat(30) )
// Try By Map
console.log("From Add Map Method ")
let addMap = b.slice("").map(function(el){
    return el % 2 === 0 ? el : "";
}).join(" ");
console.log(addMap);
// ===========================================================
// ===========================================================
