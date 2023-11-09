document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".moving-image");
  const side = document.querySelectorAll(".img-");
  const moveRightButton = document.getElementById("moveRight");
  
  let isMovingRight = false;
  let isTransition = false;
  moveRightButton.addEventListener("click", function() {
      isMovingRight = !isMovingRight;
      isTransition = !isTransition;
      const animation = isMovingRight ? "moveRight" : "moveLeft";
      const animationNames = isTransition ? "small-image" : "";
      console.log(animationNames, isTransition)
      side.forEach(image => {
        image.style.animationName = animationNames;
        void image.offsetWidth; // Trigger reflow to restart the animation
    });
      images.forEach(image => {
          image.style.animationName = animation;
          void image.offsetWidth; // Trigger reflow to restart the animation
      });
  });
});