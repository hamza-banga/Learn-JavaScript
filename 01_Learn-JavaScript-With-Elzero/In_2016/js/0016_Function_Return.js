// function myAgeInDays(){
//     "use strict";
//     var maAge = 23;
//     return maAge * 365
// }
// var daysCalc = myAgeInDays();
// document.getElementById("return").innerHTML = "Your Age In Days = " + daysCalc + " Days";

// =================================================================
// function myAgeInHours(){
//     "use strict";
//     var myAge = 23;
//     return myAge * 365 * 24;
// }
// document.getElementById("age-in-hours").innerHTML = "Your Age In Hours = " +  myAgeInHours() + " Hours";
// =================================================================
// Make it Flexable By Recefed Input From User 
// function myAgeInDays(Age){
//     return Age * 365 ; 
// }
// var calaAge = prompt("Enter Your Age ");
// document.getElementById("return").innerHTML = "Your Age In Days = " + myAgeInDays(calaAge);
// =================================================================

function myAgeInHours(age){
    return age * 365 *24 ;
}
var calcAgeInHours = prompt("Enter Your Age ");
if ( typeof(calcAgeInHours) === "string"  ){
    console.log(typeof(calcAgeInHours));
    document.getElementById("return").innerHTML = "Your Age In Hours = " + myAgeInHours(calcAgeInHours)
}else{
    document.getElementById("return").innerHTML = "Pleas Reload The Page And Enter Correct Number  "
    console.log(typeof(calcAgeInHours));
}

// console.log(typeof(calcAgeInHours));
// console.log( Number.calcAgeInHours );
