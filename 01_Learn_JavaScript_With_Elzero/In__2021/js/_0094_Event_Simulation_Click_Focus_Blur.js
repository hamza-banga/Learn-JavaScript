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
let one1 = document.querySelector("#one1 ");
let one2 = document.querySelector("#one2 ");
let one3 = document.querySelector("#one3 ");
let one4 = document.querySelector("#one4 ");
let submit = document.getElementById("submit")
window.onload = function(){
    one1.focus()
};

if ( one1.value.length > 1){
    one2.focus();
}






