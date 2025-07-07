const changeHeading = function () {
    document.querySelector('h1').innerHTML = 'setTimeOut working properly'
}

const change = setTimeout(changeHeading, 4000) // passed reference inside setTimeOut. // by holding setTimeOut inside variable, it still will execute.

setTimeout(function () { // pass function inside setTimeOut as callback function
    console.log("2 second passed");
}, 2000)

document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(change)
    console.log('On clicking button, clearTimeOut executed');
           
}, false)


