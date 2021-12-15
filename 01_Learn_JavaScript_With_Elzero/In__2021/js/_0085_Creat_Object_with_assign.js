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

let copyObject = new Object.assign(object1, object2, object3 );

// We Can Edite Remove Any Thing In New Object 
 
console.log( copyObject )

// document.write(`${copyObject} `)