/**
 * DOM [  Deal With Childrens ]
 *      Children
 *      ChildNodes
 *      firstChild
 *      lastChild
 *      firstElementChild
 *      lastElementChild
 */



/**
 * 
 * <div>
 *    Hello Div
 *    <p>Hello Paragraph</p>
 *    <span>Hello Span</span>  
 *    <!-- Hello Commint  -->
 *    Hello
 * </div>
 * 
 */
let myElement = document.querySelector("div");

console.log(myElement); // => Get Above 
console.log(myElement.children); // => Returns the child elements.
console.log(myElement.children[0]); // => Returns the  First child elements.
console.log(myElement.childNodes); // => Returns the children.
console.log(myElement.childNodes[0])// => Returns the First children.

console.log(myElement.firstChild); // => Returns the first child.
console.log(myElement.lastChild); // => Returns the last child.

console.log(myElement.firstElementChild ); // => Returns the first child that is an element, and null otherwise.
console.log(myElement.lastElementChild ); // => Returns the last child that is an element, and null otherwise.


 