var myName = "hamzoooz"; // Global Scope
console.log(myName);    // -> Get From Globle Scope => hamza

function myNamefun(){
    var myName = "Banga"; // Local Scope
    lastName = "Ahmed";   // Global Scope
    
    return lastName + " " + myName;
}

console.log(myNamefun()); // Get From Function => Banga
console.log(myName);      // Get From Globle Scope => hamzoooz
document.getElementById("result").innerHTML = myName + " " + lastName; // Get From Globle Scope =>hamzooz bnaga hamza
document.getElementById("result2").innerHTML = myName + " " + myNamefun(); +   " " + lastName; // Get From Globle Scope =>hamzooz bnaga hamza

