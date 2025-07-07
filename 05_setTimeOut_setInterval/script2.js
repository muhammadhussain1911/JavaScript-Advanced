// const print = function () { // passed reference inside setTimeOut. // by holding setTimeOut inside variable, it still will execute.
//     console.log("I am continously printing", Date.now());
// }

// setInterval(function () { // pass function inside setInterval as callback function
//     console.log("I am continously printing", Date.now());
// }, 1000)
// const continousExecution = setInterval(print, 1000)

// clearInterval(continousExecution)

// <============Doing above logic using start and stop button============>

let startFunction;

document.getElementById('start').addEventListener('click', function(){
    startFunction = setInterval(function (thirdParameter) {
        console.log(`I am continously printing and ${thirdParameter}`, Date.now());
    }, 100, "Can receive third parameter")
}, false)
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(startFunction)
}, false)