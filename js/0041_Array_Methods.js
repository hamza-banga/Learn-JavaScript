/*
Array Methods
    Length  = Array<string>.length: number || Gets or sets the length of the array.
    unshift = unshift(...items: string[]): number || Elements to insert at the start of the array.
*/
// print("="*80)
let a = "="
// ===========================================================
// length
console.log("%cLength", "font-size:40px ; color:blue")
let  myLength = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myLength);

// (property) Array<string>.length: number
// Gets or sets the length of the array.
// This is a number one higher than the highest index in the array.
console.log(myLength.length); // 5
// Add Items To Array 

// Updata Last Item In Array 
myLength[myLength.length] = "Abdo"; // 5
console.log(myLength);

// Updata Item Befor The Lastest In Array 
myLength[myLength.length - 1] = "Mozamil";
console.log(myLength);

myLength[7] = "Banga";
console.log(myLength);

console.log(a.repeat(60))
// ===========================================================
console.log(" %cunshift" , "color:red ; font-size:40px ")
let  myUnshift = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myUnshift)

// unshift(...items: string[]): number
// Elements to insert at the start of the array.
// Inserts new elements at the start of an array, and returns the new length of the array.
myUnshift.unshift("Hussam", "Nabil");
console.log(myUnshift)
console.log(myUnshift.length)

console.log(a.repeat(60))
// ===========================================================
console.log(" %cPush" , "color:green ; font-size:40px ")
let  myPush = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myPush)

// push(...items: string[]): number
// New elements to add to the array.
// Appends new elements to the end of an array, and returns the new length of the array.
myPush.push("Saeed","Omar")
// ===========================================================

// console.log(a.repeat(60))
// ===========================================================
// console.log(" %cunshift" , "color:red ; font-size:40px ")
// let  myUnshift = ["moazer", "Hassan","Sayed","Ali","Osama"]
// console.log(myUnshift)
// ===========================================================




