let header = document.createElement("header");
let log = document.createElement("div");
let nav = document.createElement("nav");
let unorderList = document.createElement("ul");
let listItems = document.createElement("li");

let homeTextli = document.createElement("li");
let aboutTextli = document.createElement("li");
let serveceTextli = document.createElement("li");
let contactTextli = document.createElement("li");

let homeText = document.createTextNode("Home ");
let aboutText = document.createTextNode("About ");
let serveceText = document.createTextNode("Servece ");
let contactText = document.createTextNode("Contact ");
let textLog = document.createTextNode("Elzero");

homeTextli.appendChild( homeText );
aboutTextli.appendChild( aboutText );
serveceTextli.appendChild( serveceText );
contactTextli.appendChild( contactText);

unorderList.appendChild(homeTextli);
unorderList.appendChild(aboutTextli);
unorderList.appendChild(serveceTextli);
unorderList.appendChild(contactTextli);


nav.appendChild(unorderList);
log.appendChild(textLog);
log.setAttribute("class", "log")
header.setAttribute("class","website-head");

/** Start Style header*/
// Style Body
document.body.style.cssText = "margin:0;background-color:rgb(236, 236,236); font-family:tahoma,Arial";
// style Header
// content.style.cssText = " display:flex; padding:20px; background-color:#FFF;justfiy-content:space-between;alingn-items:center "
header.style.cssText = "background-color:#fff; padding:10px; border-radius:5px";

// Style Log 
log.style.cssText = " font-size:25px; color:green;font-weight:bold; display:inline-block; line-height:40px"
// Style Nav display: inline-block;
nav.style.cssText = " float: right; display: inline-block;line-height: 0px;";
// Style ul
unorderList.style.cssText = "list-style:none;"
// Style li 
homeTextli.style.cssText = "display:inline-block;padding:5px; ";
aboutTextli.style.cssText = "display:inline-block;padding:5px; ";
serveceTextli.style.cssText = "display:inline-block;padding:5px; ";
contactTextli.style.cssText = "display:inline-block;padding:5px; ";

/** End Style header*/

header.appendChild(log);
header.appendChild(nav);
document.body.appendChild(header);






// ===================================================
// Start Container 

let content = document.createElement("div");
for(let i = 0; i < 15; i ++ ){
    let span = document.createElement("span");
    let ProductText = document.createTextNode("Product");
    let Product = document.createElement("div");

    let numberText = document.createTextNode(` ${i + 1} `);
    
    span.appendChild(numberText);
    Product.appendChild(span);
    Product.appendChild(ProductText);
    content.appendChild(Product);

    content.setAttribute("class","content");
    Product.setAttribute("class", "product");
    
    content.style.cssText = " display:flex; padding:20px; flex-wrap:wrap; justfiy-content:center; gap:20px; min-height: calc(100vh - 142px); box-sizing: border-box; ";
    Product.style.cssText = "padding:20px; background-color:#FFF; border:1px solid rgb(221, 221, 221); width:calc((100% - 40px) / 3); box-sizing:border-box; text-align:center; color:rgb(136, 136, 136); border-radius:6px ";
    span.style.cssText = " font-size:40px; color:black; font-weight:normal; display: block; margin-bottom:10px; margin-top:10px; ";
}
document.body.appendChild(content);






// =============================================

let footer = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2021");

footer.appendChild(footerText);
footer.style.cssText = " background-color:rgb(35, 169, 110); font-size:26px; text-align:center; padding:20px; color:#FFF;  ";



document.body.appendChild(footer);






