/**
 * BOM 
 * -- local Stroge
 * -- setitem
 * -- getItem
 * -- removeIteme
 * -- clear
 * -- key
 * 
 * 
 * Info 
 * -- No Expirtion Time 
 * -- HTTP and HTTPS 
 * -- Private Tab
 * 
 */

console.log(window.localStorage);
console.log(typeof window.localStorage);

// Set

/**
 * (method) Storage.setItem(key: string, value: string): void
 * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
 * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
 * Dispatches a storage event on Window objects holding an equivalent Storage object.
 * setItem(key: string, value: string): void;
 * 
 */
window.localStorage.setItem("color", "#e11");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "40px";

// Get
/**
 * (method) Storage.getItem(key: string): string
 * Returns the current value associated with the given key, or null if the given key does not exist.
 * getItem(key: string): string | null;
 */
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove
window.localStorage.removeItem("fontSize");

// clear All LocalStorge 
// window.localStorage.clear();

setTimeout( function(){
    window.localStorage.clear();
},3000);

console.log(window.localStorage.key(0))

// Set In Page 
document.body.style.backgroundColor = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("fontSize");

