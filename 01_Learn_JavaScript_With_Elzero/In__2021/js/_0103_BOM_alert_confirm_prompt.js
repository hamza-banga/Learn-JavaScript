/**
 * BOM [ Borwser Object Model ]
 * -- Alert
 * 
 */
/**
 * (method) alert(message?: any): void
 * alert(message?: any): void; 
 */
// sweetalert2 webSite 

// window.alert("Alert 1 ")
// this.alert("Alert 2")
// alert("This Alert 3")

// let confirmMessage = confirm("Are You Sure ?");

// console.log(confirmMessage);

// if( confirmMessage === true ){
//     console.log("item deleted ");
// }else {
//     console.log(" item Not deleed ");
// }

/**
 * function prompt(message?: string, _default?: string): string
 * declare function prompt(message?: string, _default?: string): string | null
 */
let promptMessage = prompt("Good Day To You ?" , "Write Day with 3 Characers ");

console.log(promptMessage);

switch (promptMessage) {
    case "sat":
        console.log(`Your Favaorit Day is ${promptMessage}`);
        break;

    // default:
        // break;
}