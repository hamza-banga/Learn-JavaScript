/**
 * Creat Object with assign
 * 
 */

let object1 = {
    prop1: 1,
    prop2:2,
    method1: function(){
        return this.prop1;
    },
};

let object2 = {
    prop1 : 2,
    prop3:3,
    method2:function(){
        return this.prop3
    },
};

let object3 = {
    prop1:4,
    prop4:4
}

/**
 * (method) ObjectConstructor.assign<T, U>(target: T, source: U): T & U (+3 overloads)
 * Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 * @param target — The target object to copy to.
 * @param source — The source object from which to copy properties.
 * assign<T, U>(target: T, source: U): T & U;
 */

let copyObject = Object.assign(object3, object1, object2 );

// We Can Edite Remove Any Thing In New Object 
console.log( copyObject )

// We Can Creat Void Object & Object & Method & 

// var methodName=  function () { return console.log(` This Called From Out Side Object `); }

let newObject = Object.assign({}, object1, {porp5:5,prop6:6 } );
console.log(newObject);

let newObjectOther = Object.assign(
    {},
     object1,
      {
        porp5:5,
        prop6:6,
        method3: function () { 
            return console.log(` This Called From Out Side Object `); 
        }
    } 
);

console.log(newObjectOther);

