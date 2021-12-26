/**
 * Destructuring
 * -- Destructuring_Challenge
 */

let chosen = 3; 

let myFriends = [
    { title:"Osama", age:39, available:true, skilles:["HTML", "CSS"] },
    { title:"Ahmed", age:25, available:false, skilles:["Python", "Django"] },
    { title:"Sayed", age:33, available:true, skilles:["PHP", "Laravel"] },
];

// Destrutiing Array 
let [one, Tow, three ] = myFriends;
// Check Satus 

if ( chosen === 1 ){
    chosen = one;
}else if (chosen === 2){
    chosen = Tow;
}else {
    chosen = three;
}

let {title, age, available, skilles:[,last] } = chosen;
console.log(title);
console.log(age);
console.log(last);

if (available === true ){
    console.log("available");
}else{
    console.log("NOt available");
}
