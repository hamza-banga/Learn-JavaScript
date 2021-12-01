// Products Practice

let Products = ["PC", "Phone", "Pad", "Iphone", "Keybord"];
let colors = ["Blue", "White", "Golden"];
let model = [2020, 2021];
let counter = 4;
document.write(`<h1> Show ${counter} Products . </h1>`);
for (let i = 0; i < counter; i++){
    document.write(`<div >`);
    document.write(`<h2 class="${Products[i]}"> [${i + 1}] ${Products[i]}</h2>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p class="${colors[j]}"> =>  ${colors[j]} </p> `)
        for (let k = 0; k < model.length; k++){
            document.write(`<div class="${model}"> ---- ${model[k]}</div> `)
        }
    }
    document.write(`</div>`);
}
