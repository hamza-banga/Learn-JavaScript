/**
 * BOM 
 * session Storage 
 * -- setItem
 * -- getItem
 * -- remveItem
 * -- claer 
 * -- key
 * 
 * Info 
 * -- New Tap = New Session 
 * -- Duplicate Tap = copy sesion
 * -- new tap with same Url =  new session
 */

window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");



let input = document.querySelector(".name");

input.onblur = function(){
    // console.log(this.value);
    window.sessionStorage.setItem("name", this.value);
}
input.innerHTML = window.sessionStorage.getItem("name");