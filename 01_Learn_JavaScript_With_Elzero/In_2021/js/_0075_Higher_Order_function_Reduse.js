/**
 * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the
 * accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each
 * element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to
 * the callbackfn function provides this value as an argument instead of an array value.
 */


let nums = [ 10, 20, 15, 30 ];
let add = nums.reduce(function(acc, current, index, arr){
    console.log(` Acc => ${acc} `);
    console.log(` Current Element => ${current} `);
    console.log(` Current Index  => ${index} `);
    console.log(` Array => ${arr} `);
    console.log( acc + current );
    console.log("=".repeat(15));
    return acc + current ;
});
console.log(add); // 75
// With initial Value
let addint = nums.reduce(function(acc, current, index, arr){
    console.log(` Acc => ${acc} `);
    console.log(` Current Element => ${current} `);
    console.log(` Current Index  => ${index} `);
    console.log(` Array => ${arr} `);
    console.log( acc + current );
    console.log("=".repeat(15));
    return acc + current ;
}, 5 ); 
console.log(addint); // -> 80