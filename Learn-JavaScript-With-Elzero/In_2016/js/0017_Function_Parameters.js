// function myAgeInDays( myAge,  ){
//     "use strict";

//     return myAge * 365;
// }

// document.getElementById("number").textContent ;
// var number = document.getElementById("number").textContent ;
// var daysCalc = myAgeInDays(number);

// document.getElementById("return").innerHTML = "Your Age In Days = " +  myAgeInDays(23) + " Days ! "


// var daysCalc = myAgeInDays(23);
// document.getElementById("return").innerHTML = "Your Age In Days = " +  daysCalc + " Days ! "


(function myAgeInDays2( name, Age , Age2){
    "use strict";

    // return console.log( " Hello <b> " + name + " </b> Your Age In Day = " + Age * 365 + " Days" + " <br> And Your Age In Hours = " + Age2 * 265 * 24 +" Hours");
    return document.write( " Hello <b> " + name + " </b> Your Age In Day = <b>" + Age * 365 + "<b/> Days" + " <br><br>  And Your Age In Hours = <b> " + Age2 * 265 * 24 +" <b/> Hours")
    // return document.getElementById("return ").innerHTML = " Hello <b> " + name + " </b> Your Age In Day = " + Age * 365 + " Days" + " <br> And Your Age In Hours = " + Age2 * 265 * 24 +" Hours"

})("Moazer" , 23, 23);

// document.getElementById("return2").innerHTML=  myAgeInDays2("hamza" , 23 )