/**
 * 
 * Spread peratr => ...Iterable
 * "Allw Iterable T Expand In Pace "
 */

// Spread With String => Expand String 

console.log("Hamzoooz"); //-> Hamzoooz
console.log(..."Hamzoooz"); //-> H a m z o o o z
console.log([..."Hamzoooz"]); //-> Array(8) [ "H", "a", "m", "z", "o", "o", "o", "z" ]


// Concatenate Arrays
let myArray1 = [1, 2, 3 ];
let myArray2 = [4, 5, 6 ];

let allArrays = [...myArray1, ...myArray2]; 
console.log(allArrays); // -> [ 1, 2, 3, 4, 5, 6 ]

// Copy Array

let copiedArray = [...allArrays];
console.log(copiedArray); // -> [ 1, 2, 3, 4, 5, 6 ]

let allFrinends = ["Moazer", "Osama", "Mozamil"];
let thisYearFriends = [ "Hassan", "Amer" ];

allFrinends.push("Samih", "Mahamoud");
console.log(allFrinends); // -> [ 'Moazer', 'Osama', 'Mozamil', 'Samih', 'Mahamoud' ]
allFrinends.push(thisYearFriends);
console.log(allFrinends); // -> [ 'Moazer', 'Osama', 'Mozamil', [ 'Hassan', 'Amer' ] ]
allFrinends.push(...thisYearFriends);
console.log(allFrinends); // -> [ 'Moazer', 'Osama', 'Mozamil', 'Hassan', 'Amer' ]

// Used With Number Math Object 

let myNumbers = [10, 20, 30, 5, 1000, 200, 1, -122];
console.log(Math.max(myNumbers)); // -> NaN
console.log(Math.max(10, 20, 30, 5, 1000, 200, 1, -122));
console.log(Math.max(...myNumbers));1000

// Spread With Object => Merge Object 

let objectOne = {
    a:1,
    b:2,
}

let objectTow ={
    c:3,
    d:4,
}
console.log({...objectOne,...objectTow, e:5 }); // -> { a: 1, b: 2, c: 3, d: 4, e: 5 }



