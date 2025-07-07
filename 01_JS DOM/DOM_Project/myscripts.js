// const parent = document.querySelector('.technology');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);


// for (let index = 0; index < parent.children.length; index++) {
//     console.log(parent.children[index].innerHTML);
    
// }

// for (let index = 0; index < parent.children.length; index++) {
//     parent.children[index].style.color = "green"
    
// }

// console.log(parent.firstElementChild); // accessing first child element
// console.log(parent.lastElementChild); // accessing last child element
// console.log(parent.lastElementChild.outerHTML); // accessing last child element in stringified version

// const tech1 = document.querySelector('.tech')
// console.log(tech1.innerHTML);
// console.log(tech1.parentElement); // accessing parent from child element
// console.log(tech1.nextElementSibling);
// console.log(tech1.nextSibling);
// console.log("NODES:", parent.childNodes); // accessing nodes inside an element.

const mainDiv = document.createElement('div')
console.log(mainDiv);
mainDiv.className = 'parent'
mainDiv.id = 'main'

// console.log(mainDiv);
mainDiv.setAttribute('title', 'main content')
mainDiv.style.backgroundColor = 'green'
mainDiv.style.padding = '12px' // Till now we have created div, but this is is not displaying on page. So we need for attachment.
mainDiv.innerText = 'Hussain'
mainDiv.innerText = 'Muhammad Hussain' // not a best approach

const text = document.createTextNode('Muhammad Hussain'); // best approach
mainDiv.appendChild(text) // attached text inside div.
document.body.appendChild(mainDiv); // attaching the final created mainDiv inside body.

// how you can refactor your code into a reusable function? See scriptFunction.js file.

// <============Methods to add a list item============>

// first method
const uList = document.querySelector('.language')
// console.log(uList);
const list = document.createElement('li')
const listText = document.createTextNode('ruby');
list.appendChild(listText)
uList.appendChild(list)

// second method

function addList(lang) { // This method is not much better as browser need to traverse from whole DOM tree.
    const list = document.createElement('li')
    list.innerHTML = `${lang}`
    document.querySelector('.language').appendChild(list)
}

addList('Typesript')

// third method

function addListOptimizedWay(lang) {
    const list = document.createElement('li')
    list.appendChild(document.createTextNode(lang)) // only this is difference between above and this function.
    document.querySelector('.language').appendChild(list)
}

addListOptimizedWay('python')

// <============Editing element============>

    // first Method
const secondElement = document.querySelector('li:nth-child(2)')
console.log(secondElement);
const newList = document.createElement('li')
newList.textContent = 'NextJS'
secondElement.replaceWith(newList)

// second Method
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TypeScript</li>'

// <============Removing element============>

const removeLastElement = document.querySelector('li:last-child')
removeLastElement.remove()

// <============ event in dom ============>

document.getElementById("header").onclick = xyz; // first method
function xyz() {
document.getElementById('header').style.backgroundColor = "red"
}

document.getElementById("header").addEventListener('click', () => { // second method // best approach
document.getElementById('header').style.backgroundColor = "red"
})

document.getElementById("header").addEventListener('click', function() { // third method using 'this' keyword. but 'this' keyword will not work in case of arrow function 
this.style.backgroundColor = "red"
})