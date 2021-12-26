/**
 * Array Methods 
 * Array.some(CallBackFunction(Element, index, Array), This Argument)
 * -- CallBackFunction => Function To Run On Every Element On The Given Array
 * ---- Element => The Current Element To Process 
 * ---- Index => Index Of  Current Element 
 * ---- Array => The Current Array Working With 
 * --This Argument =>  Value To Use As This When Executing CallBackFunction 
 * 
 * Use
 * -- Check if Element Exists In Array 
 * -- Check if Number In Range 
 */

let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10  ]

let check = nums.some(function(e){
   console.log(e)
    return e > 5 ;
});

// let checkArow = nums.some( (e) => e > 5 );

let checkArow = nums.some( (e) => console.log(e > 5) );


function checkValues(arr,val){
    return arr.some(function(e){
        return e === val;
    });
}
console.log(checkValues( nums, 20 )); // -> false
console.log(checkValues( nums, 5  )); // -> true


let range = {
    min:10,
    max:20
};
let checkRange = nums.some( function(e){
    // console.log(this.min);
    // console.log(this.max);
    return e >= this.min && e <= this.max;
},range)

console.log(checkRange); // -> true





// let print = nums.some(function(e){
//     if(e > 5){
//         console.log(` ${e} Grat Than 5 `);
//     }else{
//         console.log(` ${e} Less Than 5 `);
//     }
// })