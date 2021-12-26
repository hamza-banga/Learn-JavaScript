/**
 * _0116_Destructring_Array_Part_3_swap_Variabls
 * 
 */

let book = "Video";
let video = "Book";

// // This Old Way 

// // Save Book In Value 
// let stash = book;

// // Change Book Value
// book = video; // Book

// // Change Video Value 
// video = stash;

// By Detracturing 

[book, video] = [ video, book  ];

console.log(book);
console.log(video);