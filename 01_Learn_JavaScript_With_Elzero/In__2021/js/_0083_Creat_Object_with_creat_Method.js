/**  
 * Object
 * Creat_Object_with_creat_Method
*/

let user = {
    name: "hamzoooz",
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};

console.log(user); // { name: 'hamzoooz', age: 20, doubleAge: [Function: doubleAge] }
console.log(user["name"]); // hamzoooz
console.log(user.age);  // -> 20
console.log(user.doubleAge());  // -> 40

/**
 * (method) ObjectConstructor.create(o: object): any (+1 overload)
 * Creates an object that has the specified prototype or that has null prototype.
 * @param o — Object to use as a prototype. May be null.
 * create(o: object | null): any;
 */

let newObject = Object.create({}); // -> {}
console.log(newObject);
// Can Take Example Creat Like it  
let newObjectTow = Object.create( user ); //  ->

console.log(newObjectTow); // { name: 'hamzoooz', age: 20, doubleAge: [Function: doubleAge] }
console.log(newObjectTow["name"]); // hamzoooz
console.log(newObjectTow.age);  // -> 20
console.log(newObjectTow.doubleAge());  // -> 40


// We Can Update Any Propartes In 
newObjectTow.name = "Moazer";
newObjectTow["age"] = 23;

console.log(newObjectTow); // { name: 'hamzoooz', age: 23, doubleAge: [Function: doubleAge] }
console.log(newObjectTow["name"]); // hamzoooz
console.log(newObjectTow.doubleAge());  // -> 46


