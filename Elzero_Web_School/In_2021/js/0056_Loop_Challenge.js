/*

Loop Challenge

*/


let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othamn", "Amany","Osama", "Samia"];
let myAdmins2 = []

for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    myAdmins2.push(myAdmins[i])
}

document.write("We Have X Admins")
document.write(` <div> We Have ${myAdmins2.length} Admins </div> `);

for (j = 0; j < myAdmins2.length;j++) {
    let a = 1;
    document.write("<hr>");

    document.write(` <div> The Admin For Team ${j + 1} is ${myAdmins2[j]} </div> `);

    document.write(` <h2>Team Members:</h2> `);
    
    for (k = 0; k < myEmployees.length; k++){
        // let a = 0;
        if (myEmployees[k][0] === myAdmins2[j][0]) {
            document.write(` <div> - ${a} ${myEmployees[k]}  </div>`)
            a++;
            continue;
        }
    }
}







