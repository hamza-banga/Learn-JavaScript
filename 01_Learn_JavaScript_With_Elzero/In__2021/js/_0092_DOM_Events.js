/**
 * DOM [ Events ]
 *  Use Events On HTML
 *  Use Events On JS
 *      onclick
 *      oncontexmenu
 *      onmouseenter
 *      onmouseleave
 * 
 *      onload
 *      onscroll
 *      onresize
 * 
 *      onfocus
 *      onblur
 *      onsubmit
 *      
 *      More_&_More 
 */

function clicked(){
    console.log(` You Cliked On Button From JS File  `)
}

let Anonmous = document.getElementById('btn');
Anonmous = function () {
    console.log(` Clicked `);
}

document.body.oncontextmenu(console.log("Clicked3"))