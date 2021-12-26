/**
 * BOM 
 * -- LoacalStorage Practice
 */

let list = document.querySelectorAll("ul li");
let div = document.querySelector(" .experiment");

if ( window.localStorage.getItem("color") ){
    // If There Is Color In Local Atorage 
    // [1] Add Color To Div
    div.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove Active Calss From All ist 
    list.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"] `).classList.add("active");
}

list.forEach((li) => {

    li.addEventListener("click",(e) => {
        // Remove Active Class From All list
        list.forEach((li) => {
            li.classList.remove("active");
        });

    // Add Active Calss To Current Element 
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color );
    //  Change Background Color
    div.style.backgroundColor = e.currentTarget.dataset.color
    });

});




// let list = document.querySelectorAll("ul li");
// let div = document.querySelector(" .experiment");

// list.forEach((li) =>  {
//     li.addEventListener("click", function(e) {
//         // console.log(e.currentTarget.dataset.color);
//         // div.style
//     });
// });