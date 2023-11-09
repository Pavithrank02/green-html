// Define the initial state variables
let isTransition = false;
let isTransitionLeft = animationName; // You should set this to your desired initial value

// Function to start the animation
function startAnimation() {
  isTransition = !isTransition;
  isTransitionLeft = !isTransitionLeft;

  // You can also call startAnimations() here if needed
}

// Add a click event listener to the button
document.getElementById("startAnimation").addEventListener("click", startAnimation);
