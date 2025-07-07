class User {
    constructor(fullName, age, password) {
        this.fullName = fullName;
        this.age = age;
        this.password = password;
    }

    setPassword() {
        return `${this.password}xyz`
    }
    modifyName() {
        return `${this.fullName.toUpperCase()}`
    }
}

const firstUser = new User("Muhammad Hussain", 22, "1234")
console.log(firstUser);
console.log(firstUser.setPassword());
console.log(firstUser.modifyName());

// <============ BTS if classes doesn't exist then what we do? ============>
// Classes exist in JavaScript, introduced with ECMAScript 2015 (ES6). However, it is important to understand that JavaScript's classes are primarily "syntactic sugar" built on top of its existing prototype-based inheritance model. This means they provide a more familiar and structured syntax for object-oriented programming, resembling classes in languages like Java or C++, but they do not fundamentally change JavaScript's underlying object model. We can say that: Javascript is not OOP based language. It is prototype based language.

function btsUser(fullName, age, password) {
    this.fullName = fullName;
    this.age = age;
    this.password = password;
}

User.prototype.setPassword = function() {
    return `${this.password}xyz`
}
User.prototype.modifyName = function() {
    return `${this.fullName.toUpperCase()}`
}

const userOne = new User("Muhammad Hussain", 22, "1234")
console.log(userOne);
console.log(userOne.setPassword());
console.log(userOne.modifyName());

