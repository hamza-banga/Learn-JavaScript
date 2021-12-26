/**
 * Set Data Type
 * Syntax : new set(Itrable)
 * -- Object To Store Unique Values
 * -- Cannot Access Element By Index
 * 
 * Properties:
 * -- Size
 * 
 * Methods :
 * -- add
 * -- delete
 * -- clear
 * -- has
 * 
*/

let myData = [1, 1, 1, 2, 3];

// let myUniqeData = new Set( [1, 1, 1, 2, 3, "A"] );
// let myUniqeData = new Set( myData );
// let myUniqeData = new Set().add(1).add(1).add(1).add(2).add(3).add("A");

// let myUniqeData = new Set();
// myUniqeData.add(1).add(1).add(1).add(2).add(3).add("A");

let myUniqeData = new Set();
myUniqeData.add(1).add(1).add(1);
myUniqeData.add(2).add(3).add("A");


console.log(` Is Has A => ${myUniqeData.has("a".toUpperCase())} `);

console.log(myData); // => [ 1, 1, 1, 2, 3 ]
console.log(myUniqeData); // =>  { 1, 2, 3 }

console.log(myUniqeData.size); // => 3

console.log(myData[0]); // => 1
console.log(myUniqeData[0]); // =>  undefined

console.log(myUniqeData.delete(2)) // => true
console.log(myUniqeData.delete(4)) // => false
myUniqeData.delete(2)

console.log(myUniqeData); // =>  { 1, 3 }
console.log(myUniqeData.size); // => 2

myUniqeData.clear()
console.log(myUniqeData); // =>  { 1, 3 }
console.log(myUniqeData.size); // => 2
