const obj1 = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(obj1);

// console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI); // Immutable. There are flags are what make Math.PI immutable (unchangeable). writable: false, enumerable: false, configurable: false

// <============ Methods for Object declaration ============>

// const obj2 = Object.create() // By default it is null.
const obj3 = {
    name: "Muhammad Hussain",
    age: 22,
    isJSDeveloper: true,
    roadMap: function() {
        console.log("3 Months need to complete JavaScript.");
    }
} 

// <============ Accessing property descriptor of own object's properties ============>

// const objDescObj3 = Object.getOwnPropertyDescriptor(obj3)
// // console.log(objDescObj3); // undefined, because we obj3 is object, not a property.


// const propDescObj3 = Object.getOwnPropertyDescriptor(obj3, "name")
// console.log(propDescObj3);

Object.defineProperty(obj3, 'name', {
    writable: false,
    enumerable: false // if false we cannot do loop on tis property of object.
})

// console.log(Object.getOwnPropertyDescriptor(obj3, 'name'))

// obj3.name = "Shahzad Ahmad"

// console.log(obj3.name);


for (let [key, value] of Object.entries(obj3)) { // By default Object is not iterable. If we need to iterate items of object, we have to write like this: Object.entries(...) instead of: Object(...)
    if (typeof value !== 'function') { // A real world scenario where we don't need a function in iteration
        
        console.log(`${key} : ${value}`);
    }
}