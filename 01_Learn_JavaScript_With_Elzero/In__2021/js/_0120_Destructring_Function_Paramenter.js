/**
 * Destructring
 * -- Destructring_Function_Paramenter
 */
const user = {
    theName: "hamzoooz",
    theAge:  23,
    skills:  {
        html:70,
        css:80,
    },
};

showDeyails(user);
function showDeyails(obj){
    console.log(` Your Name Is : ${obj.theName} `);
    console.log(` Your Age Is : ${obj.theAge} `);
    console.log(` Your Skill  In CSS is  : ${obj.skills.css} `);
}
// ==========================================

showDeyails2(user);
function showDeyails2({ theName, theAge, skills:{css} }){
    console.log(` Your Name Is : ${theName} `);
    console.log(` Your Age Is : ${theAge} `);
    console.log(` Your Skill  In CSS is  : ${css} `);
}
// ==========================================

showDeyails3(user);
function showDeyails3({ theName:n, theAge:a, skills:{css:cs} }){
    console.log(` Your Name Is : ${n} `);
    console.log(` Your Age Is : ${a} `);
    console.log(` Your Skill  In CSS is  : ${cs} `);
}
// ==========================================


