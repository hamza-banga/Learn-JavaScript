// Number Methods
// Tow Dots To Call A Mehtods
// toString()              => (method) Number.toString(radix?: number): string || Returns a string representation of an object.
// parseFloat()            => function parseFloat(string: string): number || Converts a string to a floating-point number.
// isInteger() [ES6]       => (method) NumberConstructor.isInteger(number: unknown): boolean || Returns true if the value passed is an integer, false otherwise.
// isNaN() [ES6]           => (method) NumberConstructor.isNaN(number: unknown): boolean ||Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true.
// toFixed()               => (method) Number.toFixed(fractionDigits?: number): string || Returns a string representing a number in fixed-point notation.
// parseInt()              => (function) parseInt(string: string, radix?: number): number || Converts a string to an integer. 

/**
 * toString(radix?: number): string;
 * (method) Number.toString(radix?: number): string
 * Returns a string representation of an object.
 * @param Number Specifies a radix for converting numeric values to strings. This value is only used for numbers.
 */
console.log((100).toString()); // -> 100 String

/**
 * (method) Number.toFixed(fractionDigits?: number): string
 * Returns a string representing a number in fixed-point notation.
 * @param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
console.log((100.555555555).toFixed(2)); // => 100.56

/**
 * var Number: Number Constructor
 * (value?: any) => @number
 * An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
 */
console.log(Number("100 Hamza")); //  -> NaN
console.log(+"100 Hamza");   //   -> NaN 

/**
 * function parseInt(string: string, radix?: number): number
 * Converts a string to an integer.
 * @param string — A string to convert into a number.
 * @param radix
 * A value between 2 and 36 that specifies the base of the number in string.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
 * All other strings are considered decimal.
 */
console.log(parseInt("100 Osama"));  // -> 100
console.log(parseInt("osama 100 ")); //  ->  NaN
console.log(parseInt("100.999 osama")); //  ->  100

/**
 * function parseFloat(string: string): number
 * Converts a string to a floating-point number.
 * @param string — A string that contains a floating-point number.
 */
console.log(parseFloat("100.999 osama")); //  ->  100.999
/**
 * (method) NumberConstructor.isInteger(number: unknown): boolean
 * Returns true if the value passed is an integer, false otherwise.
 * @param number — A numeric value.
 */
console.log(Number.isInteger("100")); //  -> false
console.log(Number.isInteger(100.99)); //  -> false
console.log(Number.isInteger(100));   //  -> true

/**
 * (method) NumberConstructor.isNaN(number: unknown): boolean
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true.
 * @param number — A numeric value.
 */
console.log(Number.isNaN(20));   //  -> false
console.log(Number.isNaN("Osama" / 20)); //  -> True
