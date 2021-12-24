/**
 * DOM [ Cloning ]
 *      cloneNode(Deep)
 */

let myP = document.getElementById("my-p");
let myDiv = document.getElementById("my-div");

// When We Apending Any Element In Other it take That Element We appending From Palce . & We Be Empty.
myDiv.appendChild(myP);
// myDiv.appendChild(myP);

let myP2 = document.getElementById("my-p1").cloneNode(true); //  true => To Take Child Element  false => To Take Just Clone 
let myDiv2 = document.getElementById("my-div1");

myP2.id = ` ${myP2.id}-clone `; // Becuse That Element By 

myDiv2.appendChild(myP2);



