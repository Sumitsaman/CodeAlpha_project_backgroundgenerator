// Execute JavaScript code once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the color input elements
    var color1Input = document.getElementById('color1');
    var color2Input = document.getElementById('color2');
  
    // Get the result box element
    var resultBox = document.getElementById('resultBox');
  
    // Get the generate button element
    var generateButton = document.getElementById('generateButton');
  
    // Function to generate the background color
    function generateBackground() {
      var color1 = color1Input.value;
      var color2 = color2Input.value;
      var gradient = `linear-gradient(to right, ${color1}, ${color2})`;
      resultBox.style.background = gradient;
    }
  
    // Add a click event listener to the generate button
    generateButton.addEventListener('click', generateBackground);
  });
  