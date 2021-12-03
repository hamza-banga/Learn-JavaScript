/*
Function 

    What is Function ?
    User Defined Vs Built-in 
    Syntax + Basic Usage 
    Example + Argument 
    Practical Example 

*/

// Built-In Function  
console.log(typeof console.log ); // =>  function 

// ===============================================
// Coustom Function 
function sayHi() {
    // console.log("Hi ! ");
    console.log("%cHi ! " , " font-size:25px;color:blue ");
    document.write("Hi ! <br>");
}
sayHi();

// ===============================================
// Function With One Arg
function sayHello1(name) {
    console.log(`Hello %c${name} ` , " font-size:25px;color:green " );
    document.write(` <div> Hello ${name} </div> <br> `) ;

}

sayHello1("Islam");
// ===============================================
// Function With MoreThan One Args
function sayHello(name , age ) {
    if (age > 20 ){
        console.log(`Hello %c${name} Your Age is ${age} ` , " font-size:25px;color:green " );
        document.write(` <div> Hello ${name}  Your Age is ${age} </div> <br> `) ;
    }else{
        console.log(` Your Not Wellcome  %c${name} Your Age is ${age} ` , " font-size:25px;color:green " );
        document.write(`<div> Your Not Wellcome ${name}  Your Age is ${age} </div> <br> `) ;

    }

}

sayHello("Islam", 1443);
sayHello("hamza", 23);
sayHello("Moazer", 24);
sayHello("hassan", 19);

function generateYears( start, end ) {

    document.write("<select>");
    for ( i = start ; i <  end; i++){
        document.write(`<option value="${i}" > ${i} </option> `)
    }
    document.write("</select> <br><br><br> ");

}

generateYears(1990,2020);

// ========================================
// With exclude Out Put

function generateYearse1( start, end, exclude ) {

    document.write("<select>");
    for ( i = start ; i <=  end; i++){
        if (i === exclude ){
            continue;
        }
        document.write(`<option value="${i}" > ${i} </option> `)
    }
    document.write("</select>");

}
generateYearse1(1990,2025, 2000);

// ===============================================
// Function With Return 

function calc( num1, num2 ) {
    return num1 + num2;
    // Not Alow To Make New Line 
    // Any Thing Here Not Excuted After Retrun.
    // console.log("This Text Not Apear In Console. ")
}
console.log(calc( 20 , 30 ));
let result = calc( 10 , 25  );
console.log(result);
console.log(result * 3 );

console.log(`%cReturn ` , "font-size:25px;color:red ")

function return2(start, end){
    for ( j = start; j <= end; j++ ){
        console.log(j); // 10 11 12  13 
        if (j === 13){
            return; // Stop Here 
        }
    }
}

return2(10, 15);

// ==========================================
// Function With Default Praemeter

// function sayWellcom( username, Age = "Unknown" ){
    
    // Old Way To Defined Default Arg
    // if (Age === "indefined"){
    //     Age = " Unknown"
    // }

    // Other Way To Defined Default Arg
    // Age = Age || "UnKnown";

    // Best Way Write Inside A Function 
    // function_Name( arg = "Value" );


// }