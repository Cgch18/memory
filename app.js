//Get all the elements by name "thecard" and stores them into an array
const thecards = document.getElementsByClassName("thecard");

// Loop through the array of cards and add an event listener function to each card that triggers the flip when the card is clicked
for (var i = 0; i < thecards.length; i++) {
  (function(index) {
    thecards[index].addEventListener("click", function() {
      thecards[index].classList.toggle("is-flipped");
    });
  })(i);
}

function checkForMatch () {
  const cards = document.queryselectorAll (thecards)
}

// thecards[i].addEventListener("click", function (i) {
//     console.log("You clicked on " + thecards[i]);
//     //thecards[i].classList.toggle("is-flipped");
// })