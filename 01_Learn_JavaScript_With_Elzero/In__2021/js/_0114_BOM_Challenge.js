/**
 * بسم الله الرحمن الرحيم 
 * وبه نبدئ ونستعين 
 */

let inputField = document.querySelector(" .input");
let addTaske = document.querySelector("[type='submit']");

addTaske.onclick = function(){

    if (inputField.value !== "" ){
        window.localStorage.setItem("tasks", `${inputField.value} `);
        inputField.value = "";
        
        let myTasks = document.querySelector(".tasks");
        let container = document.createElement("div");
        let myDiv = document.createElement("div");
        let ButtonDlete = document.createElement("button");
        
        myDiv.style.cssText = `background-color: #fff; width: 70%; padding: 8px; display: inline-block; border-radius: 4px; margin: 4px; `
    ButtonDlete.style.cssText = "background-color: red; color: #fff; padding: 7px; border-radius: 4px;"
    let deletText = document.createTextNode("delet");
    let mytask = document.createTextNode(`${window.localStorage.getItem("tasks")} `);
    
    myDiv.appendChild(mytask);
    ButtonDlete.appendChild(deletText);
    
    container.appendChild(myDiv);
    container.appendChild(ButtonDlete);
    myTasks.appendChild(container);
    document.body.appendChild(myTasks);
}
}

