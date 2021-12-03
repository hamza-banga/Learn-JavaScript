function calc(){
    var amount = document.getElementById("input").value;
    result = amount * 3.14 ; 
    console.log(result + " SD");
    return document.getElementById("result2").innerHTML = result + " SD";
};
