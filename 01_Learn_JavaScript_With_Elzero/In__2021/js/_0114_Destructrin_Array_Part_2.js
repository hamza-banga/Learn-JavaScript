/**
 * Destructring Advanced Example
 * 
 */

let myFriends = [ "Ahmed", "Moazer", "Ali", [ "Osama", "Amr",  [ "Mohamed", "Gamal" ] ] ];

let [ , , ,  [a , , [ , b ]]] = myFriends;
// let [ , , ,  [a , , [ , [b] ]]] = myFriends; 

console.log(a); // => "Osama"
console.log(b); // => "Gamal"

