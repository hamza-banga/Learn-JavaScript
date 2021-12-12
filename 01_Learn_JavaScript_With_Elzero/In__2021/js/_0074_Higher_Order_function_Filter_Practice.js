/**
 * Filter
 *  Filter Longest Word By Number
 */
/** Filter Words More Than 4 Characters */
let sentence = " I Love Code Too Playing Much ";
console.log(`${"=".repeat(10)} With filter Method ${"=".repeat(10)}`);
let smallWords = sentence.split(" ").filter(function(ele){
    return ele.length <= 4;
}).join(" ");
console.log(`${smallWords} || From smallWords `); // -> I Love Code Too Much 

// =================================================
console.log(`${"=".repeat(10)} With Arrow Function ${"=".repeat(10)}`);
// =================================================

let smallWordsArrow = sentence.split(" ").filter( (ele) => ele.length <= 4 ? true: false ).join(" ");
console.log(`${smallWordsArrow} || From smallWordsArrow `); // -> I Love Code Too Much 
// =================================================

/** IgnoreNumbers  */
console.log(`${"=".repeat(10)} Ignore Numbers ${"=".repeat(10)}`);
let ignoreNumbers = "Elz123erro";

let ign = ignoreNumbers.split("").filter(function(e){
    // return isNaN(parseInt(e))
    return isNaN(parseInt(e));
}).join("");
console.log(` ${ign} || From ign `);
// =================================================
console.log(`${"=".repeat(10)} ign By Arrow Function ${"=".repeat(10)}`);

let ignArrow = ignoreNumbers.split("").filter((e) => isNaN(parseInt(e))).join("");
console.log(` ${ignArrow} || From ignArrow `);
// =================================================
console.log(`${"=".repeat(10)} ign By Map Method ${"=".repeat(10)}`);

let ignMap = ignoreNumbers.split("").map(function(e){
    return isNaN(parseInt(e)) ? e  : ""
}).join("");
console.log(` ${ignMap} || From ignMap `);

let ignMapArrow = ignoreNumbers.split("").map( e => isNaN(parseInt(e)) ? e : "" ).join("");
console.log(` ${ignMapArrow} || From ignMapArrow `);
// =================================================


