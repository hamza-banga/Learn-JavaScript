// Number Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


// =================================================
// Find Smallest Number In All Variablrs And Return Integer
console.log(Math.min(a ,b , c , d,));
// =================================================
// Use Variable a + d One Time To Get The Needed Output
// console.log();   //  -> 10000
console.log(Math.pow(a , Math.floor(d)) );   //  -> 10000
// =================================================
// Get Integer "2" From d Variable With 4 Method 
console.log(Math.round(d))       //  => 2
console.log(Math.floor(d))       //  => 2
console.log(Math.trunc(d))       //  => 2
console.log(Number.parseInt(d))  //  => 2
// =================================================
// Use Variable b +d To Get This Values
// console.log()  // 66.67   => String
// console.log()  // 67   => Number
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2) ); // 66.67   => String
console.log(Math.ceil(b) / Math.ceil(d));  // =>  67  Number
// =================================================
