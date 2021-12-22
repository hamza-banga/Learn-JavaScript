/**
 * DOM [ Events ]
 *  Validate Form Practice 
 *  Prevent Default 
 */

document.links[0].onclick = function(e){
    console.log(e);
    e.preventDefault();
}

let userInput = document.querySelector(" [name='username'] ");
let ageInput = document.querySelector(" [name='age'] ");

document.forms[0].onsubmit = function (e){
    let usreValid = false;
    let ageValid = false;
    
    // Check If The Name Valid Or Not 
    if ( userInput.value !== "" && userInput.value.length  <= 10 ){
        usreValid = true;
    }
    // Check If The Age Valid Or Not 
    if ( ageInput.value !== "" ){
        ageValid = true;
    }

    if ( usreValid === false || ageValid === false){
        e.preventDefault();
    }
};

// ========================================

let userInputOne = document.querySelector(" [name='username2'] ");
let ageInputOne = document.querySelector(" [name='age2'] ");
document.forms[1].onsubmit = function (e){
    let usreValid1 = false;
    let ageValid1 = false;
    // Check If The Name Valid Or Not 
    if ( userInputOne.value !== "" && userInputOne.value.length  <= 10 ){
        usreValid1 = true;
    }
    // Check If The Age Valid Or Not 
    if ( ageInputOne.value !== "" ){
        ageValid1 = true;
        // console.log(typeof ageInputOne.value)
    }
    if ( usreValid1 === false || ageValid1 === false){
        e.preventDefault();
    }
};


