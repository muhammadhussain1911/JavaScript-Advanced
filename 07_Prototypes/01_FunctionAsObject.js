function square(number) { // Functions can be treated as functions as well as objects.
    return number*number
}

square.power = 21

console.log(square(6));
console.log(square.power);
console.log(square.prototype); // {}
console.log(typeof square.prototype); // object
