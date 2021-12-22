 /**
  * DOM [ Event Simulation ]
  *     Click 
  *     Focus
  *     Blur
  */
let one = document.querySelector(".one ");
let tow = document.querySelector(".tow ");

window.onload = function(){
    one.focus();
};

tow.onblur = function() {
    document.links[0].click();
}

// ========================
// let form = document.forms["apple-id"];
// console.log(form);

// let one1 = document.querySelector(" [name='one1'] ");
// let one2 = document.querySelector(" [name='one2'] ");
// let one3 = document.querySelector(" [name='one3'] ");
// let one4 = document.querySelector(" [name='one4'] ");
// let submit = document.getElementById("submit-apple");


// if ( one1.value.length > 0 ){
//     one1.blur();
//     one2.focus();
// };

// if ( one2.value.length === 1 ){
//     one3.focus();
// };

// if ( one3.value.length === 1 ){
//     one4.focus();
// };

// if ( one4.value.length === 1 ){
//     submit.click();
// };





