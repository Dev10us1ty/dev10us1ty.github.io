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



//---



//typing-effect.js

// Get all elements on the page
const allElements = document.querySelectorAll('*');

// Add a loaded class to each element with a delay
allElements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('loaded');
  }, index * 70);
});

// Typing effect function
function typingEffect(text, element) {
  let currentChar = 0;
  const interval = setInterval(() => {
    if (currentChar < text.length) {
      element.textContent += text[currentChar];
      currentChar++;
    } else {
      clearInterval(interval);
    }
  }, 200); // added 100ms delay
}

// Select all elements with the class "typing-effect"
const typingElements = document.querySelectorAll('.typing-effect');

// Apply the typing effect to each element
typingElements.forEach((element) => {
  const text = element.getAttribute('data-text');
  setTimeout(() => { // added 100ms delay
    typingEffect(text, element);
  }, 100);
});



//---



//null.js
