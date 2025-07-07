function createColoredDivs(colorArray, nameArray) {
    for (let i = 0; i < colorArray.length; i++) {
        const mainDiv = document.createElement('div');

        mainDiv.className = 'parent';
        mainDiv.id = `main-${i + 1}`;
        mainDiv.setAttribute('title', 'main content');
        
        // Styling
        mainDiv.style.backgroundColor = colorArray[i];
        mainDiv.style.padding = '12px';
        mainDiv.style.margin = '10px';
        mainDiv.style.color = 'white';
        mainDiv.style.fontWeight = 'bold';

        // Add text
        const text = document.createTextNode(nameArray[i]);
        mainDiv.appendChild(text);

        // Append to body
        document.body.appendChild(mainDiv);
    }
}

// Example usage
createColoredDivs(['green', 'blue', 'red', 'purple', 'magenta'] , ['Muhammad Hussain', 'Ali Raza', 'Hassan Raza', 'Muhammad Umar', 'Sarwar']);
