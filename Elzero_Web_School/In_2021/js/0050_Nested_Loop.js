let Prodacts = ['Phone', "PC", "Golden", "Hony", "Mouse", "KeyPord"];
let Color = ["Golden", "Blue", "Yello", "Gray", "White"];
let Model = [2020, 2021, 2022];

for (i = 0; i < Prodacts.length; i++) {
    console.log("=".repeat(20));
    console.log(`"#" ${Prodacts[i]}`);
    console.log("=".repeat(20));
    for (let j = 0; j < Color.length; j++) {
        // console.log("Colors");
        console.log(`- ${Color[j]}`);
        for (k = 0; k < Model.length; k++){
            // console.log("Model");
            console.log(` -- ${Model[k]} `)
        }
    }
}

// ====================================================