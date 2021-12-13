/**
 * Higher Order Function Challenges
 * you Can Use 
 * Space 
 * True => 1 One Time Only In Code 
 * You Cannot Use 
 * Number
 * Litters
 * You Must Use [ Filter + Map + Reduce + Your Knowledege ] \Order Is Not Important 
 * All In Chain
 * @hamzoooz
 */
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,Z";
let solution = myString.split(",").map(e => isNaN(parseInt(e))?e:"")
.map(e => e.startsWith("_") ? " " : e  )
.reduce((acc, current) => `${acc}${current}`).slice(true,--length)
console.log(solution);
