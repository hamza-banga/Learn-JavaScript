 /**
  * DOM [ Event Simulation ]
  *     Click 
  *     Focus
  *     Blur
  */
  var charLimit = 1;
// let one1 = document.getElementById("one1");
// let one2 = document.getElementById("one2");
// let one3 = document.getElementById("one3");
// let one4 = document.getElementById("one4");

let one1 = document.querySelector(" [name='one1'] ");
let one2 = document.querySelector(" [name='one2'] ");
let one3 = document.querySelector(" [name='one3'] ");
let one4 = document.querySelector(" [name='one4'] ");
let submit = document.getElementById("submit-apple");

window.onload = function (){
    one1.focus();
};

// if ( one1.value.length >= charLimit ){
//     // one1.blur();
//     one2.focus();
// };
one1.keydown = function(){
    one2.blur();
};

// if ( one2.value.length === 1 ){
//     one3.focus();
// };

// if ( one3.value.length === 1 ){
//     one4.focus();
// };

// if ( one4.value.length === 1 ){
//     submit.click();
// };


// inputs.keydown(function(e) {
//     var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

//     $(this).val('');

//     if (e.which == 8 && this.value.length == 0) {
//         $(this).prev(inputs).focus();
//     } else if ($.inArray(e.which, keys) >= 0) {
//         return true;
//     } else if (this.value.length > charLimit) {
//         $(this).next(inputs).focus();
//         return false;
//     } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
//         return false;
//     }
// }).keyup (function () {
//     if (this.value.length >= charLimit && $(this).next(inputs).attr('type') === 'text') {
//         $(this).next(inputs).focus();
//         return false;
//     }
// });


