//main.js



//---


//load-in.js


// Get all elements with the class "element"
const elements = document.querySelectorAll('.element');

// Add a loaded class to each element with a delay
elements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('loaded');
  }, index * 100); // Add a delay of 100ms for each element
});
