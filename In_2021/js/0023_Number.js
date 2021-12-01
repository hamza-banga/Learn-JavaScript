/**
    var Number: NumberConstructor
    (value?: any) => number
    An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
 * 
 * Number
 *      Double Precisin
 *      Syntactic Sugar "_"   1000000 == 1_000_000
 * 
 * With Decimal
 * Number + BigInt
 * Number Min Value
 * Number Max Value
 */

// All This Get 1000000
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10**6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.00);

console.log(Number("1000000"));           // => number -> 100000

console.log(Number.MAX_SAFE_INTEGER);  // -> 9007199254740991
console.log(Number.MAX_VALUE);         // -> 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 22 );   // -> 1.7976931348623157e+308