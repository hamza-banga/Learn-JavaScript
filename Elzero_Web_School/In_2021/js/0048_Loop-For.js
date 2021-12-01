/*
Loop 
    for
for ( [1]; [2]; [3]; ){
    Block Of Code
    // }
// ======================================================
    // for (let index = 0; index < array.length; index++) {
        // const element = array[index];

// }
*/
// ======================================================
for (index = 0; index < 11; index++){
    // parseInt(index.toFixed(3))
    console.log(`[ ${index} ] `)
}
// ======================================================
// let a = "="; console.log(a.repeat(35));

console.log("=".repeat(35));

let myFriends = ["Osama", "Moazer", "Hassan", "Hamzoooz", "Ahmed", "Mozamil", "Hamza", "Kali"];

for (i = 0; i < myFriends.length; i++){
    console.log(myFriends[i])
}

// ======================================================

let myFriends2 = [1,2,3,4,"Osama",5,55, "Moazer", undefined, "Hassan",54132, "Hamzoooz", NaN ,"Ahmed", "Mozamil", "Hamza", "Kali"];
let onlyString = [];
let OnlyNumber = [];

for (i = 0; i < myFriends2.length; i++) {
    if (typeof myFriends2[i] === "string") {
        
        onlyString.push(myFriends2[i]);
        // console.log(onlyString);

    }
    else if (typeof myFriends2[i] === "number") {
        OnlyNumber.push(myFriends2[i]);
        // console.log(OnlyNumber);
    }
}

console.log(onlyString);
console.log(OnlyNumber);

// ========================================================

