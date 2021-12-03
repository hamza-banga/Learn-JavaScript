/*
Function 
    Parameters 
    Default
    Rest
    Loop
    Condtion

*/

function userInfo(user = "Unknown", age ="UnKnown", show = "Yes" , ...skills ){
    document.write("<div class='user-info>'");
    
    document.write(` <h2> Wellcome , ${user} </h2> `);
    document.write(` <p> Your Age Is ${age} </p> `);
    if ( show === "no" ){
        if ( skills.length > 0 ){
            document.write(` <div> The Skills Is : ${skills.join( " | " )} </div> ` );
        } else{
            document.write(` <div> No Skills  Yeat </div> ` );
        }
    }else {
        document.write(` <div> No Skills </div> ` );
    }

    document.write("</div>");
}
userInfo("hamza", 23, "Yes", "HTML", "CSS", "JavaScrpt","PHP","MySQL","Python","Wordpress", "SASS","jQuery" );

