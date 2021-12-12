
// ==========================
// Convert Array To String
// ==========================
//  [01] toString()        (method) Array<string>.toString(): string || Returns a string representation of an array.
//  [02] toLocaleString()  (method) Array<string>.toLocaleString(): string ||  Converts a date and time to a string by using the current or specified locale.
//  [03] join()            (method) Array<string>.join(separator?: string): string ||  A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. Adds all the elements of an array into a string, separated by the specified separator string.

// ==========================
// Remove & Add Items To Array 
// ==========================

//  [04] Array.length Array[Array.length] = "String";
//  [05] push()       (method) Array<string>.push(...items: string[]): number  || Appends new elements to the end of an array, and returns the new length of the array.
//  [06] unshift()    (method) Array<string>.unshift(...items: string[]): number || Inserts new elements at the start of an array, and returns the new length of the array.
//  [07] splice()     (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload) || Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//  [08]    


// ==========================
// 
// ==========================
//  [09]    
//  [10]    





var friends = [
    "Hassan",
    "Moazer",
    "Ahmed",
    "Buga",
    "Osama"
];

// ==================================================
//      toString();
// ==================================================
console.log(" %ctoString();", "font-size:30px ; color:red")
console.log(friends);           // Array || -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']
friends = friends.toString();   // Convert it To String
console.log(friends);           // String
friends = friends.toLocaleString();  // Convert it To Lacale String
console.log(friends);           // String



// ==================================================
//      toLocaleString();
// ==================================================
console.log(" %ctoLocaleString();", "font-size:30px ; color:red")
// ==================================================
var myDate      = new Date();           // Date 
console.log(myDate);
// console.log( typeof myDate )
myString    = myDate.toString();    // String
console.log(myDate );        //  -> 
// console.log( typeof myDate )
myLocalString = myDate.toLocaleString(); // Locale String
console.log(myLocalString );        //  -> 
// console.log( typeof myDate )

// ==================================================
//      join();
// ==================================================
var friends = [
    "Hassan",
    "Moazer",
    "Ahmed"
];
console.log(" %cjoin();", "font-size:30px ; color:red")

console.log(friends); //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']
friends =  friends.join("-");
console.log(friends);


console.log(("=".repeat(50)));
console.log(" %cArray[Array.length]", "font-size:30px ; color:blue")
// ==================================================
//      Array[Array.length]
// ==================================================

var friends = [
    "Hassan",
    "Moazer",
    "Ahmed",
    "Buga",
    "Osama"
];

console.log(friends);  //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']
friends[friends.length] = "Banga" 
console.log(friends);   //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama', 'Banga']



console.log(" %cpush() ", "font-size:30px ; color:blue")
// ==================================================
//      push()
// ==================================================

var friends = [
    "Hassan",
    "Moazer",
    "Ahmed",
    "Buga",
    "Osama"
];

// (method) Array<string>.push(...items: string[]): number
// Appends new elements to the end of an array, and returns the new length of the array.
// @param items — New elements to add to the array.
console.log(friends);   //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']
friends.push("Ali") // => 
console.log(friends); //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama', 'Ali']



console.log(" %cunshift() ", "font-size:30px ; color:blue")
// ==================================================
//      unshift()
// ==================================================

var friends = [
    "Hassan",
    "Moazer",
    "Ahmed",
    "Buga",
    "Osama"
];

// (method) Array<string>.unshift(...items: string[]): number
// Inserts new elements at the start of an array, and returns the new length of the array.
// @param items — Elements to insert at the start of the array.

console.log(friends);   //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']
friends.unshift("Ali");  
console.log(friends);   //  -> ['Ali', 'Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']



console.log(" %csplice() ", "font-size:30px ; color:blue")
// ==================================================
//      splice()
// ==================================================

var friends = [
    "Hassan",
    "Moazer",
    "Ahmed",
    "Buga",
    "Osama"
];

// (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.

console.log(friends);   //  -> ['Hassan', 'Moazer', 'Ahmed', 'Buga', 'Osama']
friends.splice(3, 0, "Ali", "Hamzoooz");  
console.log(friends);   //  ->  ['Hassan', 'Moazer', 'Ahmed', 'Ali', 'Hamzoooz', 'Buga', 'Osama']










console.log(("=".repeat(50)));

