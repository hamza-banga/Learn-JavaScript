/**
 * Object 
 * Big Deeper
 * Dot Notation vs Bracket Notation    
 * Dynamic Property Name 
 */
// console.log(`${"=".repeat(5)} Dot Notation  ${"=".repeat(5)}`)
let user = {
    theName: "Osama",
    country: "sudan",
    "city of": "Khartoum"
};

console.log(user.theName ); // Dot Notation 
console.log(user["city of"] ); // Bracket Notation 
console.log(user["country"] ); // Bracket Notation untel Not Valid 

// With Dot Naotation Cannot Access To Proprtis In Dynamic Var 
let myCountry = "country"

let userInfo = {
    theName: "hamza",
    country: "Sudan"
};
// By dot Notation
console.log(`${"=".repeat(5)} Dot Notation  ${"=".repeat(5)}`)
console.log(userInfo.theName); //-> hamza
console.log(userInfo.myCountry); //-> undefined
// By Bracket Notation
console.log(`${"=".repeat(5)} Bracket Notation  ${"=".repeat(5)}`)
console.log(userInfo["theName"]); //-> hamza
console.log(userInfo[myCountry]); //-> Sudan

