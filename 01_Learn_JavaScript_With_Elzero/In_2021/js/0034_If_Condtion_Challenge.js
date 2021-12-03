/*
If Condtion Challenge 
*/

let a = 10;
if(a < 10 ){
    console.log((10));
}else if(a >= 10 && a <= 40 ){
    console.log("10 To 40 ");
}else if (a > 40){
    console.log(" > 40 ");
}else{
    console.log("Unknown");
}

// a < 10 ? console.log((10)) : a >= 10 && a <= 40 ? console.log("10 To 40 ") : a > 40 ? console.log(" > 40 ") : console.log("Unknown");
a < 10 ? console.log((10)) : a >= 10 && a <= 40 ? console.log("10 To 40 ") : a > 40 ? console.log(" > 40 ") : console.log("Unknown");

// a < 10 
// ? console.log((10)) 
// : a >= 10 && a <= 40 
// ? console.log("10 To 40 ") 
// : a > 40 
// ? console.log(" > 40 ") 
// : console.log("Unknown");

// ===================

let st = "Elzero Web School";

// if ("????" === "34"){
//     console.log("Good");
// }

// console.log((st.length*2).toString())
if ((st.length*2).toString() === "34"){
    console.log("Good");
}

// w Position May change
// if("????" === "w"){
//     console.log("Good");
// }
// console.log(st.charAt(st.indexOf("W")).toLowerCase())
if(st.charAt(st.indexOf("W")).toLowerCase() === "w"){
    console.log("Good");
}


// if ("????" !== "string"){
//     console.log("Good");
// }
// console.log(typeof(st.length));
if ( typeof(st.length) !== "string"){
    console.log("Good");
}

if ( typeof(st.length) === "number"){
    console.log("Good");
}

// console.log(st.slice(0,6).repeat(2));
if ( st.slice(0,6).repeat(2) === "ElzeroElzero"){
    console.log("Good");
}

 