/**
 *  DOM [ Check Attributes ]
 *  --- Element.attributes
 *  --- Element.hasAttribute
 *  --- Element.hasAttributes
 *  --- Element.removeAttribute
 * 
 */

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementById("pa")

if (myP.hasAttribute( "data-src" ) ){
    if (myP.getAttribute("data-src") === "" ) {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New Value");
    }
} else { 
        console.log("Not Fond");
}

// ===========================================
let myElement = document.querySelector( " #pa " );
// let myElement = document.querySelector( "div" );
if (myP.hasAttributes() ){
    console.log(  myElement  );console.log( `  Has Attributes`);
    // console.log( ` ${myElement} `);
}
// ===========================================
if ( document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log(" Div Has ");
}else {
        console.log(" Div Has No Attribute ");
}

var myTitle = document.title;

if (myP.hasAttribute("title") === "" ) {
        console.log(" Good tilte ");
}else{
    myP.setAttribute("title", `${myTitle}` );
}


