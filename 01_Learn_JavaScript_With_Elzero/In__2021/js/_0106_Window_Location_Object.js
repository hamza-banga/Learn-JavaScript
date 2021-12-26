/**
 * BOM
 * -- Location Object
 * ---- href Get / set[ URL || Hash || File || Maill ]
 * ---- host
 * ---- hash
 * ---- protocol
 * ---- reload()
 * ---- replace()
 * ---- assign()
 */

console.log( location );
console.log( location.href ); // -> Returns the Location object's URL. Can be set, to navigate to the given URL.

// location.href = "#sec02";
// location.href = "https://google.com";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/javascript#reference";

console.log(location.host);
console.log(location.hostname);

console.log(location.protocol);
// location.protocol = "https"; // Not Work Here 

