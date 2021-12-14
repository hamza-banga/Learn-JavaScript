/**
 * Creat New Object With New Key Word 
 *  Update Vlue In Object 
 * Add Properates & Method To Object
 * 
 */

/** This Normal way To Creat A New Object */
let user = {
    name : "Hamzoooz",
    age : 20, 
};
console.log(user); // { name: 'Hamzoooz', age: 20 }

// Update User.age
user.age = 23;
user["country"] = "Egypt";
user.skills = ["HTML", "CSS", "JS", "Python"];

console.log(user); 
document.write(user.skills.join(" | "));


/** This New Key Word To Creat New Object  */
let user_info = new Object();
// Can Add Items To Object
let user_info_tow = new Object({
    age  : 20,
});

user_info_tow["name"] = "hamzoooz";
// Ca Update The Value 
user_info_tow.age = 23;

console.log(user_info_tow); // -> {age: 23, name: 'hamzoooz'}


