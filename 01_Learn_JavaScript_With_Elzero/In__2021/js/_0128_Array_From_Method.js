/**
 * Array Methods 
 * -- Array.form[iterable, MapFunction, This ]
 * ----- Variable
 * ----- String Numbers
 * ----- Set 
 * ----- Using The Map Function 
 * ----- Arrow Funcrion 
 * ----- Shorten The Method + Use Arguments
 */

console.log(Array.from("Hamzoooz")); // => ['H', 'a', 'm','z', 'o', 'o','o','z']
console.log(Array.from(12345)); //=> []
console.log(Array.from("12345")); // => [ '1', '2', '3', '4', '5' ]

console.log(Array.from("12345", function(n){
    return +n + +n; // => [ 2, 4, 6, 8, 10 ]
} ));

console.log(Array.from("12345", n =>  +n + +n )); // => [ 2, 4, 6, 8, 10 ] 

// Get distinguishing, distinctive, diacritical, differential, discriminatory, discriminative, characteristic, discerning, peculiar, specific, special, perceptive, percipient, judicial
let myArray = [1,1,1,1,2,2,3,4,2];

let mySet = new Set(myArray)
console.log(mySet);
console.log([...new Set(myArray)]); // Future 

