/**
 * ================================= بسم الله ===============================
 * Map And Set  + What You Learn => Challenge 
 * Requirements 
 * -- You Can't Use Number Or True Or False 
 * -- Don't Use Array Indexs 
 * -- You Can't Use Loop 
 * -- You Can't Use Any Higher Order Function 
 * -- Only One Line Solution Inside Console 
 * -- only one lenght => then Only Time Only 
 * Hints 
 * -- You Can Use * OPeratier Only In Calculation 
 * -- Set 
 * -- Spread Operator 
 * -- Math Object Methods
 * @hamzoooz || @Hamzoooz123
 */

let n1  = [ 10, 30, 10, 20];
let n2  = [ 30, 20,10]; 

console.log("Your Solution Here"); // -> 210

// الحمد لله الذي بنعمته تتم الصالحات
console.log( Math.max(...n1) * n1.length + Math.max(...n2) * new Set([...n1]).size); // -> 210

