/*
Anonymous Function 
Calling Named Function VS Anonymous Function 
Argument To Other Function 
Task Without Name 
SetTimeout
Try To Make Advanced 
BY @hamzoooz
*/

// ====================================================
// console.log( calculator( 10, 20 ) ); => Get Error Becuse Andefined Variable 

//  Thiss Anonymous Function Without Name 
let calculator = function ( num1, num2 ) {
    return num1 + num2 ;
}
console.log( calculator( 10, 20 ) ); // => 30

// ====================================================
// This Alsoe Anonymous Function Can Use Direct
document.getElementById("show").onclick = function () {
    console.log( 10 + 20 ) ; // => 30
}
// ====================================================
// setTimeFunction With Anonymous Function 
setTimeout( function () {
    console.log("Good After 2 Seconds ")
} ,2000 ); // Dleay 2 Seconds

// ====================================================
// Other Try To Make Advanced With Anonymous Function
// ====================================================
// Test To Get Input From User And Do Action
let numone = document.getElementById("one").value
let numtow = document.getElementById("tow").value;
document.getElementById("calc").onclick = function () {
    console.log( numone + numtow ); // => num + num
}

// ====================================================
// We Can Call Direct
function sayHello() {
    console.log(` Hello Osama `) // -> Hello Osama 
}
document.getElementById("sayHello").onclick = sayHello() ;

// ====================================================
// Test To Get Input From User And Do Action
// Not Worh ( @hamzoooz  )
let input = document.getElementById("input").value;
document.getElementById("sayHello").onclick = function () {
    console.log( ` Hello ${input}` )
}

document.getElementById("button").onclick = function () {
    console.log( input ); // => input
}