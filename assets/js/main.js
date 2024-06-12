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

function typingEffect(text, element) {
  let currentChar = 0;
  const interval = setInterval(() => {
    if (currentChar < text.length) {
      element.textContent += text[currentChar];
      currentChar++;
    } else {
      clearInterval(interval);
    }
  }, 100); // adjust this value to change the typing speed
}

// Select all elements with the class "typing-effect"
const elements = document.querySelectorAll('.typing-effect');

// Apply the typing effect to each element
elements.forEach((element) => {
  const text = element.getAttribute('data-text');
  typingEffect(text, element);
});



//---



//null.js
