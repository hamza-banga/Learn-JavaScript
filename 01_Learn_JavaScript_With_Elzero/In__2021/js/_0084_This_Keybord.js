/**
 * Function This Keyword 
 *  This Introduction 
 *  This Inside Object Method 
 *  
 * When a Function is Called As A Method Of An Object 
 * its this is set to the object the method is calledon 
 * Global Object 
 * Test Variables With Window And This 
 * Global Context 
 * Function Context
 * 
 * Search 
 *  Strict Mode 
 * 
 */

 console.log(this); // -> in Browser Git Window in Termanal Get {}
 console.log(this === window); // -> in Browser Git True  in Termanal Get error
 
 // let myVar = 100; --> Get Error
 // var myVar = 100; 
 myVar = 100;
 
 function sayHello(){
     return this;
 }
 sayHello();
 
 
 
 console.log(myVar); // -> 100
 console.log(window.myVar); // -> 100
 console.log(this.myVar); // -> 100
 
 
 // =================================
 function sayHello(){
     return this;
 }
 sayHello();
 console.log(window === sayHello() ); // -> true
 // =================================
 document.getElementById("cl").onclick = function (){
     console.log(this); // -> <button id="cl">Clik</button>
 }
 
 // =================================
 // Use In Object 
 
 let user = {
     age : 23,
     ageInDays:function(){
         return this.age * 365;
     },
 };
 
 console.log(user.age); // -> 23
 console.log(user.ageInDays()); // -> 8395
 
 
 
 