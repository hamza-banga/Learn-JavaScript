/**
 * DOM => Document Object Model 
 * --- What Is DOM 
 * --- DOM Selectors
 * ------ Find Element By ID
 * ------ Find Element By Tag Name 
 * ------ Find Element By Class Name 
 * ------ Find Element By CSS Selectors 
 * ------ Find Element By Collection
 * ------------ title
 * ------------ body
 * ------------ images 
 * ------------ forms
 * ------------ links
 */

let elementID = document.getElementById("myid"); // -> Get My-Span Element in Document 
let elementTagsName = document.getElementsByTagName("p"); // get All Paragraph in document
let elementClassName = document.getElementsByClassName("myclass"); // Get Element Div In Document 
let elementCSSSelector = document.querySelector("#text");
let elementCSSSelectorAll = document.querySelectorAll("#text");

console.log(  elementID);
console.log(  elementTagsName );
console.log(  elementTagsName[1] );
console.log(  elementClassName  );
console.log(  elementClassName[1] );
console.log(  elementCSSSelector );
console.log(  elementCSSSelectorAll  );
console.log(  elementCSSSelectorAll[1]  );


console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0].one.vlaue );
console.log(document.links );
console.log(document.images);


