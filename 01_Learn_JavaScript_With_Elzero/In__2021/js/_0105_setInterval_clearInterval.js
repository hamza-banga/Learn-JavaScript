/**
 * BOM []
 * -- setInterval(function, Timeout, additional Params )
 * -- clearInterval( Id )
 */


// setInterval( function (){
//     console.log(` Message `);
// }, 3000 );

// setInterval( sayMas1, 100);

// function sayMas1(){
//     console.log(`Iam Message `);
// }

// setInterval( sayMas2, 100, "hamzoooz", 23);

// function sayMas2(user,age){
//     console.log(`Iam Message ${user} Your Age Is : ${age}`);
// }

// let counter = setInterval( sayMas3, 3000 );

// function sayMas3(){
//     console.log(`Iam Message `);
// }

// let btn = document.querySelector("button");

// btn.onclick = function(){
    //     clearInterval(counter);
    // }
    
    

let div = document.querySelector("div");

function countdown(){
    div.innerHTML -= 1;
    if ( div.innerHTML === "0" ){
        clearInterval(countdown);
        div.remove();
    }
}

let counter = setInterval( countdown, 1000 );

