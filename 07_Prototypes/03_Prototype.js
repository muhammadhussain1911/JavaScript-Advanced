// Concept:

function appUser(name) {
  this.name = name;
  this.isAdmin = false;
}

appUser.prototype.sayHello = function () {
  return `Hello, I am ${this.name}`;
};

const user1 = new appUser("Ali");

console.log(user1.sayHello());      // Hello, I am Ali
console.log(user1.__proto__);       // Points to User.prototype
console.log(user1.__proto__ === appUser.prototype); // true
console.log(appUser.prototype.__proto__ === Object.prototype); // true
console.log(user1.sayHello); // [Function (anonymous)]

//Behind the scenes (in above code):
// user1 --> User.prototype --> Object.prototype --> null


// Practical implementation

let myHeros = ["KHR", "DAAJ"]


let heroPower = {
    KHR: "Scholar",
    DAAJ: "ImamScholar",

    getPower: function(){
        console.log(`power is ${this.DAAJ}`);
    }
}

Object.prototype.ilm = function(){
    console.log(`ilm is present in all objects`);
}

Array.prototype.greet = function(){
    console.log(`Hussain says Salam`);
}

// heroPower.ilm()
// myHeros.ilm()
// myHeros.greet()
// heroPower.greet()

// inheritance

const User = {
    name: "Hussain",
    email: "Hussain@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// Injecting own function as a method inside String object.
let anotherUsername = "AliRaza     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hassanraza".trueLength()
"MazharAbbas".trueLength()

// Injecting own function as a property inside String object.

Object.defineProperty(String.prototype, "trueLength", {
  get: function () {
    return this.trim().length;
  }
});

let anotherUsername1 = "AliRaza     ";

console.log(anotherUsername1.trueLength);     // 7
console.log("hassanraza".trueLength);        // 10
console.log("MazharAbbas   ".trueLength);    // 11
