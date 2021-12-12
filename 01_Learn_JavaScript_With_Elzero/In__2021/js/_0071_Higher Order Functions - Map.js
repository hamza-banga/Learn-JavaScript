/** 
 * Higher Order Functions - Map 
 *      Is a Function That Accepts Function As Parameters And/or Return a Function 
 * 
 * Map 
 *  Method Creates A New Array
 *  Popuated with the results of Calling a privided Function on every Element 
 *  in the Calling Array 
 * 
 * Syntax map( callBackFunction(Element, Index, Array) { }, thisArg )
 * 
 *  @Element => The Current Element Being Processed In The Array.
 *  @Index   => The Index Of The Current Element Being Processed In The Array.
 *  @Array   => The Current Array 
 * 
 * Notes :
 *  Map Return A New Array
 * 
 * Example :
 * 
 *  Anonmous Function
 *  Named Function 
 * 
*/

let myNums = [ 1, 2, 3, 4, 5, 6 ];

let newArray = [];
for (i = 0; i < myNums.length; i++){
    newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray); // -> [ 2, 4, 6, 8, 10, 12 ];

// ===========================================================
// Same way Eith Map 
/**
 * (method) Array<number>.map<number>(callbackfunction: (value: number, index: number, array: number[]) => number, thisArg?: any): number[] 
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfunction — A function that accepts up to three arguments. The map method calls the callbackfunction function one time for each element in the array.
 * @param thisArg — An object to which the this keyword can refer in the callbackfunction function. If thisArg is omitted, undefined is used as the this value.
 * 
 */

let addSelf = myNums.map(function (element, index, array) {
    console.log(` Current Element => ${element} `);
    console.log(` Current index => ${index} `);
    console.log(` Array => ${array} `);
    console.log(` This => ${this} `);
    return element + element
}, 10)
console.log(addSelf); // -> [ 2, 4, 6, 8, 10, 12 ];
// ===========================================================
// Arrow Function
let addSelf2 = myNums.map( (element) => element + element);
console.log(addSelf2); // -> [ 2, 4, 6, 8, 10, 12 ];


// We Can Use Named Function 

function addition(ele){
    return ele + ele ;
}

let add = myNums.map(addition);
console.log(add); // -> [ 2, 4, 6, 8, 10, 12 ];