function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const creation = new createUser("muhammadhussain1911", "hussain@email.com", "12345678")

console.log(creation);
