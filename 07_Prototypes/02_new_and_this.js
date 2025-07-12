function createUser(username, age){
    this.username = username
    this.age = age
}

createUser.prototype.incrementAge = function(){
    this.age++
}
createUser.prototype.printMe = function(){
    console.log(`Age is ${this.age}`);
}

const user1 = new createUser("Muhammad Hussain", 22)
const user2 = createUser("Ali Raza", 7)
const user3 = new createUser()

user1.printMe()
// user2.incrementAge()
console.log(user1.__proto__) // prints both functions, incrementAge and printMe

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

