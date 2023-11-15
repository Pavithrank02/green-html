// document.addEventListener("DOMContentLoaded", function() {
//   const images = document.querySelectorAll(".moving-image");
//   const side = document.querySelectorAll(".img-");

//   let isMovingRight = false;

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
document.getElementById('moveRight').addEventListener('click', function () {
  document.querySelector('.img-').classList.toggle('half-size');
  document.querySelector('.side').classList.toggle('expand-side');
  document.querySelector('.image-containers').classList.toggle('move-behind');
  document.querySelector('.image-container-bottom').classList.toggle('move-down');
  document.querySelector('.secondary').classList.toggle('show-secondary');

});
document.getElementById('moveLeft').addEventListener('click', function () {

  document.querySelector('.img-').classList.toggle('half-size');
  document.querySelector('.side').classList.toggle('expand-side');
  document.querySelector('.image-containers').classList.toggle('move-behind');
  document.querySelector('.image-container-bottom').classList.toggle('move-down');
  document.querySelector('.secondary').classList.toggle('show-secondary');
});








