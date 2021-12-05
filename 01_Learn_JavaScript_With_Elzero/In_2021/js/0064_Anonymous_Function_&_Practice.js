/*
Anonymous Function 
Calling Named Function VS Anonymous Function 
Argument To Other Function 
Task Without Name 
SetTimeout
*/

// ====================================================
// console.log( calculator( 10, 20 ) ); => Get Error Becuse Andefined Variable 
let calculator = function ( num1, num2 ) {
    return num1 + num2 ;
}

console.log( calculator( 10, 20 ) ); // => 30

// ====================================================
document.getElementById("show").onclick = function () {
    console.log( 10 + 20 ) ; // => 30
}
// ====================================================
// setTimeFunction
setTimeout( function () {
    console.log("Good After 2 Seconds ")
} ,2000 ); // Dleay 2 Seconds

// ====================================================
// Test To Get Input From User And Do Action

let numone = document.getElementById("one").value
let numtow = document.getElementById("tow").value;

document.getElementById("calc").onclick = function () {
    console.log( numone + numtow ); // => num + num
}
