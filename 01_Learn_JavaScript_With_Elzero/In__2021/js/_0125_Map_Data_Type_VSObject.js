 /**
  * Map Data Type
  * 
  * Syntax : new Map(iterable With Key/Value)
  * -- Map vs Object 
  * 
  * ------ Map => Dose Not Conrain Key By Default 
  * ------ Object => Has Default Key 
  * ------ 
  * ------ Map =>   [ function , object any Primitive Data Type  ]
  * ------ Object => String or Symbol 
  * ------ 
  * ------ Map => Ordered By Insertion 
  * ------ Object => Not 100% Till Now 
  * ------ 
  * ------ Map => Get Items By Size
  * ------ Object => Need To Do Manually 
  * ------ 
  * ------ Map => Can By Directly Iterated 
  * ------ Object => Not Directly  And Need To Use Object.key() and ٍخ ×ى 
  * ------ 
  * ------ Map => Better Performance When add Or Remove Data 
  * ------ Object => Low Performance When Comaring To Map 
  * ------ 
  */

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

// [ 1 ] Default Key

console.log(myObject); 
console.log(myEmptyObject);
console.log(myMap);


myObject = {
    10: "Number",
    "10": "String"
}
let myMapObject = new  Map();
myMapObject.set(10, "Number"),
myMapObject.set("10", "String"),
myMapObject.set(true, "Boolean"),
myMapObject.set({a:1,b:2},"Object"),
myMapObject.set(function doSomeThing(){},"Function"),

console.log(myObject);
console.log(myMapObject);




