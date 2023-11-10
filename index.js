// document.addEventListener("DOMContentLoaded", function() {
//   const images = document.querySelectorAll(".moving-image");
//   const side = document.querySelectorAll(".img-");
//   const moveRightButton = document.getElementById("moveRight");
  
//   let isMovingRight = false;
//   let isTransition = false;
//   moveRightButton.addEventListener("click", function() {
//     document.documentElement.style.setProperty('--animate-duration', '2s');
//       isMovingRight = !isMovingRight;
//       isTransition = !isTransition;
//       const animation = isMovingRight ? "moveRight" : "moveLeft";
//       const animationNames = isTransition ? "small-image" : "";
//       console.log(animationNames, isTransition)
//       side.forEach(image => {
//         image.style.animationName = animationNames;
//         void image.offsetHeight; // Trigger reflow to restart the animation
//     });
//       images.forEach(image => {
//           image.style.animationName = animation;
//           void image.offsetWidth; // Trigger reflow to restart the animation
//       });
//   });
// });
// document.querySelectorAll('.element').forEach(function(el) {
//   el.addEventListener('click', function() {
//     this.classList.add('clicked');
//     this.classList.toggle('behind');
//   });
// });
document.getElementById('moveRight').addEventListener('click', function() {
  document.querySelector('.img- img').classList.toggle('half-size');
  document.querySelector('.side').classList.toggle('expand-side');
  document.querySelector('.image-containers').classList.toggle('move-behind');
  
});