/**
 * Destructuring_Objects_Part_2
 * 
 */

const user = {
    theName: "hamzoooz",
    theAge: 23,
    theTitle: "Developer",
    theCountry: "Sudan",
    color:"Black",
    skils:{
        HTML:70,
        CSS:80
    },
};

const { theName:n, theAge:a, theCountry, color:co = "Red", skils:{HTML,CSS:cssKils} } = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(` My HTML Skil Progress Is ${HTML} `);
console.log(` My CSS Skil Progress Is ${cssKils} `);


const {HTML:skilOne, CSS:css} = user.skils;

console.log(` My HTML Skil Progress Is ${skilOne} `);
console.log(` My CSS Skil Progress Is ${css} `);


