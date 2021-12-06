/**
 * 
 * Function Insid Function ||
 * Nested Function =>
 * Return Function
 * 
 * @hamzoooz
 */

// // Example 1

// function sayHello( firstName, lastName ) {
//     let message = "Hello";

//     function concatMessage () {
//         message = ` ${message} ${firstName} ${lastName} `;
//     }
//     concatMessage();
//     return message ;
// }
// console.log( sayHello( "Osama", "Mohammed" ) );

// -==============================================
// // Example 2

// function sayHello( firstName, lastName ) {
//     let message = "Hello";

//     function concatMessage() {
//         return  ` ${message} ${firstName} ${lastName} `;
//     }
//     return concatMessage();
// }
// console.log( sayHello( "Osama", "Mohammed" ) );


// -==============================================
// Example 3

function sayHello( firstName, lastName ) {
    let message = "Hello";

    function concatMessage() {
        function fullName(){
            return `${firstName} ${lastName} `;
        }

        return `${message} ${fullName()} `;
    }
    return concatMessage();
}
console.log( sayHello( "Osama", "Mohammed" ) );

