/**
 * BOM []
 * -- setTimeout(function, Timeout, additional Params )
 * -- clearTimeout( Id )
 */


// setTimeout( function (){
//     console.log(` Message `);
// }, 3000 );

// setTimeout( sayMas1, 2000);

// function sayMas1(){
//     console.log(`Iam Message `);
// }

// setTimeout( sayMas2, 2000, "hamzoooz", 23);

// function sayMas2(user,age){
//     console.log(`Iam Message ${user} Your Age Is : ${age}`);
// }

let counter = setTimeout( sayMas3, 3000 );

function sayMas3(){
    console.log(`Iam Message `);
}

let btn = document.querySelector("button");

btn.onclick = function(){
    clearTimeout(counter);
}










// setTimeout(function(){
//     document.write(` 4 `);
// }, 1000);

// setTimeout(function(){
//     document.write(` 3 `);
// }, 2000);

// setTimeout(function(){
//     document.write(` 2 `);
// }, 3000);

// setTimeout(function(){
//     document.write(` 1 `);
// }, 4000);