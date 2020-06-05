/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel() {
  const carrousel = `<div class="carousel">
            <img id='img-1'  src="./assets/carousel/mountains.jpeg" />
            <img id='img-2' class='hidden' src="./assets/carousel/computer.jpeg" />
            <img id='img-3' class='hidden' src="./assets/carousel/trees.jpeg" />
            <img id='img-4' class='hidden' src="./assets/carousel/turntable.jpeg" />
            <div class="right-button"> > </div>
          </div>`;
 
   
  return carrousel
}

document.querySelector('.carousel-container').insertAdjacentHTML("afterbegin", createCarousel());



let index = 1;
let last = 4

document.querySelector('.right-button').addEventListener('click', function(){
  console.log('right button clicked');
  index += 1
  if(index > 4){
    index = 1
  }
  last += 1
  if(last > 4){
    last = 1
  }
  let currentImg = document.querySelector(`#img-${index}`);
  let lastImg = document.querySelector(`#img-${last}`);
  
  // debugger
  currentImg.classList.remove('hidden');
  // debugger
  lastImg.classList.add('hidden');
    
})

// document.querySelector('.left-button').addEventListener('click', function(){
//   console.log('left button clicked');
//   index -= 1
//   if(index === 0){
//     index = 4
//   }
//   last -= 1
//   if(last < 0){
//     last = 4
//   }
//   let currentImg = document.querySelector(`#img-${index}`);
//   let lastImg = document.querySelector(`#img-${last}`);
  
//   // debugger
//   currentImg.classList.remove('hidden');
//   // debugger
//   lastImg.classList.add('hidden');
  

//   console.log('current', currentImg);
//   console.log('last', lastImg);
  
// })