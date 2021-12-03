/*
Function - Random Argument Challenge
====================================
Creat Function  ShowDetails
function Accept 3 Parameters [ a, b, c ]
Data Type For Info Is 
    string => Name
    Number => Age
    Boolen => Status

Argument Is Random 
Date Is Not Sorted OutPut Depend On DataType
    Use Ternary Conditionl Operator
*/

function ShowDetails(name, age, status){

    
    status === true ? document.write(` <h2> Hello ${name} , Your Age Is ${age}, You Are Available For Hire </h2> `) : document.write(` <h2> Hello ${name} , Your Age Is ${age}, You Are Not Available For Hire </h2> `);

}

ShowDetails("Osama", 38, true ); // "Hello Osama , Your Age Is 38, You Are Available For Hire"
ShowDetails(38,"Osama", true ); // "Hello Osama , Your Age Is 38, You Are Available For Hire"
ShowDetails( true, 38, "Osama" ); // "Hello Osama , Your Age Is 38, You Are Available For Hire"
ShowDetails( false, "Osama", 38); // "Hello Osama , Your Age Is 38, You Are Not Available For Hire"