/** 
 * BOM []
 * -- Practice => Scroll To Top
 * -- ScrollX [ Alias => pageXOfset ]
 * -- ScrollY [ Alias => pageYOfset ]
 */

let btn = document.getElementById("up");

window.onscroll = function(){
    if ( window.scrollY >= 500 ){
        console.log(` ${window.scrollY} `);
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    // window.scrollTo(0,0);
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
}