/**
 * the weakset is weak,
 * meaning references to object in a WeakSet Are Held Weakly 
 * if no other references to an Object Stored In WeakSet Exist
 * Those Object can be Grebage Collected
 * 
 * Set => can store any data values 
 * Weakset => collection Of objected 
 * 
 * 
 * Set => have Size property
 * WeakSet => Does Not  have Size property
 * 
 * Set => Have Keys, Values , Entires 
 * WeakSet => Does Not Have  clear Keys, Values and Entires 
 * 
 * Set => Can Use ForEach 
 * WeakSet => Can't Use ForEach 
 *  
 * Usege : Store Object And Remove Theme Once They Become inaccessill
 * 
 */
// Type Of Data

let mySet = new Set([1,1,1,2,3,"A","A"]);
console.log(mySet);
// Size
console.log(` Size Of Elements Inside Set Is ${mySet.size} `);

// Value + Keys
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// ForEach 
mySet.forEach(element => {
    console.log(element);
});
// ============================= 

console.log("#".repeat(20));

// Type Of Data
let myWeakSet = new WeakSet([{one:1,tow:2}]);
console.log(myWeakSet);