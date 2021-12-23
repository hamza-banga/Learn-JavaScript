/**
 * DOM [ Deal With Elements ]
 *      before [ Element || String ]
 *      after  [ Element  || String ]
 *      append [ Element || String ]
 *      prepend [ Element || String ]
 *      remove 
 */

let element = document.getElementById("my-div");

let createdP = document.createElement("p");

element.before("Hello From JavaScript Befor my-div ");
element.after("Hello From JavaScript after my-div ");

element.before(createdP);
element.after(createdP);







