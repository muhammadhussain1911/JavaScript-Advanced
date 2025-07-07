// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     logMe(){
//         console.log(`Name of user is ${this.name}`);
//     }
// }

// class Teacher extends User {
//     constructor(name, status) {
//         super(name);
//         this.status = status
//     }
//     myStatus() {
//         return (`My name is ${this.name} and I'm a ${this.status}.`)
//     }
// }

// class Student extends User {
//     constructor(name, status) {
//         super(name);
//         this.status = status
//     }
//     myStatus() {
//         return (`My name is ${this.name} and I'm a ${this.status}.`)
//     }
// }

// const teacher = new Teacher("Muhammad  Hussain", "teacher");
// const student = new Student("Ali Raza", "student");
// console.log(teacher);
// console.log(student);
// console.log(teacher.myStatus());
// console.log(student.myStatus());

// const userThree = new User("Hasan")
// console.log(userThree.logMe());
// const userFour = new Student("Hasan Raza", "student")
// console.log(userFour);

// console.log(student === teacher); // false. Instance of different classes.
// console.log(student === userFour); // false. Although these objects are instances of same class but actually instances are different.
// console.log(userFour instanceof Teacher);
// console.log(userFour instanceof Student);
// console.log(userFour instanceof User); // true. because userFour instance of Student and Student 


