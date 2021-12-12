/**
 * 
 * ForEach 
 *      Method Executes A Provided Function once For Each Array Element.
 * Syntax ForEach(callBackFunction(Element, index, Array) {}, thisArg )
 * 
 * @param callBackfunction 
 * @param Elelment => The Current Element Being Processed in The Array.
 * @param Index  => The Index Element Of Current Being Processed in The Array.
 * @param Array  => The Current Array.
 * @param thisArg
 */

/**
 * (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void 
 * Performs the specified action for each element in an array.
 * @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 */
let mtDiv = document.getElementById("content");
let allDivs = document.querySelectorAll(".content div");
let allList = document.querySelectorAll("ul li");
console.log(allList);
// mtDiv.onmouseout

allList.forEach(function(e){
    e.onclick = function(){
        // Remove Active Calss From All Elements
        allList.forEach(function(e){
            e.classList.remove("active");
        });
        
        // Add Active Calss To This Element
        this.classList.add("active");
  
        // Hide All Divs
        allDivs.forEach(function(e){
            e.style.display = "none";
        });
    };
});

// allList.forEach(function(e){
//     e.onmouseout = function(){
//         allDivs.forEach(function(e){
//             e.style.display = "block";
//         }); 
//     };
// });

// Outside Function 
allDivs.forEach(function(e){
    e.onclick = function(){

        allDivs.forEach(function(e){
            e.style.display = "block";
            // console.log(e.innerHTML);
        });
        e.style.display = "none";
        console.log(` Your Are Hide ${e.innerHTML} `)
    };
});