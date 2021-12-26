/**
 * 
 * Array Methods
 * -- Array.copyWithin(target, start => optional, end=>optional)
 * -- " Copy Part Of An Array To Another Loaction in The Same Array "
 * -- Any Negative Value Will Count From The End 
 * --- Target 
 * ----- Index To Copy Part To 
 * ----- If At or greater Than Array lenght Nothing Will Be Copied 
 * --- Start 
 * ----- Index To Start Coping From 
 * ----- If Ommited = Start From Index 0 
 * --- End 
 * ----- Index To End Coping From 
 * ----- Not Including End 
 * ----- If Ommited = Reach The End 
 */

let myArray = [ 10, 20, 30, 40, 50, "A", "B" ]

// myArray.copyWithin(3) // -> [ 10, 20, 30, 10, 20, 30, 40 ]

// myArray.copyWithin(3) // -> [ 10, 20, 30, 10, 20, 30, 40 ]

// myArray.copyWithin(4,6); // ->  [ 10, 20, 30, 40, "B", "A", "B" ]
// myArray.copyWithin(4,-1); // ->  [ 10, 20, 30, 40, "B", "A", "B" ]
// myArray.copyWithin(1,-2); // -> [ 10, "A", "B", 40, 50, "A", "B" ]
myArray.copyWithin(1,-2,-1); // -> [ 10, "A", 30, 40, 50, "A", "B" ]
console.log(myArray)