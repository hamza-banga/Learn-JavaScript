function KnowTheSeason(){
    
    var input = document.getElementById("input").value;

    switch(input.toLowerCase()){
        case "winter":
            document.getElementById("result").innerHTML = " The <b> " + input.toLowerCase() + " </b> Is Very Cool ";
            console.log("The " + input + " Is Very Cool ");
            break;
        
        case "summer":
            document.getElementById("result").innerHTML = " The <b>" + input.toLowerCase() + " </b>Is Very Hot ";
            console.log("The " + `%c${input.toLowerCase()} ` +  " Is Very hot" , "color:red; font-size:30px");
            break;  
        
        case "autumn":
            document.getElementById("result").innerHTML = " The <b>" + input.toLowerCase() + " </b>Is Very Good ";
            console.log("The " + `%c${input.toLowerCase()}   ` +  " Is Very Good " , "color:red; font-size:30px");
            break;  
        
        case "spring":
            document.getElementById("result").innerHTML = " The <b>" + input.toLowerCase() + " </b>Is Very Amazing ";
            console.log("The " + `%c${input.toLowerCase()}` + " Is Very Amazing" , "color:red; font-size:30px");
            break;  
            
        default:
            document.getElementById("result").innerHTML = "<b>" + input.toLowerCase() + "</b> Is'nt Season In Year Pleas Tray again";
            console.log(`"%c${input.toLowerCase()} Is'nt Season In Year Pleas Tray again","color:red;Font-size:25px "`)
            break;
    }
}