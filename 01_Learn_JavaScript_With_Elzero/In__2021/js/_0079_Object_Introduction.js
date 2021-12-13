/**
 * Object 
 * Intro And What Is Opject.
 * Accessing Object.
 * 
 */
let user = {
    /** Properties */
    theName : "hamzoooz",
    theAge : 23,
    /** Methods */
    sayHi : function(){
        return ` Hello`
    },
};
console.log(user.theName); 
console.log(user.theAge); 
console.log(user.sayHi()); 

//==============================================
let userInfo = {
    theName : "hamzoooz",
    theAge : 23,
    sayHi : function(name = this.theName, age = this.theAge){
        return ` Hello ${name} Your Age ${age}`
    },
};
console.log(userInfo.theName); 
console.log(userInfo.theAge); 
console.log(userInfo.sayHi("Moazer")); 