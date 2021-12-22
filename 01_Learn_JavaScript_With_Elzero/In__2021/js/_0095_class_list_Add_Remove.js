/**
 * DOM [ Class List  ]
 *      classlist
 *      length
 *      contains
 *      item(index)
 *      add
 *      remove
 *      toggle
 */

let element = document.getElementById("my-div");
console.log( typeof element); // -> object 
console.log(element.classList); // -> DOMTokenList(3) ['one', 'tow', 'three', value: 'one tow three']
console.log(element.innerHTML.length); // -> 8
console.log(element.classList.contains("osama")); // false
console.log(element.classList.contains("one")); // true
console.log(element.classList.item(0)); // one

element.onclick = function (){
    element.classList.add("add-four", "add-five");
}

element.onclick = function (){
    element.classList.remove("four", "five");
}

element.onclick = function (){
    element.classList.toggle("osama");
}