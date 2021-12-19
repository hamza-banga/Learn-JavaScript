/**
 * DOM [ Creat Elements ]
 *      Practice Product With Heading And Paragraph 
 *      _0090_Product_With_Title_Description_Practice
 */

for(let i = 0; i < 99; i++){

    let myDiv = document.createElement("div");
    let myheading = document.createElement("h1");
    let myParargraph = document.createElement("p");
    
    let myheadingText = document.createTextNode(` Title Of Product [${i +1}] `);
    let myParargraphText = document.createTextNode(`[${i +1}] Description Of Producte Description Of Producte Description Of Producte`);
    
    myheading.appendChild(myheadingText);
    myParargraph.appendChild(myParargraphText);
    
    myDiv.setAttribute("class", `main product-${i +1}`);
    myDiv.appendChild(myheading);
    myDiv.appendChild(myParargraph);
    document.body.appendChild(myDiv);
}    
