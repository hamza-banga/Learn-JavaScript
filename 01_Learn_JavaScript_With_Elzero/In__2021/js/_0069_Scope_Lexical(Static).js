/**
 * Scope 
 *      Lexical Scope
 * 
 * Search 
 *      Execution Context
 *      Lexical Enviroment
 * 
 */
function parent(){
    let a = 10;
    function child(){
        // let a = 20; // Well Over Write On Global Scope 
        let b = 10;
        console.log(` From Child ${a} `); // -> 10
        console.log(` From Child ${a} `); // -> 10
        function grand(){
            let b = 20;
            console.log(`From Grand ${a}`); // -> 10
            console.log(`From Grand ${b}`); // -> 10 [@hmzoooz]
        }
        grand()
    }
    child();
}
parent();