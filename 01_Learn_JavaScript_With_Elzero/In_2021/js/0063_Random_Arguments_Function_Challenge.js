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

function ShowDetails(name, age , status  ){
    var name2 , age2, status2;

    if ( typeof name === "string" ){
        name2 = name;
    } else if ( typeof name === "number" ){
        age2 = age;
    } else {
        status2 = status;
    }
    // =================================

    // typeof name === "string" ? 
    // name2 = name; :
    // typeof name === "number" ?
    // age2 = age; : 
    // typeof name === "boolean" ?
    // status2 = status; :

    if ( typeof age  === "string" ){
        name2 = age;
    } else if ( typeof age === "number" ){
        age2 = age;
    } else{
        status2 = age;
    }

    // typeof age  === "string" ?
    // name2 = age; :
    // typeof age === "number" ?
    // age2 = age; :
    // typeof age === "boolean" ?
    // status2 = age :

    if ( typeof status === "string" ){
        name2 = status;
    } else if ( typeof status === "number" ){
        age2 = status;
    } else if ( typeof status === "number" ){
        age2 = status;
    } else {
       return
    }

    // typeof status === "string" ?
    // name2 = status; :
    // typeof status === "number" ?
    // age2 = status; :
    // typeof status === "boolean" ?
    // status2 = status; :

    // status2 === true ? document.write(` <h2> Hello ${name2} , Your Age Is ${age2}, You Are Available For Hire </h2> `) : document.write(` <h2> Hello ${name} , Your Age Is ${age}, You Are Not Available For Hire </h2> `);
    status2 = "true" ? document.write(` <h2> Hello ${name2} , Your Age Is ${age2}, You Are Available For Hire </h2> `) : document.write(` <h2> Hello ${name2} , Your Age Is ${age2}, You Are Not Available For Hire </h2> `);

}

ShowDetails("Osama", 38, true ); // "Hello Osama , Your Age Is 38, You Are Available For Hire"
ShowDetails(38,"Osama", true ); // "Hello Osama , Your Age Is 38, You Are Available For Hire"
ShowDetails(true, 38, "Osama" ); // "Hello Osama , Your Age Is 38, You Are Available For Hire"
ShowDetails(false, "Osama", 38); // "Hello Osama , Your Age Is 38, You Are Not Available For Hire"


// function showDetails(...parameters)
// {
//     let one , two ,three;
//     document.write(`<div>`);
//     for(let i=0;i<parameters.length;i++)
//     {
//         let s = typeof(parameters[i]);
//         switch (s){
//             case 'string':
//                  one = parameters[i];
//                 break;
                
//             case 'boolean':
//                 if(parameters[i]===true)
//                 {
//                     three="you are avilable for hire";
//                 }
//                  else{
//                     three="you are not  avilable for hire";
//                  }
//                 break;
                
//             case 'number':
//                   two=(parameters[i]);
//                 break;
//         }
//     }
   
//     document.write(`<p> hello ${one} , yor age is ${two} , your status it ${three} </p>`);

//     document.write(`</div>`);
// }

// showDetails(true,25,"kenan");
// showDetails(25,"kenan",false);
// showDetails(true,"kenan",25);
// showDetails("kenan",true,25);


// function showDetails(a, b, c) {
//     let name;
//     let age;
//     let status;
//     let z=[a,b,c];
//     for(let i=0;i<3;i++){
//       typeof z[i]==="string"? name=z[i]:typeof z[i]==="number"?age = z[i]:typeof z[i]==="boolean" ? status=z[i]:console.log("incorect data"); 
//     }
//     console.log(`the name : ${name} " " the age: ${age}  the status :${status}`)
//     status===true?console.log("sentance = You are avaliable For Hire"):console.log("sentance = You are not avaliable For Hire") ;
    
//     }
    
//     showDetails("Osama", 38, true);
//     showDetails(38, "Osama", true); 
//     showDetails(true, 38, "Osama"); 
//     showDetails(false, "Osama", 38);


// function ali(a,b,c){
//     let z=[];
//     if(a==='aloush'){
//         if(b===3){
//         if(c===true){console.log(a,b,c);
//         }}} else {
//             z[0]='aloush';
//             z[1]=3;
//             z[2]=true;
//         console.log(z.join());
//         }}    
//     ali(true,'aloush',3)