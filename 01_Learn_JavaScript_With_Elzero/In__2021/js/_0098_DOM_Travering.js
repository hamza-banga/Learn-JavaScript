/**
 * DOM [ Traversing ]
 *      netSibling
 *      previousSibling
 *      nextElementSibling
 *      previousElementSibling
 *      parentElement
 */

//  <div id="my-div">
//  <span class="one"> One </span>
//  <!-- comment -->
//  <span class="tow">Tow</span>
//  <!-- comment -->
//  <span class="three">Three</span>
// </div>

let span = document.querySelector(".tow");

console.log(span.nextSibling); // -> Returns the next sibling. => <!-- comment -->
console.log(span.nextElementSibling); // -> Returns the first following sibling that is an element, and null otherwise. =><span class="three">Three</span>
console.log(span.previousSibling); // -> Returns the previous sibling.. => <!-- comment -->
console.log(span.previousElementSibling); // -> Returns the first preceding sibling that is an element, and null otherwise. => <span class="three">Three</span>
console.log(span.parentElement);

span.onclick = function (){
    span.parentElement.style = ' opacity:.2';
}

span.ondblclick = function (){
    span.parentElement.remove();
    document.getElementById("btn-remove").remove();
}

let one = document.querySelector(" .one ");

function remove(){
    if ( one.nextElementSibling === null){
        one.remove();
        document.getElementById("btn-remove").remove();
    }else{
        one.nextElementSibling.remove();
    }
}

let myDiv = document.getElementById("my-div");
let mySpan = document.createElement("span");

// Make This Logical By Ganret Number
function add(){
    // for(let i = 0; i < 10 ; i++ ){
    // }
    mySpanText = document.createTextNode(`number `); 
    mySpan.appendChild(mySpanText);
    myDiv.appendChild(mySpan);
}
