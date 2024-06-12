//main.js



//---


//load-in.js


// Get all elements on the page
const elements = document.querySelectorAll('*');

// Add a loaded class to each element with a delay
elements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('loaded');
  }, index * 70); // Add a delay of 100ms for each element
});
