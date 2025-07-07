class User {
    constructor(username){
        this.username = username
    }

    userID(){
        return `UserID: ${this.username}${Math.round(Math.random() * 10000)}`;
    }

    static createIdManually(){
        return `${this.username}123`
    }
}

// const userOne = new User("Ali_Raza")
// console.log(userOne.userID())
// console.log(userOne.createIdManually()); // cannot access this method due to static keyword. 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("JS_teacher", "jsteacher@gmail.com")
// console.log(teacher.createIdManually()); // cannot access this method even is child due to static keyword. 
console.log(teacher.userID());