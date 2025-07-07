document.getElementById("heading") // Accessing element by ID
// <h1 class="headings" id="heading">Hussain</h1>

document.getElementsByClassName("medium-heading") // // Accessing element by className
// HTMLCollection [h3#med-head.medium-heading, med-head: h3#med-head.medium-heading]

document.getElementById("heading").id // Accessing ID name
'heading'

document.getElementById("heading").className // Accessing className of tag having id: heading
'headings'

document.getElementById("med-head").getAttribute("class") // Accessing attribute name of specific ID. In this case accessing class name. 
'medium-heading'

document.getElementById("med-head").setAttribute("class", "normal-heading") // Set new class name and overwrite previous one.

document.getElementById("med-head").setAttribute("class", "medium-heading normal-heading") // Set new class name along with previous one.
// class="medium-heading normal-heading"

document.getElementById("med-head").className // Now class name updated and two class names are gotten
'medium-heading normal-heading'

document.getElementById("med-head").style.backgroundColor = "green" // Applied green background

const title = document.getElementById("med-head") // Stored in a variable...
title.style.color = "black" // ...then applied styles on variable
title.style.borderRadius = "20px"

// <h3 class="medium-heading normal-heading" id="med-head" style="background-color: yellow; color: black; border-radius: 20px;">JavaScript</h3> // Now title becomes this.

// <h3 class="medium-heading" id="med-head">JavaScript <span style="display: none;" > JS </span></h3>
// Applying innerHTML, innerText and textContent on above <h3> tag.

title.innerHTML // Displays complete content inside it.
'JavaScript <span style="display: none;"> JS </span>'

title.innerText // Display only visible text.
'JavaScript'

title.textContent // bisplay both visible and hidden text.
'JavaScript  JS '

document.querySelector('h2')
document.querySelector('.medium-heading')
document.querySelector('#med-head')
document.querySelector('input[type = "radio"]')
document.querySelector('pre:first-child')

// converting 
Array.from(passHTMLCollectionHere) // converting html collection to array

// <============ changing text on wikipedia page. ============>

document.querySelectorAll('a').forEach((anchor) => { // changing text on wikipedia page.
    anchor.innerText = "Hussain";
    anchor.style.color = "green";
    anchor.style.backgroundColor = "black"
})

document.querySelector('ul').querySelector('li').style.backgroundColor = 'Green' // changing color of one list item.

   console.log(parent.firstElementChild); // accessing first child element
console.log(parent.lastElementChild); // accessing last child element

console.log("NODES:", parent.childNodes); // accessing nodes inside an element. Only one breakline will be count as a node, not multiples lines together. And comment will also be counted inside node.

// <============ Creating Elements ============>

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

