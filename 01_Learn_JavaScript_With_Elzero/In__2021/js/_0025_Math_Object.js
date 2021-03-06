/**
 * Math Object 
 * round()        || => Math.round(x: number): number.          || => Returns a supplied numeric expression rounded to the nearest integer.
 * ceil()         || => Math.ceil(x: number): number.           || => Returns the smallest integer greater than or equal to its numeric argument.
 * floor()        || => Math.floor(x: number): number.          || => Returns the greatest integer less than or equal to its numeric argument.
 * min()          || => Math.min(...values: number[]): number.  || => Returns the smaller of a set of supplied numeric expressions.
 * max()          || => Math.max(...values: number[]): number.  || => Returns the larger of a set of supplied numeric expressions.
 * pow()          || => Math.pow(x: number, y: number): number. || => Returns the value of a base expression taken to a specified power.
 * random()       || => Math.random(): number.                  || => Returns a pseudorandom number between 0 and 1.
 * trunc()  [ES6] || => Math.trunc(x: number): number.          || => Returns the integral part of the a numeric expression, x, removing any.
 */

 /**
  * (method) Math.round(x: number): number 
  * Returns a supplied numeric expression rounded to the nearest integer
  * @param x — The value to be rounded to the nearest integer.
  */
console.log(Math.round(99.4)); //  -> 99
console.log(Math.round(99.5)); //  -> 100
console.log(Math.round(99.6)); //  -> 100

/**
 * (method) Math.ceil(x: number): number
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x — A numeric expression.
 */
console.log(Math.ceil(99.2)); //  -> 100
console.log(Math.ceil(99.9)); //  -> 100 

/**
 * (method) Math.floor(x: number): number
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x — A numeric expression.
 */
console.log(Math.floor(99.6)); //  -> 99
console.log(Math.floor(99.6)); //  -> 99
// (method) Math.min(...values: number[]): number
// Returns the smaller of a set of supplied numeric expressions.
// @param values — Numeric expressions to be evaluated.
console.log(Math.min(99.5 , 100 , 1 , -55 , 6 , 8.4 )); //  -> -55
// (method) Math.max(...values: number[]): number
// Returns the larger of a set of supplied numeric expressions.
// @param values — Numeric expressions to be evaluated.
console.log(Math.max(99.5 , 100 , 1 , -55 , 6 , 8.4 )); //  -> 100
// (method) Math.pow(x: number, y: number): number
// Returns the value of a base expression taken to a specified power.
// @param x — The base value of the expression.
// @param y — The exponent value of the expression.
console.log(Math.pow(4,2)); //  -> 16
// (method) Math.random(): number
// Returns a pseudorandom number between 0 and 1.
console.log(Math.random()); //  -> Random Number
// (method) Math.trunc(x: number): number
// Returns the integral part of the a numeric expression, x, removing any
// fractional digits. If x is already an integer, the result is x.
// @param x — A numeric expression.
console.log(Math.trunc(4.1)); //  -> 4
console.log(Math.trunc(4.5)); //  -> 4
console.log(Math.trunc(4.9)); //  -> 4 


// import From VS Code 

/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * @param x A numeric expression for which the absolute value is needed.
 */
// abs(x: number): number;
/**
 * Returns the arc cosine (or inverse cosine) of a number.
 * @param x A numeric expression.
 */
// acos(x: number): number;
/**
 * Returns the arcsine of a number.
 * @param x A numeric expression.
 */
// asin(x: number): number;
/**
 * Returns the arctangent of a number.
 * @param x A numeric expression for which the arctangent is needed.
 */
// atan(x: number): number;
/**
 * Returns the angle (in radians) from the X axis to a point.
 * @param y A numeric expression representing the cartesian y-coordinate.
 * @param x A numeric expression representing the cartesian x-coordinate.
 */
// atan2(y: number, x: number): number;
/**
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x A numeric expression.
 */
// ceil(x: number): number;
/**
 * Returns the cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
// cos(x: number): number;
/**
 * Returns e (the base of natural logarithms) raised to a power.
 * @param x A numeric expression representing the power of e.
 */
// exp(x: number): number;
/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x A numeric expression.
 */
// floor(x: number): number;
/**
 * Returns the natural logarithm (base e) of a number.
 * @param x A numeric expression.
 */
// log(x: number): number;/
/**
 * Returns the larger of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
// max(...values: number[]): number;
/**
 * Returns the smaller of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
// min(...values: number[]): number;
/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
// pow(x: number, y: number): number;
/** Returns a pseudorandom number between 0 and 1. */
// random(): number;
/**
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x The value to be rounded to the nearest integer.
 */
// round(x: number): number;
/**
 * Returns the sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
// sin(x: number): number;
/**
 * Returns the square root of a number.
 * @param x A numeric expression.
 */
// sqrt(x: number): number;
/**
 * Returns the tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
// tan(x: number): number;