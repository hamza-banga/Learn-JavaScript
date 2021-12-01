/*
Control Flow
    if 
    else if
    else
// ==============================
if (condition) {
    #Code...
}elseif(condition){
    #Code...
}else {
    #Code...
}
*/
let price = 100;
let discount = false;
let discountAmount = 30;
let student = true;
let contry = "sudan";

if (discount === true) {
    price -= discountAmount; // price = price - discounAmount
} else if (contry === "sudan") {
    price -= discountAmount + 40; // price = price - discounAmount
} else if (contry === "KSA") {
    price -= discountAmount + 10; // price = price - discounAmount
} else {
    price -= 10; // price = price - discounAmount
}

console.log(price);
// ===========================================
// Nested If Condition 

if (discount === true) {
    price -= discountAmount; // price = price - discounAmount

} else if (contry === "sudan") {

    if (student === true) {

        price -= discountAmount - 50; // price = price - discounAmount
    } else {

        price -= discountAmount - 40; // price = price - discounAmount
    }

} else if (contry === "KSA") {

    price -= discountAmount - 10; // price = price - discounAmount
} else {

    price -= 10; // price = price - discounAmount
}
console.log(price);
// ====================================
// Short Condtion 
let = theName = "Hamza";
let = theGender = "Male";
let age = 23;

if (theGender === "Male") {
    document.write(` Hello Mr ${theName}`);
    // document.write( "Mr" + theName );
} else {
    document.write(` Hello Msr ${theName}`);
}
// ====================================
theGender === "Male" ? console.log("Ms " + theName) : console.log("Msr" + theName);
// ====================================
let = result = theGender === "Male" ? "Ms " + theName : "Msr" + theName;
// ====================================
console.log(result);

// age < 20 ? console.log(20):age  > 20 && 60 ? console.log("20 To 60 "):age > 60? console.log("Larger Than 60"):console.log("Unknown");
age < 20 
? console.log(20) 
: age > 20 && 60 
? console.log("20 To 60 ") 
: age > 60 
? console.log("Larger Than 60") 
: console.log("Unknown");




// ==================================
// Nullish Coalescing Operator And Logical Or 

console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))

// let price2 = One Above 
// let price2 = 100 
// let price2 = -100 
// let price2 = 0 
// let price2 = "" 
// let price2 = null 
let price2 = 0 

console.log(`The Price Is ${price2  || 200  } `);
console.log(`The Price Is ${price2  && 200  } `);
