/**
 * 
 * Function Insid Function ||
 * Nested Function =>
 * Return Function
 * 
 * @hamzoooz
 */

// // Example 1

// function sayHello( fName, Lname ) {
//     let message = "Hello";

//     function concatMessage () {
//         message = ` ${message} ${fName} ${Lname} `;
//     }
//     concatMessage();
//     return message ;
// }
// console.log( sayHello( "Osama", "Mohammed" ) );

// -==============================================
// // Example 2

// function sayHello( fName, Lname ) {
//     let message = "Hello";

//     function concatMessage() {
//         return  ` ${message} ${fName} ${Lname} `;
//     }
//     return concatMessage();
// }
// console.log( sayHello( "Osama", "Mohammed" ) );


// -==============================================
// Example 3

function sayHello( fName, Lname ) {
    let message = "Hello";

    function concatMessage() {
        function fullName(){
            return `${fName} ${Lname} `;
        }

        return `${message} ${fullName()} `;
    }
    return concatMessage();
}
console.log( sayHello( "Osama", "Mohammed" ) );

