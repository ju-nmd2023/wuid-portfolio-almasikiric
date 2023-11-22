window.onload = function () {
  const imageElement = document.getElementById("image");
  const buttonElement = document.getElementById("imageButton");
  let i = 0;

  buttonElement.addEventListener("click", function () {
    if (i < 1) {
      {
        imageElement.src = "images/blackandwhite.jpeg";
        i = i + 1;
      }
    } else {
      imageElement.src = "images/portrait.jpg";
      i = 0;
    }
  });
};
