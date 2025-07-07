const myData = {
    myName: "Muhammad Hussain", // JS engine behave myName as "myName".
    age: 22,
    currentStatus: "Student",
    study: "F.A",
    isAppDeveloper: true,
    contact: Symbol('03007009263'),
    offDay: ['Saturday', 'Sunday'],
    "Internet User": true,
}

function thisContext(username, accountName) {
    this.username = username;
    this.accountName = accountName;
    this.welcome = function () {
        console.log(`Salam ${this.username}`);
    }
    return this // this was an empty object in node environment, now the above two values stored in it. And if we not retur this, it will also be fine.
}

const firstAcc = new thisContext("muhammadhussain1911", "github")
const secondAcc = new thisContext("muhammadhussain1911", "linkedin")
console.log(firstAcc);
console.log(secondAcc);
