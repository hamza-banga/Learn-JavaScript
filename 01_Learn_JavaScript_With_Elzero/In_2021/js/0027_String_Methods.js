/*
String Methods 
    Access With Index

    [ 001 ] Access With CharAt() || => String.charAt(pos: number): string   || -> Returns the character at the specified index.
    [ 002 ] Lenght()             || => String.length: number                || -> Returns the length of a String object.
    [ 003 ] trim()               || => String.trim(): string                || -> Removes the leading and trailing white space and line terminator characters from a string.
    [ 004 ] toUpperCase()        || => String.toUpperCase(): string         || -> Converts all the alphabetic characters in a string to uppercase.
    [ 005 ] toLowerCase()        || => String.toLowerCase(): string         || -> Converts all the alphabetic characters in a string to lowercase.
    [ 006 ] IndexOf()            || => String.indexOf(searchString: string, position?: number): number -> || =>  The substring to search for in the string Returns the position of the first occurrence of a substring.
    [ 007 ] lastIndexOf()        || => String.lastIndexOf(searchString: string, position?: number): number  || =>  Returns the last occurrence of a substring in the string. @param searchString — The substring to search for. @param position — The index at which to begin searching. If omitted, the search begins at the end of the string.
    [ 008 ] slice()              || => String.slice(start?: number, end?: number): string  | -> The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. Returns a section of a string.
    [ 009 ] repeat()             || => String.repeat(count: number): string        || -> Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned. 
    [ 010 ] split()              || => String.split(separator: string | RegExp, limit?: number): string[] (+1 overload) || -> Split a string into substrings using the specified separator and return them as an array. @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. @param limit — A value used to limit the number of elements returned in the array.
    [ 011 ] supstring()          || => String.substring(start: number, end?: number): string || -> Returns the substring at the specified location within a String object.
    [ 012 ] include()            || => String.includes(searchString: string, position?: number): boolean  || -> Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
    [ 013 ] startsWith()         || => String.startsWith(searchString: string, position?: number): boolean  || -> Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
    [ 014 ] endswith()           || => String.endsWith(searchString: string, endPosition?: number): boolean  || -> Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
    
    
    
    
    
    
    
    
    chain-Methods           => String.trim().charAt(2).toUpperCase()

*/

let theName = "Ahmed";

console.log(theName);      // -> Ahmed 
console.log(theName[1]);  // -> h 

// (method) String.charAt(pos: number): string
// Returns the character at the specified index.
// @param pos — The zero-based index of the desired character.

console.log(theName.charAt(1));  // -> h 
console.log(theName.charAt(5));  // -> <empty string>

// (property) String.length: number
// Returns the length of a String object.
console.log(theName.length);  // ->  5
let theName2 = "   Ahmed    ";
console.log(theName2.length);  // ->  12

// trim(): string
// Removes the leading and trailing white space and line terminator characters from a string.
console.log(theName.trim());  // ->  

// (method) String.toUpperCase(): string
// Converts all the alphabetic characters in a string to uppercase.
console.log(theName.toUpperCase());  // ->  5

// (method) String.toLowerCase(): string
// Converts all the alphabetic characters in a string to lowercase.
console.log(theName.toLowerCase());  // ->  5

let a =  "Elzero Web School ";

// indexOf(searchString: string, position?: number): number
// The substring to search for in the string
// Returns the position of the first occurrence of a substring.

console.log(a.indexOf("Web"))  // -> 7 
console.log(a.indexOf("Web", 8 ))  // -> -1

// (method) String.lastIndexOf(searchString: string, position?: number): number
// Returns the last occurrence of a substring in the string.
// @param searchString — The substring to search for.
// @param position — The index at which to begin searching. If omitted, the search begins at the end of the string.
console.log(a.lastIndexOf("o"))     // -> 15
console.log(a.lastIndexOf("Web", 8 ))  // -> 7

// slice(start?: number, end?: number): string
// The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
// Returns a section of a string.

console.log(a.slice( 2, 6 ))  // -> zero
console.log(a.slice(-5,-3 ))  // -> ch
 
// repeat(count: number): string
// number of copies to append
// Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
console.log(a.repeat(2))

// (method) String.split(separator: string | RegExp, limit?: number): string[] (+1 overload)
// Split a string into substrings using the specified separator and return them as an array.
// @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
// @param limit — A value used to limit the number of elements returned in the array.
console.log(a.split(" ",2))

// (method) String.substring(start: number, end?: number): string
// Returns the substring at the specified location within a String object.
// @param start — The zero-based index number indicating the beginning of the substring.
// @param end
// Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character 
// indicated by end. If end is omitted, the characters from start through the end of the original string are returned.

console.log(a.substring(0, 6 ));   // -> elzero 

// includes(searchString: string, position?: number): boolean
// Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are
// greater than or equal to position; otherwise, returns false.
console.log(a.includes("Web"));    // -> True

// startsWith(searchString: string, position?: number): boolean
// Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
console.log(a.startsWith("E"));   // -> True 

// (method) String.endsWith(searchString: string, endPosition?: number): boolean
// Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
console.log(a.endsWith("l"));     // -> True

// console.log(tneName2.trim().charAt(2).toUpperCase());


