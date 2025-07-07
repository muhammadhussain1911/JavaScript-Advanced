const colorCode = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        let random = hex[Math.round(Math.random() * 15)];
        color+= random
    }
    return color;
}
let bodyColor;

const startChangeColor = function () {
    if (!bodyColor) {
        bodyColor = setInterval(function () {
            const currentColor = colorCode()
        document.querySelector('body').style.backgroundColor = currentColor;
        document.querySelector('div').innerText = currentColor;
        }, 1000)
    }
}
const stopChangeColor = function () {
    clearInterval(bodyColor);
    bodyColor = null;
}

document.getElementById('start').addEventListener('click', startChangeColor)
document.getElementById('stop').addEventListener('click', stopChangeColor)



// This project is part of asynchronous code, because setTimeOut, and setInterval is part of async code. By default Javascript is not async language. But due to web APIs, JavaScript whole runtime environment is async