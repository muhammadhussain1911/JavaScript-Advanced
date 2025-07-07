const link = document.links[2]
console.log(link);


document.getElementById("header").onclick = xyz;
function xyz() {
document.getElementById('header').style.backgroundColor = "red"
}

// let col = 1
// document.getElementById("header").addEventListener('mouseenter', () => {
//     if (col === 1) {
//         document.getElementById('header').style.backgroundColor = "red"
//         col = 0;
//     } else if (col === 0) {
//         document.getElementById('header').style.backgroundColor = "#333333"
//         col = 1;
//     }
// })

// document.getElementById('header').addEventListener('mouseleave', abc)

// document.getElementById('header').addEventListener('click', xyz)

// function abc() {
//     document.getElementById('header').style.backgroundColor = 'red';
// }

// function xyz() {
//     console.log('Clicked. Removing mouseleave...');
//     document.getElementById('header').removeEventListener('mouseleave', abc)
// }

// document.getElementById("header").onclick = xyz; // first method
// function xyz() {
// document.getElementById('header').style.backgroundColor = "red"
// }

document.querySelector('.logo').onclick = abc; // first method
function abc(event) {
    event.stopPropagation()
document.querySelector('.logo').style.backgroundColor = "green";
console.log('clicked');

}