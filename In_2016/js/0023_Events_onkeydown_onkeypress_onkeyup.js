var myInput = document.getElementById("input"),
    myResult = document.getElementById("result"),
    myButton = document.getElementById("button");

// // ===========================================================
// function clacSD() {
//     myResult.innerHTML = "<b>" + myInput.value * 3.75 + "  SD </b>";    
// }
// // ===========================================================
// myButton.onclick = function(){
//     myResult.innerHTML = "<b>" + myInput.value * 3.75 + "  SD </b>";    
// }

// ===========================================================

// myInput.onkeydown = function (){
//         myResult.innerHTML = "<b>" + myInput.value * 3.75 + "  SD </b>";    
// }
// ===========================================================

// myInput.onkeypress = function (){
//         myResult.innerHTML = "<b>" + myInput.value * 3.75 + "  SD </b>";    
// }

// ===========================================================
myInput.onkeyup = function (){
        myResult.innerHTML = "<b>" + myInput.value * 3.75 + "  SD </b>";    
}
// ===========================================================
