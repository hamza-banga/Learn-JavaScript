var myInput = document.getElementById("input"),
    mySelect = document.getElementById("select"),
    myResult = document.getElementById("result"),
    mySpan = document.getElementById("span");

mySelect.onchange = function(){
    myResult.innerHTML =  "Worth " + myInput.value  * mySelect.value + " SD" ;
}

myInput.onkeyup = function(){
    myResult.innerHTML =  "Worth " + myInput.value  * mySelect.value + " SD" ;
}

mySpan.onmouseover = function(){
    mySpan.innerHTML = "<h1> Your Over On Me !</h1>"
}

// =============================================
mySpan.onmouseleave = function(){
    mySpan.innerHTML = "Your Have Gone !"
}

