/**
 * DOM [ CSS ]
 *      style
 *      cssText
 *      removeProperty(properName) [ inline, Stylesheet ]
 *      setProperty(properName, vlaue, prioity)
 */

let element = document.getElementById("my-div");

element.style.color = "red"; // RGB || aRGB Hexdecimal 
element.style.fontWeight = "bold"; // calmiCase

element.style.cssText = "font-weight = bolder; color:lightblue;background-color:rgb(0 0 0 / 77%)"

element.style.removeProperty("color");

element.style.setProperty("color","blue");

console.log(document.styleSheets.rules[0].removeProperty("line-height"));
console.log(document.styleSheets.rules[0].setProperty("border","1px solid  "));


