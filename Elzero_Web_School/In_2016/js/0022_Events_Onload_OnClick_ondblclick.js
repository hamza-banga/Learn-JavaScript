// function onload(){
    //     document.getElementById("result").innerHTML = "The Page Complaet Load We Can Use Load Page Here ";
// }
// function Click(){
//     document.getElementById("result").innerHTML = "Your Clicked In window ";
// }
// // ===================================================================
// function DblClick(){
//     document.getElementById("result").innerHTML = "Your DblClick In window ";
// }

// ===================================================================
// (property) onload: ((this: GlobalEventHandlers, ev: Event) => any) & ((this: window, ev: Event) => any)
// var window: window & typeof globalThis
window.onload = function(){
    document.getElementById("result").innerHTML = "This Text From Js File Abber After Load The window "
}

// ===================================================================
// (property) onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) & ((this: window, ev: MouseEvent) => any)
window.onclick = function () {
    document.getElementById("result").innerHTML = "Your<b> Clicked</b> In window ";
}

// ===================================================================

window.ondblclick = function () {
    document.getElementById("result").innerHTML = "Your <b>DblClicked</b> In window ";
}
// // ===================================================================
// window.onkeypress = function (){
//     document.getElementById("result").innerHTML = "<b>onKeypress</b>";
// }
// // ===================================================================
// window.onkeydown = function (){
//     document.getElementById("result").innerHTML = "<b>onkeydown</b>";
// }
// // ===================================================================
// window.onkeyup = function (){
//     document.getElementById("result").innerHTML = "<b>onkeyup</b>";
// }
// // ===================================================================
// window.onmousedown = function (){
//     document.getElementById("result").innerHTML = "<b>onmousedown</b>";
// }
// // ===================================================================
// window.onmouseout = function (){
//     document.getElementById("result").innerHTML = "<b>onmouseout</b>";
// }
// // ===================================================================
// window.onmousemove = function (){
//     document.getElementById("result").innerHTML = "<b>onmousemove</b>";
// }
// // ===================================================================
// // ===================================================================
// // ===================================================================