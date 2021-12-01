/*

Loop Contro
    Break
    Continue
    Label

*/

let products = ["PC", "Desk","Keybord", "Mouse", "Pen", "Screen", "Phone", "Pad"];

let colors = ["Golden", "Blue", "Green", "White", "Read"];

// break
// =======================================
for (let i = 0; i < products.length; i++){
    if (products[i] === "Pen") {
        break;
    }
    console.log(products[i]);
}
// continue
// =======================================
console.log("=".repeat(35));
for (let i = 0; i < products.length; i++){
    if (typeof products[i] === "number") {
        continue;
    }
    console.log(products[i]);
}
console.log("=".repeat(35));

// Label
// =======================================
mainLoop: for (let k = 0; k < products.length; k++){
    console.log(products[k]);
    nestedLoop: for (let j = 0; j < colors.length; j++){
        console.log(` - ${colors[j]}`);
            if (colors[j] === "Green") {
                break nestedLoop
                // break mainLoop;
            }
    }
}

// =======================================

// Loop For Advanced Example

let product = ["PC", "Desk", "Keybord", "Mouse", "Pen", "Screen", "Phone", "Pad"];

let i = 0;
for (; ;){
    console.log(product[i]);
    i++;
    if (i === product.length) break;

    // if (i === product.length) {
    //     break;
    // }
}

