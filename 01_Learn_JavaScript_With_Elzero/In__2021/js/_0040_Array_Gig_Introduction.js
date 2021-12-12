/** 

Arrays
    Create Arrays [Tow Method] new Array() + []
    Access Arrays Elements
    Nested Arrays
    Change Arrays Elements
    Check For Array Array.isArray(arrayName);
*/
let myFrinds = ["Ahmed", "Hamza", "Moazer", "Osama","Hassan"];
console.log(`Hello ${myFrinds[2]} In Programming @_@ `);
console.log(`Hello ${myFrinds[0]}`);
console.log(`Hello ${myFrinds[1][2]}`);

/** Nested Arrays  */
let myFrinds2 = ["Ahmed", "Hamza", "Moazer",[ "Osama","Hassan"]];
console.log(`Hello ${myFrinds2[2]} In Programming @_@ `);
console.log(`Hello ${myFrinds2[3]}`);
console.log(`Hello ${myFrinds2[3][1]}`);
console.log(`Hello ${myFrinds2[3][1][1]}`);
/** Change Arrays Elements */
let myFrinds3 = ["Ahmed", "Hamza", "Moazer",[ "Osama","Hassan"]];
console.log(myFrinds3)
myFrinds3[1] = "Gamal"
console.log(myFrinds3)
myFrinds3[3] = "Banga"
console.log(myFrinds3)
myFrinds3[5] = ["Ameer", "Sameh"] 
console.log(myFrinds3)