/**
 * Map 
 *  Swap Case Numbers
 *  Inverted Numbers
 *  Ignore Number Value || Boolean Value 
 * 
 */


let swappingCases = "eLZERo";
let invertedNumber = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";
// =================================================
let swp = swappingCases.split("").map(function(ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ;
} ).join("");
console.log(swp); // -> ElzerO

// =================================================
// Arrow Function
let swpArrow = swappingCases.split("").map( e =>  e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join("");
console.log(swp); // -> ElzerO

// =================================================
let inv = invertedNumber.map(function(ele) {
    return -ele;
});
console.log(inv); // -> [-1, 10, 20, -15, -100, 30]

// =================================================
let invArrow = invertedNumber.map( (ele) => -ele );
console.log(inv); // -> [-1, 10, 20, -15, -100, 30]

// =================================================
let ign = ignoreNumbers.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
} ).join("");
console.log(ign); // -> Elzero

// =================================================
let ignArrow = ignoreNumbers.split("").map( (ele) => isNaN(parseInt(ele)) ? ele : "" ).join("");
console.log(ign); // -> Elzero
// =================================================

// let ingOther = ignoreNumbers.split("").map(function(e) {
//     let listString = [];
//     for( i =0; i < ignoreNumbers.length; i++){
        
//         if (typeof e === "string" ){
//             listString = listString
//         }
//     }
// })

// =================================================