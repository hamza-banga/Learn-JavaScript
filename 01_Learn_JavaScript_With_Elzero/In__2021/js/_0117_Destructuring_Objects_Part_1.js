/**
 * _0117_Destructuring_Objects_Part_1
 * 
 */

const user = {
    theName: "hamzoooz",
    theAge: 23,
    theTitle: "Developer",
    theCountry: "Sudan",
};

let theName = user.theName
let theAge = user.theAge
let theTitle = user.theTitle
let theCountry = user.theCountry

console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

({Name,  theAge, theTitle, theCountry } = user);


// let {theName,  theAge, theTitle, theCountry } = user;
console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
