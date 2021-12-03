// Array Challenges

let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// ===========================================================
// console.log(my); // ->  ["Osama", "Elham", "Mazero", "Ahmed"]
counter = my.slice(zero, counter).unshift("Banga")
console.log(my.slice(zero,counter).reverse() ) // -> ["Osama", "Elham", "Mazero", "Ahmed"]
// ===========================================================
// console.log(my.slice("????")); // -> ["Elham", "Mazero"]
zero = my.slice(zero,counter).shift()
zero = [zero]
counter = my.slice(zero, counter)
counter.shift()
console.log(my.slice(zero.length,counter.length).reverse()) // -> ["Elham", "Mazero"]
// ===========================================================
// console.log(); // ->  "Elzero"
Elzero = "Elzero"
console.log(`"${Elzero}"`)
// ===========================================================
// console.log(); // -> "rO"
zero = zero.length
counter =  counter.unshift("hamzoooz")
my1 = my[zero][counter] // r
counter = my.slice(zero,counter) // -> [ "Mazero", "Elham", "Osama" ]
counter = counter.push("hamzouy", "Ali") // 5
my2 = (my[zero][counter]).toUpperCase(); // -> O
rO = my3 = my1.concat(my2); //  -> rO

console.log(`"${rO}"`);  // "rO" 

