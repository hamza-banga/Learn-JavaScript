/**
 * Scope 
 *      - Block Scope [ if, Switch, for ]
 * 
 */

var a = 10;
let b = 20;
let c = 30;

if (10 === 10){
    var a = 20; // Here Well Over Write On Global
    let b = 30; // This New Decalaer Variabls
    // let c = 40; // This New Decalaer Variabls
    console.log(` From If Block ${a} `); // -> 20
    console.log(` From If Block ${b} `); // -> 20
    console.log(` From If Block ${c} `); // -> 30
}

console.log(` From Global ${a} `); // -> 10
console.log(` From Global ${b} `); // -> 20
