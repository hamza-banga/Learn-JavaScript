/*************************************
 * 
 * Function 
 *  Arrow Function 
 *  Regular VS Arrow [ Pram + No Pram ]
 *  Multiple Line 
 * @hamzoooz
 **************************************/
/**
 * Regular Function
 * @returns 
 */
let print = function () {
    return 10;
};
console.log(print); // => 10

/**************************************
 * When We Have One Statment We Can Put In One Line 
 * We Can Remove Function And Return And Pracicts.
 **************************************/

/**************************************
 * Regular Function 
 * Here It Need One Argument.
 **************************************/
let print = function(num){
    return num;
};
console.log( print(50) ); // => 50 ;


/*************************************
 * Arrow Function ||
 * When It Need Argument .
 **************************************/
let print = (num1 , num2) =>  num1 + num2;
console.log( print(20 , 40) ); // => 60 ;


/*************************************
 * Arrow Function ||
 * Here It Need Argument. ||
 * When It Have One Argument We Can Remove Pracets
 * 
 **************************************/
let print = num =>  num;
console.log( print(30) ); // => 30 ;
