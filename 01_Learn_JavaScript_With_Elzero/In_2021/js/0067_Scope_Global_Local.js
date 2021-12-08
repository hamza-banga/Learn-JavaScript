/**
 * Global Scope And Local Scope
 * 
 */

var a = 1; // This Global Can Access From Any Where
let b = 2; // This Global Can Access From Any Where
let c = 3; // This Global Can Access From Any Where

function localScope() {
    var a = 10; // This Local Can't Call Outside Function 
    let b = 20; // This Local Can't Call Outside Function 
    console.log(` From Function ${a} `) // -> 10 ;
    console.log(` From Function ${b} `) // -> 20 ;
    console.log(` From Function ${c} `) // -> 3 ;
}

console.log(` From Global ${a} `) // -> 1
console.log(` From Global ${b} `) // -> 2

localScope(); // 10 /n 20 