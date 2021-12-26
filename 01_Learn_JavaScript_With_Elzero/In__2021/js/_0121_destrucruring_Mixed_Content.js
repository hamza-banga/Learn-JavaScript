/**
 * Destructring
 * -- destrucruring_Mixed_Content
 */

const user = {
    theName: "hamzoooz",
    theAge: 23,
    skills: ["html", "css", "javaScript"],
    addresses: {
        sudan: "Khartoum",
        KSA: "Makka",
    },
};


// const { theName, theAge, skills: [one, tow, three], addresses: { sudan: first, KSA: second } } = user;

// console.log(` Your Name Is : ${theName} `);
// console.log(` Your Age Is : ${theAge} `);
// console.log(` Your Skill  is  : ${one} , ${tow}, ${three} `);
// console.log(` Your Live  In  : ${first} `);

const { theName:n, theAge:a, skills: [one, three], addresses: { sudan: first, KSA: second } } = user;

console.log(` Your Name Is : ${n} `);
console.log(` Your Age Is : ${a} `);
console.log(` Your Skill  is  : ${three} `);
console.log(` Your Live  In  : ${first} `);

