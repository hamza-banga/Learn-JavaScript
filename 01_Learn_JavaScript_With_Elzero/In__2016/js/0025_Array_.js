var friendOne = "Hassan",
    friendToe = "Soha",
    friendThree = "Ahmed",
    friendFour = "Hide",
    friendFive = "Zahra";

var friends = new Array(
        "Hassan",
        "Soha",
        "Ahmed",
        "Hide",
        "Zahra"
        
    );
console.log(friends);


var friends = []; 

friends[0] = "Abosbul",
friends[1] = "Abosbul1",
friends[2] = "Abosbul2",
friends[3] = "Abosbul3"

console.log(friends)

var friends = [
    "Hassan",
    "Soha",
    "Ahmed",
    "Hide",
    "Zahra"
]

console.log(friends)

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
    console.log(`${friends} + "Good This Is Array"`)  // -> $This 
}else{
    console.log("No This Is Not Array")
}
// ==================================
if (friends.constructor === Array ){
    console.log(`${friends} + "Good This Is Array"`)  // -> $This 
}else{
    console.log("No This Is Not Array")
}
// ==================================


// ==================================