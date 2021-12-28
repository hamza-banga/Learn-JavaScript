/**
 * Array Methods 
 * array.every(callBackFunction(element, index, Array, ), this)
 * 
 */

 const locations = {
    20: "place -1",
    30: "place -2",
    10: "place -3",
    40: "place -4",
};

let mainLoaction = 15; 

let loactionArray = Object.keys(locations);

console.log(loactionArray); // -> Array(4) [ "10", "20", "30", "40" ]

loactionArrayNumber = loactionArray.map((n) => +n);



let check = loactionArrayNumber.every(function(e){
    return e > this
});



console.log(check); // -> Array(4) [ "10", "20", "30", "40" ]
