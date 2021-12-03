/*
Function 
    Rest Parameters
    Only One Allowed
    Must Be Last Element

*/

function calc(...numbers){
    
    let result = 0 ;
    for (let i = 0 ; i < numbers.length; i++){
        result += numbers[i];  
    }
    
    return ` Final Result Is ${result} `;
}

console.log(calc(10, 12, 52, 8, 18));


