let theBiggest = [ "Hamzoooz", "Hassan", "Moazer", "Osama", "Buga", "I_Love_Isalm" ];
let check = theBiggest.reduce(function(acc, current){
    console.log(` Acc => ${acc} `);
    console.log(` Current Element => ${current} `);
    console.log( acc.length > current.length ? acc : current );
    console.log("=".repeat(15));// Seper
    return acc.length > current.length ? acc : current ;
});
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@","E","R", "@", "O" ];
let finalString = removeChars.filter(function(e){
    return !e.startsWith("@");
    // }).join("");
}).reduce(function(acc, current){
    return `${acc}${current}`
}) ;
console.log(finalString);


