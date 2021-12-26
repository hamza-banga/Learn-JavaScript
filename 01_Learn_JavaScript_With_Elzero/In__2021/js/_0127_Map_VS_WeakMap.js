/**
 * Map vs WeakMap
 * 
 * WeakMap Allows Grabage Collector To Do its Task But Not Map
 * 
 * 
 * Map     => Key be anything 
 * WeakMap => key can be Object Only 
 */

let mapUser = {theName:"Hamzoooz"};
let myMap = new Map();
myMap.set(mapUser, "Object Value ")
console.log(myMap);

