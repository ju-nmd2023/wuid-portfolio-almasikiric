//The 2nd line is cited by Anton because javascript loaded before the rest of the website
window.onload = function () {
  const imageElement = document.getElementById("image");
  const buttonElement = document.getElementById("imageButton");
  //Set i to 0 so it will switch to black and white on first press
  let i = 0;

  buttonElement.addEventListener("click", function () {
    if (i === 0) {
      {
        //Switch to black and white if i=0, change i to = 1 so next time it will change back to the color portrait
        imageElement.src = "images/blackandwhite.jpeg";
        i = 1;
      }
    } else {
      //switch to portrait, change i back to 0 so next time it will change to black and white
      imageElement.src = "images/portrait.jpg";
      i = 0;
    }
  });
};
