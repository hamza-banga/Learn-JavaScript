friendOne = "Osama";
var friends = [
    "Hassan",
    "Soha",
    "Ahmed",
    "Hide",
    "Zahra"
];
console.log(friends);
console.log(friendOne);

// ==================================
//          Check Array
// ==================================
if (Array.isArray(friendOne)){
    console.log("Good This Is Array")
}else{
    console.log(`${friendOne} "No This Is Not Array"`)  // -> $This 
}

// ================================== 
if (Array.isArray(friends)){
    console.log(`${ friends} " || Good This Is Array"`)  // -> $This 
}else{
    console.log("No This Is Not Array")
}


// ==================================
// ==================================
if (friends.constructor === Array ){
    console.log(`${ friends} "  || Good This Is Array"`)  // -> $This 
}else{
    console.log("No This Is Not Array")

// ==================================
if (friendOne.constructor === Array ){
    console.log(` ${ friendOne } "  || Good This Is Array"`) 
}else{
    console.log(` ${ friendOne } "  || No This Is Not Array"`)  // -> $This 
    }
}
// ==================================


