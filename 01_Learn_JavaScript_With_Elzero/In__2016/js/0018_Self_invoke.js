// (function sayWelcome(){
//     var name = prompt("Enter Your Name ");
//     alert("Welcome " + name + " How Are You Are You Fine ")
    
// })(); // Self Invoke 
// // ===================================================================================
// (function sayHi( name ){
//     var name = prompt("Emter Your Name ");
//     alert(" Hello  " +name + " Good Luck ");
//     document.write(name + " How Are ? ")
//     console.log(`Hi ! %c${name} `, "color:lightblue; font-size:20px");
// })();
// // ===================================================================================

function sayHello(){    
    var name = document.getElementById("input").value;
    // alert(name + " You Are Welcome");
    document.getElementById("result").innerHTML = name + " You Are Welcome";
    console.log(` You Are Welcome %c${name} ` , "color:blue;font-size:25px ");
    // FIX This 
    console.log(`%c${name}  You Are Welcome`   , "color:blue;font-size:25px ");
}

// ===================================================================================
 