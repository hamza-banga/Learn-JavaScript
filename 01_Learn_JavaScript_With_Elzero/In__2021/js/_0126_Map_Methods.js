/**
 * Map Data Type 
 * Methods 
 * -- set
 * -- get
 * -- delete
 * -- clear
 * -- has
 * 
 * Properties
 * -- Size
 */
let myMap = new Map([
    [10,"nubmer"],
    ["10","String"],
    [false,"Boolean"]
]);

// myMap.set(10,"nubmer");
// myMap.set("10","String");

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("10"));
console.log(myMap.get(false));

console.log(myMap.has(false)); // -> true 


console.log(myMap.size); // -> 3
console.log(myMap.delete(10)); // True Don Delete 
console.log(myMap.size);// -> 2


myMap.clear();
console.log(myMap.size);// -> 

