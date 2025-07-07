const colorCode = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 15)];
  }
  return color;
};

// Function to generate multiple colors
function generateMultipleColors(count) {
  const container = document.getElementById('color-list');
  container.innerHTML = ''; // Clear previous results

  for (let i = 0; i < count; i++) {
    const color = colorCode();

    const colorBox = document.createElement('div');
    colorBox.textContent = color;
    colorBox.style.backgroundColor = color;
    colorBox.style.padding = '20px';
    colorBox.style.margin = '10px';
    colorBox.style.borderRadius = '8px';
    colorBox.style.color = '#fff';
    colorBox.style.textAlign = 'center';
    colorBox.style.fontWeight = 'bold';

    container.appendChild(colorBox);
  }
}
