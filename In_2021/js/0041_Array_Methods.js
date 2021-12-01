/*
Array Methods
    Length()       = Array<string>.length: number || Gets or sets the length of the array.
    unshift()      = Array<string>.unshift(...items: string[]): number || Elements to insert at the start of the array.
    push()         = Array<string>.push(...items: string[]): number || New elements to add to the array.
    shift()        = Array<string>.shift(): string || Removes the first element from an array and returns it.
    pop()          = Array<string>.pop(): string || Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    indexOf()      = Array<String>.indexOf(searchString: string, position?: number): number || Returns the position of the first occurrence of a substring.
    lastIndexOf()  = Array<string>.lastIndexOf(searchElement: string, fromIndex?: number): number || The value to locate in the array.
    include()      = Array<String>.includes(searchElement: string, fromIndex?: number): boolean
    sort()         = Array<String>.sort(compareFn?: (a: string, b: string) => number): string[] || Sorts an array in place. This method mutates the array and returns a reference to the same array.
    revers()       = Array<string>.reverse(): (string | number)[] || Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
    slice()        = Array<String>.slice(start?: number, end?: number): (string | number)[]  ||  Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
    splice()       =  Array<string | number>.splice(start: number, deleteCount?: number): (string | number)[] (+1 overload)  || Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    concat()       = Array<string>.concat(...items: ConcatArray<string>[]): string[] (+1 overload) || Combines two or more arrays. This method returns a new array without modifying any existing arrays.
    join()         = Array<string>.join(separator?: string): string || Adds all the elements of an array into a string, separated by the specified separator string.


*/
// print("="*80)
let a = "="
// =========================
// === [ 01 ] = length =====
// =========================

console.log("%cLength" , "font-size:20px ; color:blue")
let  myLength = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myLength);

// (property) Array<string>.length: number
// Gets or sets the length of the array.
// This is a number one higher than the highest index in the array.
console.log(myLength.length); // 5

// Add Items To Array 
myLength[myLength.length] = "Abdo"; // 5
console.log(myLength);

// Updata Last Item In Array 
myLength[myLength.length - 1] = "Mozamil";
console.log(myLength);

myLength[7] = "Banga";
console.log(myLength);

// =========================
// === [ 02 ] = unshift ====
// =========================
console.log(a.repeat(60))
console.log(" %cunshift()" , "color:red ; font-size:20px ")
let  myUnshift = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myUnshift) // =>   ["moazer", "Hassan","Sayed","Ali","Osama"]

// unshift(...items: string[]): number
// Elements to insert at the start of the array.
// Inserts new elements at the start of an array, and returns the new length of the array.
myUnshift.unshift("Hussam", "Nabil");
console.log(myUnshift)  // =>  [ "Hussam", "Nabil", "moazer", "Hassan", "Sayed", "Ali", "Osama" ]

// =========================
// === [ 03 ] = push =======
// =========================
console.log(a.repeat(60))
console.log(" %cPush()" , "color:red ; font-size:20px ")
let  myPush = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myPush)  // =>  [ "moazer", "Hassan", "Sayed", "Ali", "Osama" ];

// push(...items: string[]): number
// New elements to add to the array.
// Appends new elements to the end of an array, and returns the new length of the array.
myPush.push("Saeed","Omar")
console.log(myPush)  // =>  [ "moazer", "Hassan", "Sayed", "Ali", "Osama", "Saeed", "Omar" ];

// =========================
// === [ 04 ] = shift ======
// =========================
console.log(a.repeat(60))
console.log(" %cshift()" , "color:red ; font-size:20px ")
let  myShift = ["moazer", "Hassan","Sayed","Ali","Osama"]
console.log(myShift) //  => [ "moazer", "Hassan", "Sayed", "Ali", "Osama" ];
// (method) Array<string>.shift(): string
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
myShift.shift()
console.log(myShift) // =>  [ "Hassan", "Sayed", "Ali", "Osama" ]

// =========================
// === [ 05 ] = pop ========
// =========================
console.log(a.repeat(60))
console.log(" %cpop()" , "color:red ; font-size:20px ")
let  myPop = ["moazer", "Hassan","Sayed","Ali","Osama"];
console.log(myPop) // =>  ["moazer", "Hassan","Sayed","Ali","Osama"];

// (method) Array<string>.pop(): string
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
myPop.pop()
console.log(myPop) // =>  [ "moazer", "Hassan", "Sayed", "Ali" ];

// =========================
// === [ 06 ] = indexOf ====
// =========================
console.log(a.repeat(60))
console.log("%cIndexOf", "font-size:20px ; color:yellow")

let = myIdexOf = ["moazer", "Osama" , "Hassan","Sayed","Ali","Osama"];
console.log(myIdexOf);  // =>  ["moazer", "Hassan","Sayed","Ali","Osama"];

// (method) String.indexOf(searchString: string, position?: number): number
// Returns the position of the first occurrence of a substring.
// @param searchString — The substring to search for in the string
// @param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
console.log(myIdexOf.indexOf("Osama"))  // => 1

// =========================
// == [ 07 ] = lastIndexOf =
// =========================
console.log(a.repeat(60))
console.log("%cmyLastIdexOf", "font-size:20px ; color:yellow")

let = myLastIdexOf = ["moazer" , "Osama", "Hassan","Sayed","Ali","Osama"];
console.log(myLastIdexOf);  // =>  ["moazer", "Hassan","Sayed","Ali","Osama"];

// lastIndexOf(searchElement: string, fromIndex?: number): number
// The value to locate in the array.
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
console.log(myLastIdexOf.lastIndexOf("Osama") )  // => 5

// =========================
// == [ 08 ] = include =====
// =========================
console.log(a.repeat(50));
console.log("%cInclude", "font-size:20px ; color:yellow")
let myInclude = ["Moazer","Osama","Hassan","Hamza","Banga"];
console.log(myInclude); //  ["Moazer","Osama","Hassan","Hamza","Banga"];


// includes(searchElement: string, fromIndex?: number): boolean
// The element to search for.
// Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myInclude.includes("Moazer") ) // -> True


// =========================
// == [ 09 ] = Sort() ======
// =========================
console.log(a.repeat(50));
console.log("%cSorting", "font-size:20px ; color:lightblue")
let mySort = ["Moazer","Osama","10","90",-10 , 20 , 1000 ];
console.log(mySort); // [ "Moazer", "Osama", "10", "90", -10, 20, 1000 ]

// sort(compareFn?: (a: string, b: string) => number): string[]
// Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
// [11,2,22,1].sort((a, b) => a - b)
// Sorts an array in place. This method mutates the array and returns a reference to the same array.

mySort.sort()
console.log(mySort)  // -> [ -10, "10", 1000, 20, "90", "Moazer", "Osama" ];

// =========================
// == [ 10 ] = revers ======
// =========================
console.log(a.repeat(50));
console.log("%cٌRevers", "font-size:20px ; color:lightblue")
let myRevers = ["Moazer","Osama","10","90",-10 , 20 , 1000 ];
console.log(myRevers); // [ "Moazer", "Osama", "10", "90", -10, 20, 1000 ]

// (method) Array<string | number>.reverse(): (string | number)[]
// Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
mySort.reverse()
console.log(myRevers)  // -> [ -10, "10", 1000, 20, "90", "Moazer", "Osama" ]
// console.log(`%c${myRevers}`,`font-size:35px`)  // -> [ -10, "10", 1000, 20, "90", "Moazer", "Osama" ]

// =========================
// == [ 11 ] = Slice =======
// =========================
console.log(a.repeat(50));
console.log("%cSlice", "font-size:20px ; color:green")

let myslice = ["Moazer","Osama",100 ,"90",-10 , 20 , 1000 ];
console.log(myslice) // -> ["Moazer","Osama","10","90",-10 , 20 , 1000 ];

// (method) Array<string | number>.slice(start?: number, end?: number): (string | number)[]
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

console.log(myslice.slice(0,3)) // -> [ "Moazer", "Osama", 100 ];


// =========================
// == [ 12 ] = Splice ======
// =========================
console.log(a.repeat(50));
console.log("%cSplice", "font-size:20px ; color:green")

let mysplice = [-10 , 20  ,"Moazer","Osama" ,"90" ];
console.log(mysplice) // -> ["Moazer","Osama","10","90",-10 , 20 , 1000 ];

// (method) Array<string | number>.splice(start: number, deleteCount?: number): (string | number)[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.

console.log(mysplice.splice( 2, 2 , "Hamzoooz" , "Sameer", "Mohammed" )); // -> 
console.log(mysplice) // -> ["Moazer","Osama","10","90",-10 , 20 , 1000 ];


// =========================
// == [ 13 ] = concat ======
// =========================
console.log(a.repeat(50));
console.log("%cConcat", "font-size:20px ; color:#FFFFFF")

let myFrinds1 = ["Moazer","Osama"];
let myFrinds2 = ["Hamza","Hassan"];
let myFrinds3 = [1, 55 ];

// (method) Array<string>.concat(...items: ConcatArray<string>[]): string[] (+1 overload)
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// @param items — Additional arrays and/or items to add to the end of the array.

let allFrinds = myFrinds1.concat(myFrinds2,myFrinds3);
console.log(allFrinds) // ->  [ "Moazer", "Osama", "Hamza", "Hassan", "Hamza", "Hassan" ];
allFrinds = myFrinds1.concat(myFrinds2,myFrinds3, "Ali", ["Ahmed", "Ameer"] );
console.log(allFrinds) // ->  [ "Moazer", "Osama", "Hamza", "Hassan", 1, 55, "Ali", "Ahmed", "Ameer" ]

// =========================
// == [ 14 ] = Join ========
// =========================
console.log(a.repeat(50));
console.log("%cJoin", "font-size:20px ; color:#FFFFFF")

let allFrinds2 = [ "Moazer", "Osama", "Hamza", "Hassan", 1, 55, "Ali", "Ahmed", "Ameer" ]
console.log(allFrinds) // ->  [ "Moazer", "Osama", "Hamza", "Hassan", "Hamza", "Hassan" ];

// (method) Array<string>.join(separator?: string): string
// Adds all the elements of an array into a string, separated by the specified separator string.
// @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

console.log(allFrinds.join(""));     // -> MoazerOsamaHamzaHassan155AliAhmedAmeer
console.log(allFrinds.join());       // ->  Moazer,Osama,Hamza,Hassan,1,55,Ali,Ahmed,Ameer
console.log(allFrinds.join(" || ")); // ->  Moazer || Osama || Hamza || Hassan || 1 || 55 || Ali || Ahmed || Ameer 0



